import { useQuery } from "@tanstack/react-query";
import { getShippingMethods } from "../api/getShippingMethods";

export const shippingMethodsQueryKey = ["shipping-methods"];

export function useGetShippingMethods() {
  return useQuery({
    queryKey: shippingMethodsQueryKey,
    queryFn: getShippingMethods,
    staleTime: Infinity,
  });
}