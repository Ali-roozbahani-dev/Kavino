import { api } from "@/shared/lib/axios_instance";
import { ShippingMethodList } from "../types/ShippingMethod";

export async function getShippingMethods(): Promise<ShippingMethodList> {
  const { data } = await api.get<ShippingMethodList>(
    "/shipping/shipping-methods/"
  );

  return data;
}