import { api } from "@/api/axios_instance";
import { Checkout } from "../types/Checkout";
import { UpdateCheckoutRequest } from "../types/UpdateCheckoutRequest";


export async function updateCheckout(data: UpdateCheckoutRequest): Promise<Checkout> {  
  const res = await api.post<Checkout>('/checkout/' , data)

  return res.data;
}