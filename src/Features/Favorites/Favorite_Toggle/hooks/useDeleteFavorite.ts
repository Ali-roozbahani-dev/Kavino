import { api } from "@/shared/lib/axios_instance";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { favoriteQueryKeys } from "../../favoriteQueryKeys";
import { FavoritesId } from "../types/favoritesId";
import { EMPTY_FAV_IDS } from "../empty_fav_ids";

async function deleteFavorite(favoriteId: number) {
  const { data } = await api.delete(`/favorites/${favoriteId}/`);
  return data;
}

export function useDeleteFavorite() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: deleteFavorite,

    onMutate: async (favoriteId: number) => {
      // جلوگیری از بازنویسی آپدیت خوش‌بینانه توسط رفچ‌های در جریان
      await queryClient.cancelQueries({ queryKey: favoriteQueryKeys.ids() });

      // اسنپ‌شات برای بازگردانی در صورت خطا
      const previousFavorites = queryClient.getQueryData<FavoritesId>(
        favoriteQueryKeys.ids()
      );

      // آپدیت خوش‌بینانه: آبجکت با همان شکل FavoritesId برمی‌گردد
      queryClient.setQueryData<FavoritesId>(
        favoriteQueryKeys.ids(),
        (old = EMPTY_FAV_IDS) => ([
          ...old.filter((item) => item.id !== favoriteId),
        ])
      );

      return { previousFavorites };
    },

    onError: (_err, _favoriteId, context) => {
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