import { OrderDetail } from "@/entities/Orders";
import { api } from "@/shared/lib/axios_instance";


export async function getOrderDetail(orderId: number) {
  const { data } = await api.get<OrderDetail>(`/orders/${orderId}/`);

  return data;
}