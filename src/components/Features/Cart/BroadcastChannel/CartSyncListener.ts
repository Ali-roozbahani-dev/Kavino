import { useQueryClient } from "@tanstack/react-query";
import { useCallback } from "react";
import { cartChannelActions, CartChannelMessage } from "./cartChannelActions";
import { useBroadcastChannelListener } from "@/shared/lib/broadcast/useBroadcastChannelListener";
import { CART_CHANNEL_NAME } from "./getCartChannel";
import { cartQueryKey } from "@/entities/Cart";

export function CartSyncListener() {
    const queryClient = useQueryClient();

    const handleMessage = useCallback((message: CartChannelMessage) => {
        if (message.type === cartChannelActions.invalidate) {
            queryClient.invalidateQueries({ queryKey: cartQueryKey});
        }
    }, [queryClient]);

    useBroadcastChannelListener<CartChannelMessage>(CART_CHANNEL_NAME, handleMessage);

    return null;
}