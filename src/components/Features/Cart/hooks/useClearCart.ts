import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import { Cart as Tcart } from "@/entities/Cart/types/Cart";
import { cartQueryKey } from "../../../../entities/Cart/queryKeys";
import { api } from "../../../../shared/lib/axios_instance";
import { cartChannelActions } from "../BroadcastChannel/cartChannelActions";
import { getCartChannel } from "../BroadcastChannel/getCartChannel";


export function useClearCart(){
    const queryClient = useQueryClient();

    const mutation = useMutation({
        mutationFn: async (): Promise<Tcart> => {
            const res = await api.delete<Tcart>(`/cart/clear/`);
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
        clearCart: mutation.mutate,
        isClearing: mutation.isPending,
    };
}