import { useQuery } from "@tanstack/react-query";
import { useMe } from "@/Features/Auth/hooks/useMe";
import { getCart } from "../api/getCart";
import { cartQueryKey } from "@/entities/Cart";


export function useCart() {
  const {isPending} = useMe();

  return useQuery({
    queryKey: cartQueryKey,
    queryFn: getCart,
    staleTime: 1000 * 60 * 5,
    gcTime: Infinity,  
    enabled: !isPending, 
    refetchOnMount: true,  
    refetchOnWindowFocus: true,
  });
}
