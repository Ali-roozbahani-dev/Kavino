import { useQuery } from "@tanstack/react-query";
import { getCities } from "../api/getCities";



export function useCities() {
  
  return useQuery({
    queryKey: ["cities"],
    queryFn: getCities,
    staleTime: Infinity,
    gcTime: 1000 * 60 * 10,  
  });
}