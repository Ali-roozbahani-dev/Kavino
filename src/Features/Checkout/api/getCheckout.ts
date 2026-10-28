import { Checkout } from "@/entities/Checkout";
import { api } from "@/shared/lib/axios_instance";


export async function getCheckout(): Promise<Checkout> {  
  const res = await api.get<Checkout>('/checkout/')

  return res.data;
}