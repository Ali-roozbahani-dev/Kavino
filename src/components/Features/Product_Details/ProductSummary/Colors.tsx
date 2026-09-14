"use client";

import { useProductStore } from "@/components/Features/Product_Details/stores/product_store";
import { ProductVariant } from "../../../../entities/Product/types";
import ColorItem from "./ColorItem";
import { getVariantAttributeValue } from "../util/variant_attributes";

export default function Colors({ variants }: { variants: ProductVariant[] }) {
  // فعال variant پیدا کردن
  const selectedVariantId = useProductStore((store) => store.selectedVariantId);
  const activeVariant =
    variants.find((variant) => selectedVariantId === variant.id) || variants[0];

  const colorName = getVariantAttributeValue(activeVariant, "color") ?? "";

  return (
    <div className="py-4">
      {colorName!! && (
        <div className=" flex items-center">
          <span className="me-2 text-[13px] lg:text-[14px] text-primary-text">
            رنگ :
          </span>
          <span className="font-medium text-[13px] lg:text-[14px]">
            {colorName}
          </span>
        </div>
      )}

      <div className="flex mt-3 px-1">
        {variants.map((variant) => (
          <ColorItem
            key={variant.id}
            activeVariant={activeVariant}
            variant={variant}
          />
        ))}
      </div>
    </div>
  );
}
