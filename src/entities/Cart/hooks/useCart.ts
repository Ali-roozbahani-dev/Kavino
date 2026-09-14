import { useQuery } from "@tanstack/react-query";
import { cartQueryKey } from "../queryKeys";
import { getCart } from "../api/getCart";
import { useAuth } from "@/components/Features/Auth/hooks/useAuth";


export function useCart() {
  const {isLoading} = useAuth();

  return useQuery({
    queryKey: cartQueryKey,
    queryFn: getCart,
    staleTime: 1000 * 60 * 5,
    gcTime: Infinity,  
    enabled: !isLoading,    
  });
}
