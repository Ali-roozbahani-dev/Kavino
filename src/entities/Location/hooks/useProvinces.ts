import { useQuery } from "@tanstack/react-query";
import { getProvinces } from "../api/getProvinces";



export function useProvinces() {
  
  return useQuery({
    queryKey: ["Provinces"],
    queryFn: getProvinces,
    staleTime: Infinity,
    gcTime: 1000 * 60 * 10,  
  });
}