export interface ShippingMethod {
  id: number;
  name: string;
  price: number;
  estimated_days: number;
}

export type ShippingMethodList = ShippingMethod[];