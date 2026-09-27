import { api } from "@/shared/lib/axios_instance";
import { getMe } from "../../Auth";
import { Cart } from "@/entities/Cart";

export async function getCart(): Promise<Cart> {
  await getMe(); // برسی احراز هویت قبل از دریافت سبد خرید

  const res = await api.get<Cart>('/cart/');
  return res.data;
}