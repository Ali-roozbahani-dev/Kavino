import { addressQueryKeys } from "@/entities/Address/addressQueryKeys";
import { api } from "@/shared/lib/axios_instance";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";

const deleteAddress = async (addressId: number) => {
  await api.delete(`/address/${addressId}/`);
};

export function useDeleteAddress() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: deleteAddress,

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: addressQueryKeys.all,
      });
    },
    onError: ()=> {
        toast.error("خطا در اتصال به شبکه")
    }
  });
  
}