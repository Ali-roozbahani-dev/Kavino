import { ProductVariant, VariantAttribute } from "@/entities/Product/types";


export function getVariantAttribute(
  variant: ProductVariant,
  key: string
): VariantAttribute | undefined {
  return variant.attributes.find((att) => att.attribute === key);
}

export function getVariantAttributeValue(
  variant: ProductVariant,
  key: string
): string | undefined {
  return getVariantAttribute(variant, key)?.value;
}