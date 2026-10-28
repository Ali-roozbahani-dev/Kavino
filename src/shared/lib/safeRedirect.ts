import { getApiBaseUrl } from "./getApiBaseUrl";

export function getSafeCallbackUrl(url: string | undefined, fallback = "/"): string {
  if (!url) return fallback;

  // باید با یک اسلش شروع بشه
  if (!url.startsWith("/")) return fallback;

  // جلوگیری از //evil.com و /\evil.com
  if (url.startsWith("//") || url.startsWith("/\\")) return fallback;

  // جلوگیری از کاراکترهای کنترلی (تب، خط جدید و ...) که مرورگر نادیده میگیره
  if (/[\u0000-\u001F\u007F\\]/.test(url)) return fallback;

  // لایه اضافه: بررسی با URL parser که origin عوض نشده باشه
  try {
    const base = getApiBaseUrl();
    const parsed = new URL(url, base);
    if (parsed.origin !== base) return fallback;
    return parsed.pathname + parsed.search + parsed.hash;
  } catch {
    return fallback;
  }
}