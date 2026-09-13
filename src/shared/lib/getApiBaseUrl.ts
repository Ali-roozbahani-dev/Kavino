/**
 * آدرس پایهٔ API بک‌اند را برمی‌گرداند، متناسب با محیط اجرا:
 *
 * - در مرورگر: مسیر نسبی "/api". next.config.ts یک rewrite برای
 *   "/api/:path*" دارد که در سمت سرور Next.js (dev و production) این
 *   درخواست را به بک‌اند واقعی proxy می‌کند؛ پس هیچ env ای در باندل
 *   کلاینت لازم نیست و هیچ آدرس مطلقی هم به بیرون درز نمی‌کند.
 *
 * - در سرور (SSR / Server Component / Route Handler): مسیر نسبی برای
 *   fetch در Node.js معنا ندارد (بر خلاف مرورگر که نسبت به origin صفحه
 *   resolve می‌شود)، پس مستقیماً از BACKEND_INTERNAL_URL استفاده می‌کنیم —
 *   همان متغیری که در next.config.ts هم برای ساخت rewrite استفاده شده.
 *
 * از این تابع در هر جایی که ممکن است هم از یک Server Component/صفحه و هم
 * از یک هوک کلاینتی (React Query و ...) صدا زده شود استفاده کنید، مثل
 * getProductsList که هم برای SSR اولیه و هم برای infinite scroll/فیلترهای
 * کلاینتی استفاده می‌شود.
 */
export function getApiBaseUrl(): string {
  const isServer = typeof window === "undefined";
  return isServer
    ? `${process.env.BACKEND_INTERNAL_URL ?? "http://127.0.0.1:8000"}/api`
    : "/api";
}
