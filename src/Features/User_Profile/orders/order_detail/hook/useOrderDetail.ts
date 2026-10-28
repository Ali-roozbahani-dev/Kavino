import { ordersQueryKeys } from "@/entities/Orders";
import { useQuery } from "@tanstack/react-query";
import { getOrderDetail } from "../api/getOrderDetail";

export function useOrderDetail(
  orderId: number,
  enabled = true // برای اینکه بتونم درخواست رو قبل از باز شدن دیالوگ غیر فعال کنم
) {
  return useQuery({
    queryKey: ordersQueryKeys.detail(orderId),
    queryFn: () => getOrderDetail(orderId),
    enabled: enabled && !!orderId,
  });
}