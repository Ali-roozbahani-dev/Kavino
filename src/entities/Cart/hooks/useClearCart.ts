import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { toast } from "sonner";
import { Cart as Tcart } from "@/entities/Cart/types/Cart";
import { cartQueryKey } from "../queryKeys";
import { api } from "../../../api/axios_instance";


export function useClearCart(){
    const queryClient = useQueryClient();

    const mutation = useMutation({
        mutationFn: async (): Promise<Tcart> => {
            const res = await api.delete<Tcart>(`/cart/clear/`);
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
        clearCart: mutation.mutate,
        isClearing: mutation.isPending,
    };
}