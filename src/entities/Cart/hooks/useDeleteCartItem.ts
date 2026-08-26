import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { toast } from "sonner";
import { Cart as Tcart } from "@/entities/Cart/types/Cart";
import { cartQueryKey } from "../queryKeys";
import { api } from "../../../api/axios_instance";


export function useDeleteCartItem(){
    const queryClient = useQueryClient();

    const mutation = useMutation({
        mutationFn: async (id: number): Promise<Tcart> => {
            const res = await api.delete<Tcart>(`/cart/items/${id}/`);
            return res.data;
        },
        onSuccess: (newCart)=>{
            queryClient.setQueryData(cartQueryKey , newCart);
        },
        onError: ()=>{
            toast.error("خطایی رخ داد");
        }
    })

    return {
        deleteCartItem: mutation.mutate,
        isDeleting: mutation.isPending,
    };
}