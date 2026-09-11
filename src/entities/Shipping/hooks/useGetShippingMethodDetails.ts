import { useQuery } from "@tanstack/react-query";
import { getShippingMethodDetails } from "../api/getShippingMethodDetails";

export const shippingMethodDetailsQueryKey = (id: number) =>
  ["shipping-method", id];

export function useGetShippingMethodDetails(id: number) {
  return useQuery({
    queryKey: shippingMethodDetailsQueryKey(id),
    queryFn: () => getShippingMethodDetails(id),
    enabled: !!id,
  });
}