import { useMutation, useQueryClient } from "@tanstack/react-query";
import { putAddress } from "../api/putAddress";
import { toast } from "sonner";
import { CreateAddressInput } from "../../schemas/AddressSchema";
import { AddressList, addressQueryKeys } from "@/entities/Address";


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