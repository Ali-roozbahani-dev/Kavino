import { api } from "@/shared/lib/axios_instance";
import { Cart } from "../../../../entities/Cart/types/Cart";
import { getMe } from "../../Auth";

export async function getCart(): Promise<Cart> {
  await getMe(); // برسی احراز هویت قبل از دریافت سبد خرید

  const res = await api.get<Cart>('/cart/');
  return res.data;
}