import { useMutation, useQueryClient } from "@tanstack/react-query";
import { setDefaultAddress } from "../api/setDefaultAddress";
import { addressQueryKeys } from "../addressQueryKeys";
import { AddressListItem } from "../types/AddressList";
import { toast } from "sonner";

export function useSetDefaultAddress() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: number) => setDefaultAddress(id),

    // تغییر به صورت optimistic update
    onMutate: async (id: number) => {
      await queryClient.cancelQueries({ queryKey: addressQueryKeys.all });
      const previous = queryClient.getQueryData(addressQueryKeys.all);

      queryClient.setQueryData(addressQueryKeys.all, (old: AddressListItem[] = []) =>
        old.map((a) => ({ ...a, is_default: a.id === id }))
      );

      return { previous };
    },

    onError: (_err, _id, context) => {
      if (context?.previous) {
        queryClient.setQueryData(addressQueryKeys.all, context.previous);
      }
      toast.error("خطا در برقراری ارتباط با شبکه")
    },

    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: addressQueryKeys.all });
    },
  });
}