"use client";

import { useProductStore } from "@/entities/Product/stores/product_store";
import { useEffect } from "react";

type Props = {
  defaultVariantId: number;
};

export default function ProductStoreInitializer({
  defaultVariantId,
}: Props) {
  const setVariant = useProductStore((state) => state.setVariant);

  useEffect(() => {
    setVariant(defaultVariantId);
  }, [defaultVariantId, setVariant]);

  return null;
}