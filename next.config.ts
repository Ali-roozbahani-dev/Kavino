import type { NextConfig } from "next";

/**
 * BACKEND_INTERNAL_URL یک متغیر محیطیِ سمت سرور (بدون پیشوند NEXT_PUBLIC_) است
 * که در زمان اجرای container (نه زمان build) مقداردهی می‌شود، مثلاً:
 *   http://backend:8000   (وقتی frontend/backend در یک Docker network هستند)
 * در dev محلی مقدار پیش‌فرض همان http://127.0.0.1:8000 باقی می‌ماند تا رفتار
 * فعلی روی لپ‌تاپ تغییری نکند.
 */
const backendInternalUrl =
  process.env.BACKEND_INTERNAL_URL ?? "http://127.0.0.1:8000";

let backendProtocol: "http" | "https" = "http";
let backendHostname = "127.0.0.1";
let backendPort = "8000";
try {
  const u = new URL(backendInternalUrl);
  backendProtocol = u.protocol.startsWith("https") ? "https" : "http";
  backendHostname = u.hostname;
  backendPort = u.port || (backendProtocol === "https" ? "443" : "80");
} catch {
  // مقدار نامعتبر بود؛ از پیش‌فرض‌های بالا استفاده می‌شود
}

const nextConfig: NextConfig = {
  output: "standalone",

  // Django (APPEND_SLASH) همیشه انتظار trailing slash داره (مثل
  // /api/auth/csrf/)، ولی رفتار پیش‌فرض Next.js اینه که خودش
  // trailing slash رو از مسیرها حذف می‌کنه (ریدایرکت 308) قبل از
  // اینکه اصلاً rewrite اجرا بشه. این باعث یک حلقهٔ بی‌نهایت بین
  // Next.js (حذف /) و Django (اضافه‌کردن /) می‌شه.
  // با غیرفعال کردن این نرمال‌سازی خودکار، مسیر دقیقاً همون‌طور که
  // کلاینت خواسته (با یا بدون /) به rewrite می‌رسه و به Django پاس
  // داده می‌شه؛ رفتار trailing-slash صفحات خودِ Next.js تغییری نمی‌کنه.
  skipTrailingSlashRedirect: true,

  images: {
    unoptimized: process.env.NODE_ENV === "development",
    // بک‌اند از طریق rewrite داخل همین سرور به یک آدرس/IP داخلی
    // (127.0.0.1 در dev، یا نام سرویس Docker مثل django:8000 در production)
    // proxy می‌شود. از Next.js 16 به بعد، بهینه‌ساز next/image به‌صورت
    // پیش‌فرض جلوی fetch به IPهای خصوصی/لوپ‌بک را می‌گیرد (محافظت SSRF).
    // چون این مقصد در معماری ما همیشه بک‌اند *خودمان* است (نه ورودی
    // کاربر)، این محدودیت را صریحاً برای همین سناریو باز می‌کنیم.
    dangerouslyAllowLocalIP: true,
    remotePatterns: [
      {
        protocol: backendProtocol,
        hostname: backendHostname,
        port: backendPort,
        pathname: "/media/**",
      },
      // fallback برای dev محلی وقتی BACKEND_INTERNAL_URL ست نشده و کسی
      // مستقیماً از localhost به‌جای 127.0.0.1 استفاده می‌کند
      {
        protocol: "http",
        hostname: "localhost",
        port: "8000",
        pathname: "/media/**",
      },
    ],
  },

  async rewrites() {
    return [
      {
        // کلاینت به مسیر نسبی /api/* درخواست می‌زند؛ سرور Next.js آن را در
        // runtime به backendInternalUrl پروکسی می‌کند. هیچ آدرس مطلقی داخل
        // bundle کلاینت inline نمی‌شود.
        // نکته: الگوی catch-all «:path*» در rewrite، اسلش پایانی مسیر
        // ورودی را در بازسازی مسیر مقصد حفظ نمی‌کند (چه کلاینت درخواستش
        // با «/» تمام شده باشد چه نه). چون تمام endpointهای Django با
        // APPEND_SLASH انتظار یک «/» پایانی دارند، همیشه خودمان صریحاً
        // یک «/» به انتهای مقصد اضافه می‌کنیم تا هیچ‌وقت نیازی به ریدایرکت
        // اضافهٔ Django (و ریسک حلقه با نرمال‌سازی Next) نباشد.
        source: "/api/:path*",
        destination: `${backendInternalUrl}/api/:path*/`,
      },
      {
        // برخلاف /api، مسیرهای /media به فایل واقعی اشاره دارند
        // (مثلاً .../hero/x.webp) و نباید «/» پایانی اضافه بگیرند.
        source: "/media/:path*",
        destination: `${backendInternalUrl}/media/:path*`,
      },
    ];
  },
};

export default nextConfig;
