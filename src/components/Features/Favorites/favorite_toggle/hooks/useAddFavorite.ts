import { api } from "@/shared/lib/axios_instance";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { favoriteQueryKeys } from "../../favoriteQueryKeys";
import { toast } from "sonner";

interface AddFavoritePayload {
  product_id: number;
}

async function addFavorite(payload: AddFavoritePayload) {
  await api.post("/favorites/", payload);
}

export function useAddFavorite() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: addFavorite,

    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: favoriteQueryKeys.all });
    },

    onSuccess: ()=>{
      toast.success("به علاقه مندی ها اضافه شد")
    },
  });
}