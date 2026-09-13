import { useMutation, useQueryClient } from "@tanstack/react-query";
import { postAddress } from "../api/postAdress";
import { toast } from "sonner";
import { addressQueryKeys } from "../../../../../../entities/Address/addressQueryKeys";
import { CreateAddressInput } from "../../schemas/AddressSchema";



export function useCreateAddress() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data: CreateAddressInput)=> postAddress(data),
    
    onSuccess: () => {
      // برای بهم نخوردن صفحه بندی دیتا از ست کردن کوئری اجتناب میکنیم
      queryClient.invalidateQueries({
        queryKey: addressQueryKeys.all,
      });

      toast.success("آدرس شما با موفقیت ثبت شد");
    },

    onError: ()=> {
      toast.error("خطا در برقراری ارتباط")
    }
  });
}