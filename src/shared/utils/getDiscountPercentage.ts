export function getDiscountPercentage(
  originalPrice: number,
  discountedPrice: number
) {
  return Math.round(
    ((originalPrice - discountedPrice) / originalPrice) * 100
  );
}