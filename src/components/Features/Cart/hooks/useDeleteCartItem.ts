import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import { Cart as Tcart } from "@/entities/Cart/types/Cart";
import { cartQueryKey } from "../../../../entities/Cart/queryKeys";
import { api } from "../../../../shared/lib/axios_instance";
import { cartChannelActions } from "../BroadcastChannel/cartChannelActions";
import { getCartChannel } from "../BroadcastChannel/getCartChannel";


export function useDeleteCartItem(){
    const queryClient = useQueryClient();

    const mutation = useMutation({
        mutationFn: async (id: number): Promise<Tcart> => {
            const res = await api.delete<Tcart>(`/cart/items/${id}/`);
            return res.data;
        },
        onSuccess: (newCart)=>{
            queryClient.setQueryData(cartQueryKey , newCart);
            getCartChannel()?.postMessage({type: cartChannelActions.invalidate});
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