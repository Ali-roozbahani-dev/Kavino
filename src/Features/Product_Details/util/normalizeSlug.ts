
export function normalizeSlug(slug: string) {
  let decoded = slug;
  try {
    decoded = decodeURIComponent(slug);
  } catch {
    // اگر slug خراب بود همون مقدار اصلی رو نگه دار
  }
  return encodeURIComponent(decoded);
}