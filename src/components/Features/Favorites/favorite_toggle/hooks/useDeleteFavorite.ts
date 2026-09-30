import { api } from "@/shared/lib/axios_instance";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { favoriteQueryKeys } from "../../favoriteQueryKeys";
import { FavoritesId } from "../types/favoritesId";
import { EMPTY_FAV_IDS } from "../empty_fav_ids";

async function deleteFavorite(productId: number) {
  const { data } = await api.delete(`/favorites/${productId}/`);
  return data;
}

export function useDeleteFavorite() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: deleteFavorite,

    onMutate: async (productId: number) => {
      // جلوگیری از بازنویسی آپدیت خوش‌بینانه توسط رفچ‌های در جریان
      await queryClient.cancelQueries({ queryKey: favoriteQueryKeys.ids() });

      // اسنپ‌شات برای بازگردانی در صورت خطا
      const previousFavorites = queryClient.getQueryData<FavoritesId>(
        favoriteQueryKeys.ids()
      );

      // آپدیت خوش‌بینانه: آبجکت با همان شکل FavoritesId برمی‌گردد
      queryClient.setQueryData<FavoritesId>(
        favoriteQueryKeys.ids(),
        (old = EMPTY_FAV_IDS) => ({
          ...old,
          ids: old.ids.filter((id) => id !== productId),
        })
      );

      return { previousFavorites };
    },

    onError: (_err, _productId, context) => {
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