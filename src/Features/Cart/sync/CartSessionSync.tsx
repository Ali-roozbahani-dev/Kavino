"use client";

import { cartQueryKey, EMPTY_CART } from "@/entities/Cart";
import { sessionEvents } from "@/shared/lib/sessionEvents";
import { useQueryClient } from "@tanstack/react-query";
import { useEffect } from "react";

export function CartSessionSync() {
  const qc = useQueryClient();
  useEffect(
    () =>
      sessionEvents.subscribe((event) => {
        if (event === "logout") qc.setQueryData(cartQueryKey, EMPTY_CART);
        else qc.invalidateQueries({ queryKey: cartQueryKey });
      }),
    [qc],
  );
  return null;
}