import { api } from "@/shared/lib/axios_instance";
import { Checkout } from "../types/Checkout";
import { PostCheckoutRequest } from "../types/PostCheckoutRequest";


export async function updateCheckout(data: PostCheckoutRequest): Promise<Checkout> {  
  const res = await api.post<Checkout>('/checkout/' , data)

  return res.data;
}