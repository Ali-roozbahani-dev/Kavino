import { api } from "@/shared/lib/axios_instance";
import { authQueryKeys } from "@/components/Features/Auth/authQueryKeys";
import { cartQueryKey } from "@/entities/Cart/queryKeys";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import { getAuthChannel } from "../BroadcastChannel/getAuthChannel";
import { authChannelActions } from "../BroadcastChannel/authChannelActions";
import { EMPTY_CART } from "@/entities/Cart/empty_cart";
import { cartChannelActions, getCartChannel } from "../../Cart";

export function useLogout() {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: async () => {
            await api.post("/auth/logout/");
        },

        onSuccess: () => {
            queryClient.setQueryData(authQueryKeys.me, null);
            queryClient.setQueriesData({ queryKey: cartQueryKey } , EMPTY_CART);

            getAuthChannel()?.postMessage({ type: authChannelActions.logout });
            getCartChannel()?.postMessage({type: cartChannelActions.invalidate});

            toast.success("با موفقیت خارج شدید");            
        },

        onError: () => {
            toast.error("خروج از حساب کاربری ناموفق بود");
        },
    });
}