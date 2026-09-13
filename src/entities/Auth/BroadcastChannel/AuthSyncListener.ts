"use client";
import { useCallback } from "react";
import { useQueryClient } from "@tanstack/react-query";
import { authQueryKeys } from "@/entities/Auth/authQueryKeys";
import { cartQueryKey } from "@/entities/Cart/queryKeys";
import { AUTH_CHANNEL_NAME } from "./getAuthChannel";
import { authChannelActions, AuthChannelMessage } from "./authChannelActions";
import { useBroadcastChannelListener } from "@/shared/lib/broadcast/useBroadcastChannelListener";

export function AuthSyncListener() {
    const queryClient = useQueryClient();

    const handleMessage = useCallback((message: AuthChannelMessage) => {
        if (message.type === authChannelActions.login) {
            queryClient.invalidateQueries({ queryKey: authQueryKeys.me });
            queryClient.invalidateQueries({ queryKey: cartQueryKey });
        }

        if (message.type === authChannelActions.logout) {
            queryClient.setQueryData(authQueryKeys.me, null);
            queryClient.invalidateQueries({ queryKey: cartQueryKey });
        }
    }, [queryClient]);

    useBroadcastChannelListener<AuthChannelMessage>(AUTH_CHANNEL_NAME, handleMessage);

    return null;
}