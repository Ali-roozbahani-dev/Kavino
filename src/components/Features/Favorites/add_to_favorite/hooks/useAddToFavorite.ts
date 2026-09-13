import { api } from "@/shared/lib/axios_instance";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { favoriteQueryKeys } from "../../favoriteQueryKeys";

interface AddFavoritePayload {
  product_id: number;
}

async function addFavorite(payload: AddFavoritePayload) {
  const { data } = await api.post("/favorites/", payload);
  return data;
}

export function useAddFavorite() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: addFavorite,

    onMutate: async (payload) => {
      await queryClient.cancelQueries({ queryKey: favoriteQueryKeys.all });

      const previousFavorites = queryClient.getQueryData<number[]>(
        favoriteQueryKeys.all
      );

      queryClient.setQueryData<number[]>(favoriteQueryKeys.all, (old = []) => {
        if (old.includes(payload.product_id)) return old;
        return [...old, payload.product_id];
      });

      return { previousFavorites };
    },

    onError: (_err, _payload, context) => {
      if (context?.previousFavorites) {
        queryClient.setQueryData(favoriteQueryKeys.all, context.previousFavorites);
      }
    },

    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: favoriteQueryKeys.all });
    },
  });
}