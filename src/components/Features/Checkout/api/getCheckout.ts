import { api } from "@/shared/lib/axios_instance";
import { Checkout } from "../types/Checkout";


export async function getCheckout(): Promise<Checkout> {  
  const res = await api.get<Checkout>('/checkout/')

  return res.data;
}