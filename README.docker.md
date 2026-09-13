# Frontend Production Docker

## معماری کوتاه

- خروجی build با `output: "standalone"` تولید می‌شود؛ image نهایی فقط شامل
  `server.js` + `.next/standalone` + `.next/static` + `public` است، بدون
  `node_modules` کامل و بدون سورس/devDependencies.
- کلاینت هرگز آدرس مطلق بک‌اند را نمی‌بیند. درخواست‌های API به مسیر نسبی
  `/api/...` و تصاویر محصولات به مسیر نسبی `/media/...` زده می‌شوند و در
  سمت سرور Next.js (در `next.config.ts` → `rewrites`) به بک‌اند واقعی
  proxy می‌شوند. آدرس بک‌اند از یک متغیر محیطی سمت سرور
  (`BACKEND_INTERNAL_URL`) در **زمان اجرا** خوانده می‌شود، نه در زمان
  build؛ بنابراین همان image بدون rebuild در محیط‌های مختلف قابل استفاده
  است و جایی `localhost:8000` یا `127.0.0.1:8000` هارد-کد نشده.
- برای همین دلیل، در فایل‌هایی که هم در Server Component و هم در یک هوک
  کلاینتی (مثل React Query) صدا زده می‌شوند (`getProductsList`) و در
  کامپوننت‌های کارت محصول که ممکن است زیر یک `"use client"` رندر شوند
  (`getImageUrl`)، به‌جای خواندن مستقیم `process.env.BACKEND_INTERNAL_URL`
  از یک تشخیص server/client (`typeof window === "undefined"`) استفاده
  شده تا هم در SSR و هم در مرورگر درست کار کند.
- **نکتهٔ امنیتی مهم دربارهٔ `images.dangerouslyAllowLocalIP`:** از
  Next.js 16 به بعد، بهینه‌ساز `next/image` به‌صورت پیش‌فرض جلوی fetch به
  IPهای خصوصی/داخلی (مثل `127.0.0.1` یا رنج IP داخلی Docker) را می‌گیرد
  (محافظت SSRF). چون بک‌اند ما همیشه از طریق rewrite داخلی proxy می‌شود
  و مقصدش همیشه ثابت و توسط خودمان (`BACKEND_INTERNAL_URL`) تعیین می‌شود
  — نه از ورودی کاربر — این پرچم را صریحاً روشن کرده‌ایم. **این کار فقط
  به این دلیل امن است که مقصد کاملاً تحت کنترل ماست؛ اگر جایی در آینده
  آدرس تصویر از ورودی کاربر یا یک منبع خارجی/غیرقابل‌اعتماد ساخته شود،
  این پرچم دیگر نباید روی همان مسیر اعمال شود.**

## Environment Variableهای لازم در Runtime

| متغیر                    | اجباری | مقدار نمونه           | توضیح                                                                 |
|--------------------------|--------|------------------------|------------------------------------------------------------------------|
| `BACKEND_INTERNAL_URL`   | بله    | `http://django:8000`  | آدرس داخلیِ سرویس Django در شبکهٔ Docker Compose (نام سرویس، نه localhost) |
| `NEXT_PUBLIC_SITE_URL`   | بله    | `https://kavino.com`  | آدرس عمومی خودِ سایت؛ فقط برای تگ‌های canonical/OG در متادیتای SEO استفاده می‌شود (ربطی به بک‌اند ندارد) |
| `PORT`                   | خیر    | `3000`                 | پورت داخلی سرور Next.js (پیش‌فرض 3000، همان چیزی که در Dockerfile EXPOSE شده) |
| `HOSTNAME`               | خیر    | `0.0.0.0`              | باید `0.0.0.0` باشد تا سرور از بیرون container قابل دسترسی باشد        |
| `NODE_ENV`               | خیر    | `production`           | در Dockerfile از پیش تنظیم شده                                          |

> نکته: هر متغیری با پیشوند `NEXT_PUBLIC_` در **زمان build** داخل bundle
> کلاینت inline می‌شود و بعداً با تغییر env در runtime عوض نمی‌شود. به همین
> دلیل در این معماری از چنین متغیرهایی برای آدرس بک‌اند استفاده نشده است.

## Build

از مسیر ریشهٔ همین repository (frontend):

```bash
docker build -t kaveh-shop-frontend:latest .
```

## اجرای مستقل (تست سریع)

```bash
docker run --rm -p 3000:3000 \
  -e BACKEND_INTERNAL_URL=http://host.docker.internal:8000 \
  -e NEXT_PUBLIC_SITE_URL=https://kavino.com \
  kaveh-shop-frontend:latest
```

## استفاده در Docker Compose پروژه Backend

در `docker-compose.prod.yml` پروژهٔ Backend (سرویس Django با نام `django`)،
سرویس frontend را این‌طور اضافه کنید:

```yaml
services:
  frontend:
    build:
      context: ../frontend        # مسیر repository این پروژه
      dockerfile: Dockerfile
    environment:
      - BACKEND_INTERNAL_URL=http://django:8000
      - NEXT_PUBLIC_SITE_URL=https://kavino.com
    expose:
      - "3000"
    # پورت به بیرون باز نمی‌شود؛ Nginx روی همین شبکهٔ Compose
    # به frontend:3000 و django:8000 proxy می‌کند.
    depends_on:
      django:
        condition: service_healthy
```

سپس در تنظیمات Nginx، مسیرهای عمومی (`/`) به `frontend:3000` و مسیرهای
`/api/` (در صورت نیاز مستقیم) به `backend:8000` هدایت شوند؛ چون خود
Next.js هم داخلی به `/api/*` پروکسی می‌زند، معمولاً کافی است Nginx همه‌چیز
را به `frontend:3000` بفرستد و Next.js خودش ترافیک API را به بک‌اند پاس بدهد.

## نکات image بهینه

- مرحلهٔ `deps` جدا از `builder` است تا لایهٔ `npm ci` کش شود و با تغییر
  فقط سورس کد، نیازی به نصب دوبارهٔ dependencyها نباشد.
- `node_modules` و devDependencies در image نهایی (`runner`) وجود ندارند؛
  فقط خروجی `standalone` کپی می‌شود.
- container با کاربر غیر-root (`nextjs`) اجرا می‌شود.
- `.dockerignore` شامل `node_modules`, `.next`, `.git`, فایل‌های `.env*` و
  مستندات است تا build context کوچک بماند و secretها به‌اشتباه وارد image نشوند.
