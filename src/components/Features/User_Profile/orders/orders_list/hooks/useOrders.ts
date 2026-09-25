"use client";

import { useInfiniteQuery } from "@tanstack/react-query";
import { getOrders } from "../api/getOrders";
import { ordersQueryKeys } from "@/entities/Orders";




export function useOrders() {
  return useInfiniteQuery({
    queryKey: ordersQueryKeys.list(),

    queryFn: ({ pageParam }) => getOrders(pageParam),

    initialPageParam: 1,

    getNextPageParam : (lastPage)=>{
      if(!lastPage.next) return undefined;

      const url = new URL(lastPage.next);
      return Number(url.searchParams.get("page"));
    },

    staleTime: 5 * 60 * 1000,
  });
}