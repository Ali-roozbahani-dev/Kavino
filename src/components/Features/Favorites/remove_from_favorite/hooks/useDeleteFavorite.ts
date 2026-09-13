import { api } from "@/shared/lib/axios_instance";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { favoriteQueryKeys } from "../../favoriteQueryKeys";

async function deleteFavorite(productId: number) {
  const { data } = await api.delete(`/favorites/${productId}/`);
  return data;
}

export function useDeleteFavorite() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: deleteFavorite,

    onMutate: async (productId) => {
      await queryClient.cancelQueries({ queryKey: favoriteQueryKeys.all });

      const previousFavorites = queryClient.getQueryData<number[]>(
        favoriteQueryKeys.all
      );

      queryClient.setQueryData<number[]>(favoriteQueryKeys.all, (old = []) =>
        old.filter((id) => id !== productId)
      );

      return { previousFavorites };
    },

    onError: (_err, _productId, context) => {
      if (context?.previousFavorites) {
        queryClient.setQueryData(favoriteQueryKeys.all, context.previousFavorites);
      }
    },

    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: favoriteQueryKeys.all });
    },
  });
}