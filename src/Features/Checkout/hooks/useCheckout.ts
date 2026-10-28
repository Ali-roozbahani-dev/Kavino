import { useQuery } from "@tanstack/react-query";
import { getCheckout } from "../api/getCheckout";
import { checkoutQueryKey } from "@/entities/Checkout";

 
export function useCheckout({ enabled } :{enabled : boolean}) {

  return useQuery({
    queryKey: checkoutQueryKey,
    queryFn: getCheckout,
    staleTime: 0,
    gcTime: Infinity, 
    enabled: enabled,     
  });
}