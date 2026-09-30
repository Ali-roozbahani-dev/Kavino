import { api } from "@/shared/lib/axios_instance";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import { getAuthChannel } from "../../BroadcastChannel/getAuthChannel";
import { authChannelActions } from "../../BroadcastChannel/authChannelActions";
import { cartChannelActions, getCartChannel } from "../../../Cart";
import { authQueryKeys } from "../../authQueryKeys";
import { cartQueryKey, EMPTY_CART } from "@/entities/Cart";
import { favoriteQueryKeys } from "@/components/Features/Favorites/favoriteQueryKeys";
import { EMPTY_FAV_IDS } from "@/components/Features/Favorites";

export function useLogout() {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: async () => {
            await api.post("/auth/logout/");
        },

        onSuccess: () => {
            queryClient.setQueryData(authQueryKeys.me, null);
            queryClient.setQueryData( cartQueryKey, EMPTY_CART);
            queryClient.setQueryData(favoriteQueryKeys.ids(), EMPTY_FAV_IDS);

            getAuthChannel()?.postMessage({ type: authChannelActions.logout });
            getCartChannel()?.postMessage({type: cartChannelActions.invalidate});

            toast.success("با موفقیت خارج شدید");            
        },

        onError: () => {
            toast.error("خروج از حساب کاربری ناموفق بود");
        },
    });
}