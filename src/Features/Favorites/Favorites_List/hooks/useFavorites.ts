import { useInfiniteQuery } from "@tanstack/react-query";
import { favoriteQueryKeys } from "../../favoriteQueryKeys";
import { getFavorites } from "../api/getFavorites";

export function useFavorites() {
  return useInfiniteQuery({
    queryKey: favoriteQueryKeys.list(),

    queryFn: ({pageParam})=> getFavorites(pageParam),

    initialPageParam: 1,

    getNextPageParam : (lastPage)=>{
      if(!lastPage.next) return undefined;

      const url = new URL(lastPage.next);
      return Number(url.searchParams.get("page"));
    } 
  });
}