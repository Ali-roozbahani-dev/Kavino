import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import { Cart as Tcart } from "@/entities/Cart/types/Cart";
import { cartQueryKey } from "../queryKeys";
import { api } from "../../../api/axios_instance";


interface Params{
    itemId: number;
    currentQuantity: number        
}


export function useChangeQuantity({itemId , currentQuantity}: Params){
    const queryClient = useQueryClient();

    const mutation = useMutation({
        mutationFn: async (quantity: number): Promise<Tcart> => {
            const res = await api.patch<Tcart>(`/cart/items/${itemId}/`,
                {
                    quantity 
                }
            );
            return res.data;
        },
        onSuccess: (newCart)=>{
            queryClient.setQueryData(cartQueryKey , newCart);
        },
        onError: ()=>{
            toast.error("خطایی رخ داد");
        }
    })

    const isIncreasing =
        mutation.isPending &&
        mutation.variables !== undefined &&
        mutation.variables > currentQuantity;

    const isDecreasing =
        mutation.isPending &&
        mutation.variables !== undefined &&
        mutation.variables < currentQuantity;

    return {
        changeQuantity: mutation.mutate,
        isIncreasing,
        isDecreasing,
    };
}