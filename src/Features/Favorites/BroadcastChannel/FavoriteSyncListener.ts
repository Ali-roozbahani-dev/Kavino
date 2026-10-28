"use client";

import { AUTH_CHANNEL_NAME } from "@/Features/Auth";
import { authChannelActions, AuthChannelMessage } from "@/Features/Auth/BroadcastChannel/authChannelActions";
import { useBroadcastChannelListener } from "@/shared/hooks/useBroadcastChannelListener";
import { useQueryClient } from "@tanstack/react-query";
import { useCallback } from "react";
import { favoriteQueryKeys } from "../favoriteQueryKeys";


export function FavoriteSyncListener() {
  const queryClient = useQueryClient();
    

  // login / logout
  const handleAuthMessage = useCallback(
    (message: AuthChannelMessage) => {
      if (message.type === authChannelActions.logout || 
        message.type === authChannelActions.login
      ) {
        queryClient.invalidateQueries({ queryKey: favoriteQueryKeys.all });
      }
    },
    [queryClient],
  );
  useBroadcastChannelListener<AuthChannelMessage>(AUTH_CHANNEL_NAME, handleAuthMessage);

  return null;
}