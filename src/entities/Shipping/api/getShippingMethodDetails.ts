import { api } from "@/api/axios_instance";
import { ShippingMethod } from "../types/ShippingMethod";



export async function getShippingMethodDetails(
  id: number
): Promise<ShippingMethod> {
  const { data } = await api.get<ShippingMethod>(
    `/shipping/shipping-methods/${id}/`
  );

  return data;
}