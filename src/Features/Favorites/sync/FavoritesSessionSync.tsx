"use client";

import { sessionEvents } from "@/shared/lib/sessionEvents";
import { useQueryClient } from "@tanstack/react-query";
import { useEffect } from "react";
import { favoriteQueryKeys } from "../favoriteQueryKeys";
import { EMPTY_FAV_IDS } from "../Favorite_Toggle/empty_fav_ids";

export function FavoritesSessionSync() {
  const qc = useQueryClient();
  useEffect(
    () =>
      sessionEvents.subscribe((event) => {
        if (event === "logout") qc.setQueryData(favoriteQueryKeys.ids(), EMPTY_FAV_IDS);
        else qc.invalidateQueries({ queryKey: favoriteQueryKeys.all });
      }),
    [qc],
  );
  return null;
}