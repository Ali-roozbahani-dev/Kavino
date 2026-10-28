"use client";
import { useCallback } from "react";
import { useQueryClient } from "@tanstack/react-query";
import { AUTH_CHANNEL_NAME } from "./authChannelName";
import { authChannelActions, AuthChannelMessage } from "./authChannelActions";
import { useBroadcastChannelListener } from "@/shared/hooks/useBroadcastChannelListener";
import { authQueryKeys } from "../authQueryKeys";

export function AuthSyncListener() {
    const queryClient = useQueryClient();

    
    
    const handleMessage = useCallback((message: AuthChannelMessage) => {

        if (message.type === authChannelActions.login) {
            queryClient.invalidateQueries({ queryKey: authQueryKeys.me });       
        }

        if (message.type === authChannelActions.logout) {
            queryClient.setQueryData(authQueryKeys.me, null);
        }
    }, [queryClient]);

    useBroadcastChannelListener<AuthChannelMessage>(AUTH_CHANNEL_NAME, handleMessage);

    return null;
}