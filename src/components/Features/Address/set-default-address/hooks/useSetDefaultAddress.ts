import { InfiniteData, useMutation, useQueryClient } from "@tanstack/react-query";
import { setDefaultAddress } from "../api/setDefaultAddress";
import { toast } from "sonner";
import { addressQueryKeys } from "@/entities/Address/addressQueryKeys";
import { AddressList } from "@/entities/Address";



export function useSetDefaultAddress() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: number) => setDefaultAddress(id),

    onMutate: async (id) => {
      await queryClient.cancelQueries({
        queryKey: addressQueryKeys.all,
      });

      const previous = queryClient.getQueryData(addressQueryKeys.all);

      queryClient.setQueryData(
        addressQueryKeys.all,
        (old: InfiniteData<AddressList, unknown>) => {
          if (!old) return old;

          return {
            ...old,
            pages: old.pages.map((page) => ({
              ...page,
              results: page.results.map((address) => ({
                ...address,
                is_default: address.id === id,
              })),
            })),
          };
        }
      );

      return { previous };
    },

    onError: (_error, _id, context) => {
      if (context?.previous) {
        queryClient.setQueryData(
          addressQueryKeys.all,
          context.previous
        );
      }

      toast.error("خطا در برقراری ارتباط با شبکه");
    },

    onSettled: () => {
      queryClient.invalidateQueries({
        queryKey: addressQueryKeys.all,
      });
    },
  });
}