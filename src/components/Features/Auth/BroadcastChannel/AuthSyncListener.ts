"use client";
import { useCallback } from "react";
import { useQueryClient } from "@tanstack/react-query";
import { authQueryKeys } from "@/components/Features/Auth";
import { cartQueryKey } from "@/entities/Cart";
import { AUTH_CHANNEL_NAME } from "./getAuthChannel";
import { authChannelActions, AuthChannelMessage } from "./authChannelActions";
import { useBroadcastChannelListener } from "@/shared/hooks/useBroadcastChannelListener";
import { EMPTY_FAV_IDS, favoriteQueryKeys } from "../../Favorites";

export function AuthSyncListener() {
    const queryClient = useQueryClient();

    
    const handleMessage = useCallback((message: AuthChannelMessage) => {
        if (message.type === authChannelActions.login) {
            queryClient.invalidateQueries({ queryKey: authQueryKeys.me });
            queryClient.invalidateQueries({ queryKey: cartQueryKey });   
            queryClient.invalidateQueries({queryKey: favoriteQueryKeys.all});         
        }

        if (message.type === authChannelActions.logout) {
            queryClient.setQueryData(authQueryKeys.me, null);
            queryClient.invalidateQueries({ queryKey: cartQueryKey });
            queryClient.setQueryData(favoriteQueryKeys.all , EMPTY_FAV_IDS);
        }
    }, [queryClient]);

    useBroadcastChannelListener<AuthChannelMessage>(AUTH_CHANNEL_NAME, handleMessage);

    return null;
}