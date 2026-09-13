import { useQuery } from "@tanstack/react-query";
import { favoriteQueryKeys } from "../../favoriteQueryKeys";
import { getFavorites } from "../api/getFavorites";

export function useFavorites() {
  return useQuery({
    queryKey: favoriteQueryKeys.list(),
    queryFn: getFavorites,
  });
}