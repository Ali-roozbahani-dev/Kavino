"use client";

import { useCallback } from "react";
import { useQueryClient } from "@tanstack/react-query";
import { useBroadcastChannelListener } from "@/shared/hooks/useBroadcastChannelListener";
import { CART_CHANNEL_NAME } from "./getCartChannel";
import { cartChannelActions, type CartChannelMessage } from "./cartChannelActions";
import { cartQueryKey, EMPTY_CART } from "@/entities/Cart";
import { authChannelActions, AuthChannelMessage } from "@/Features/Auth/BroadcastChannel/authChannelActions";
import { AUTH_CHANNEL_NAME } from "@/Features/Auth/BroadcastChannel/authChannelName";

export function CartSyncListener() {
  const queryClient = useQueryClient();

  // تغییرات سبد از تب‌های دیگه
  const handleCartMessage = useCallback(
    (message: CartChannelMessage) => {
      if (message.type === cartChannelActions.invalidate) {
        queryClient.invalidateQueries({ queryKey: cartQueryKey });
      }
    },
    [queryClient],
  );

  // login / logout
  const handleAuthMessage = useCallback(
    (message: AuthChannelMessage) => {
      if (message.type === authChannelActions.logout) {
        queryClient.setQueryData(cartQueryKey, EMPTY_CART);
      }
      if (message.type === authChannelActions.login) {
        queryClient.invalidateQueries({ queryKey: cartQueryKey });
      }
    },
    [queryClient],
  );

  useBroadcastChannelListener<CartChannelMessage>(CART_CHANNEL_NAME, handleCartMessage);
  useBroadcastChannelListener<AuthChannelMessage>(AUTH_CHANNEL_NAME, handleAuthMessage);

  return null;
}