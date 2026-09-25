import { OrdersList } from "@/entities/Orders";
import { api } from "@/shared/lib/axios_instance";

export const getOrders = async (page: number): Promise<OrdersList> => {
  const { data } = await api.get<OrdersList>(`/orders?page=${page}/`);

  return data;
};