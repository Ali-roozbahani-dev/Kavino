"use client";
import { useOrders } from "./hooks/useOrders";
import { useInfiniteScrollObserver } from "@/shared/hooks/useInfiniteScrollObserver";
import SectionLoadingDots from "@/ui/Loading/SectionLoadingDots";
import { EmptyOrders } from "../../ui/orders/EmptyOrders";
import { OrderListHeader } from "../../ui/orders/OrderListHeader";
import { OrdersListItem } from "../../ui/orders/OrdersListItem";

export function OrdersList() {
  const {
    data,
    isPending,
    fetchNextPage,
    isFetchingNextPage,
    hasNextPage,
    error,
  } = useOrders();

  const sentinel = useInfiniteScrollObserver({
    fetchNextPage,
    isFetchingNextPage,
    hasNextPage,
  });

  if (isPending) {
    return <SectionLoadingDots containerClass="h-40" />;
  }

  if (error) {
    throw new Error("خطایی رخ داد");
  }

  const orders = data?.pages.flatMap((page) => page.results) ?? [];
   

  if (!orders.length) {
    return <EmptyOrders />;
  }

  return (
    <>
      <OrderListHeader orders={orders} />

      <div className="space-y-4">
        {orders.map((order) => (
          <OrdersListItem 
          key={order.id} 
          order={order}
          />
        ))}

        {/* Infinite Scroll Sentinel */}
        <div ref={sentinel} className="h-px" />

        {isFetchingNextPage && (
          <SectionLoadingDots containerClass="h-20" />
        )}
      </div>
    </>
  );
}