"use client";
import { useProductStore } from "@/components/Features/Product_Details/stores/product_store";
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