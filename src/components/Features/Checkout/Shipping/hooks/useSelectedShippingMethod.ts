"use client"
import { useCheckoutStore } from "@/components/Features/Checkout/store/checkoutStore";
import { useGetShippingMethods } from "./useGetShippingMethods";

export default function useSelectedShippingMethod() {
  const {
    data: Methods,
    isPending: Pending,
    error,
  } = useGetShippingMethods();

  const shipping_method_id = useCheckoutStore((state) => state.shipping_method_id);

  const selectedShippingMethod =
    Methods?.find((m) => m.id === shipping_method_id) ?? null;

  return {
    selectedShippingMethod,
    shipping_method_id,
    Methods,
    isPending: Pending,
    error,
  };
}