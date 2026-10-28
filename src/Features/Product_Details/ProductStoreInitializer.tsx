"use client";
import { useProductStore } from "@/Features/Product_Details/stores/product_store";
import { useEffect } from "react";

type Props = {
  defaultVariantId?: number;
};

export function ProductStoreInitializer({
  defaultVariantId,
}: Props) {
  const setVariant = useProductStore((state) => state.setVariant);
  

  useEffect(() => {
    if(!defaultVariantId) return;
    
    setVariant(defaultVariantId);
  }, [defaultVariantId, setVariant]);

  return null;
}