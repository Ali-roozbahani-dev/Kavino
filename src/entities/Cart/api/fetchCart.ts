import { api } from "@/shared/lib/axios_instance";
import { Cart } from "../types/Cart";
import { getMe } from "@/entities/Auth/api/getMe";

export async function fetchCart(): Promise<Cart> {
  await getMe(); // برسی احراز هویت قبل از دریافت سبد خرید

  const res = await api.get<Cart>('/cart/');
  return res.data;
}