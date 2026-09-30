import { useQuery } from "@tanstack/react-query";
import { favoriteQueryKeys } from "../../favoriteQueryKeys";
import { getFavoritesId } from "../api/getFavoritesId";

export function useFavoritesId() {
  return useQuery({
    queryKey: favoriteQueryKeys.ids(),
    queryFn: getFavoritesId,
  });
}