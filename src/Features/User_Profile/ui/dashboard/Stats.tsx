"use client";

import { useFavorites } from "@/Features/Favorites/Favorites_List/hooks/useFavorites";
import { useOrders } from "@/Features/User_Profile/orders/orders_list/hooks/useOrders";

import { Heart, MapPin, Package } from "lucide-react";
import { StatCard } from "./StatCard";
import { getInfiniteQueryCount } from "@/shared/utils/getInfiniteQueryCount";
import { useAddressesList } from "@/Features/Address/hooks/useAddressesList";

export default function Stats() {
  const {
    data: favoritesData,
    isPending: favoritesLoading,
  } = useFavorites();

  const {
    data: ordersData,
    isPending: ordersLoading,
  } = useOrders();

  const {
    data: addressesData,
    isPending: addressesLoading,
  } = useAddressesList();

  const favoriteCount = getInfiniteQueryCount(favoritesData);
  const orderCount = getInfiniteQueryCount(ordersData);
  const addressCount = getInfiniteQueryCount(addressesData);

  return (
    <section className="grid grid-cols-1 gap-4 sm:grid-cols-3">
      <StatCard
        title="سفارش‌ها"
        value={orderCount}
        description="سفارش ثبت شده"
        icon={Package}
        href="/profile/orders"
        isLoading={ordersLoading}
      />

      <StatCard
        title="علاقه‌مندی‌ها"
        value={favoriteCount}
        description="محصول ذخیره شده"
        icon={Heart}
        href="/profile/favorites"
        isLoading={favoritesLoading}
      />

      <StatCard
        title="آدرس‌ها"
        value={addressCount}
        description="آدرس ثبت شده"
        icon={MapPin}
        href="/profile/addresses"
        isLoading={addressesLoading}
      />
    </section>
  );
}