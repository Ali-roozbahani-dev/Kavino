import { useQuery } from "@tanstack/react-query";
import { cartQueryKey } from "../queryKeys";
import { fetchCart } from "../api/fetchCart";
import { useAuth } from "@/entities/Auth/hooks/useAuth";


export function useCart() {
  const {isLoading} = useAuth();

  return useQuery({
    queryKey: cartQueryKey,
    queryFn: fetchCart,
    staleTime: 1000 * 60 * 5,
    gcTime: Infinity,  
    enabled: !isLoading,    
  });
}
