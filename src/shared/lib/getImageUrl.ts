/**
 * مسیر تصویری که از بک‌اند می‌آید (مثل "/media/products/x.jpg") را به
 * یک src قابل‌استفاده در next/image تبدیل می‌کند.
 *
 * چرا لازم است: قبلاً src به‌صورت
 *   `${process.env.BACKEND_INTERNAL_URL}${image}`
 * ساخته می‌شد. BACKEND_INTERNAL_URL یک env سمت سرور است (بدون پیشوند
 * NEXT_PUBLIC_)، پس هرجا این کد در باندل کلاینت قرار بگیرد (مثلاً چون
 * کامپوننتی که آن را import می‌کند زیرِ یک "use client" است)، مقدارش در
 * مرورگر undefined می‌شود و src نهایی چیزی مثل "undefined/media/x.jpg"
 * از آب درمی‌آید.
 *
 * راه‌حل: از مسیر نسبی استفاده می‌کنیم. next.config.ts یک rewrite برای
 * "/media/:path*" دارد که در سمت سرور Next.js (هم در dev هم در production)
 * درخواست را به بک‌اند واقعی proxy می‌کند؛ پس همین مسیر نسبی هم در مرورگر
 * (نسبت به origin سایت) و هم در سرور درست کار می‌کند و به هیچ env ای در
 * کلاینت نیاز ندارد.
 */
export function getImageUrl(path: string): string {
  if (path.startsWith("http://") || path.startsWith("https://")) return path;
  return path.startsWith("/") ? path : `/${path}`;
}
