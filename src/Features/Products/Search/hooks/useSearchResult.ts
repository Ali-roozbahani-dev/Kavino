import { useQuery } from "@tanstack/react-query";
import { fetchResult } from "../api/getSearchResult";



export function useSearchResult(search: string) {
  return useQuery({
    queryKey: ["searchResult", search],
    queryFn: () => fetchResult(search),
    enabled: search.trim().length !== 0,
    gcTime: 1000 * 60,    
  });
}
