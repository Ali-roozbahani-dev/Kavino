import { api } from "@/shared/lib/axios_instance";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { favoriteQueryKeys } from "../../favoriteQueryKeys";
import { FavoritesId } from "../types/favoritesId";
import { EMPTY_FAV_IDS } from "../empty_fav_ids";

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

    onMutate: async (payload: AddFavoritePayload) => {
      // جلوگیری از بازنویسی آپدیت خوش‌بینانه توسط رفچ‌های در جریان
      await queryClient.cancelQueries({ queryKey: favoriteQueryKeys.ids() });

      // اسنپ‌شات برای بازگردانی در صورت خطا
      const previousFavorites = queryClient.getQueryData<FavoritesId>(
        favoriteQueryKeys.ids()
      );

      queryClient.setQueryData<FavoritesId>(
        favoriteQueryKeys.ids(),
        (old = EMPTY_FAV_IDS) => {
          if (old.ids.includes(payload.product_id)) return old;
          return { ...old, ids: [...old.ids, payload.product_id] };
        }
      );

      return { previousFavorites };
    },

    onError: (_err, _payload, context) => {
      queryClient.setQueryData(
        favoriteQueryKeys.ids(),
        context?.previousFavorites
      );
    },

    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: favoriteQueryKeys.all });
    },
  });
}