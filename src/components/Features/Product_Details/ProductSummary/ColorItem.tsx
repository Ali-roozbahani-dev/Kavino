"use client";

import { useProductStore } from "@/components/Features/Product_Details/stores/product_store";
import {
  ProductVariant,
} from "../../../../entities/Product/types";
import { getVariantAttribute } from "../util/variant_attributes";

interface Props {
  activeVariant: ProductVariant;
  variant: ProductVariant;
}

export default function ColorItem({ activeVariant, variant }: Props) {
  const setVariant = useProductStore((store) => store.setVariant);
  const isActive = activeVariant.id === variant.id;

  const colorAttribute = getVariantAttribute(variant, "color");
  if (!colorAttribute) return null;

  const color_code = colorAttribute.properties.code;
  if (typeof color_code !== "string") return null;

  return (
    <button
      onClick={() => setVariant(variant.id)}
      className={`${isActive ? " border-2 border-theme font-semibold p-0.75" : "border"} 
        flex items-center me-3  cursor-pointer 
        rounded-sm w-8 lg:w-9 h-8 lg:h-9`}
    >
      <div
        style={{
          background: color_code,
        }}
        className=" border w-full h-full rounded-sm"
      ></div>
    </button>
  );
}
