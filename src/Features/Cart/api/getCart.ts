import { Cart } from "@/entities/Cart";
import { api } from "@/shared/lib/axios_instance";

export async function getCart(): Promise<Cart> {

  const res = await api.get<Cart>('/cart/');
  return res.data;
}