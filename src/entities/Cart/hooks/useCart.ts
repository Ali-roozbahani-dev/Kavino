import { useQuery } from "@tanstack/react-query";
import { cartQueryKey } from "../queryKeys";
import { useAuth } from "@/components/Features/Auth/hooks/useAuth";
import { getCart } from "../api/getCart";


export function useCart() {
  const {isLoading} = useAuth();

  return useQuery({
    queryKey: cartQueryKey,
    queryFn: getCart,
    staleTime: 1000 * 60 * 5,
    gcTime: Infinity,  
    enabled: !isLoading, 
    refetchOnMount: true,  
    refetchOnWindowFocus: true,
  });
}
