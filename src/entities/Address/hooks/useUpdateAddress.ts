import { useMutation, useQueryClient } from "@tanstack/react-query";
import { AddressDetail } from "../types/AddressDetail";
import { putAddress } from "../api/putAddress";
import { addressQueryKeys } from "../addressQueryKeys";
import { toast } from "sonner";
import { AddressList } from "../types/AddressList";
import { CreateAddressInput } from "../schemas/AddressSchema";


export function useUpdateAddress() {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: ({id , data}: {id: number , data: CreateAddressInput})=> putAddress(id,data),

    onSuccess: (newAddress)=>{
      queryClient.setQueryData(addressQueryKeys.selected , newAddress);

      queryClient.setQueryData(
              addressQueryKeys.all,
              (oldData: AddressList) => {
                if (!oldData) return oldData;
      
                return {
                  ...oldData,
                  results: oldData.results.map((address) =>
                    address.id === newAddress.id
                      ? newAddress
                      : address
                  ),
                };
              }
            );
      
      toast.success("تغیرات با موفقیت ذخیره شد")
    },

    onError: ()=> {
      toast.error("خطا در برقراری ارتباط")
    }
  });
}