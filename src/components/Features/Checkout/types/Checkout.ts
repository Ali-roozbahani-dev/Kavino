import { AddressDetail } from "@/entities/Address/types/AddressDetail";
import { Cart } from "@/entities/Cart/types/Cart";
import { Coupon } from "@/entities/Coupon/types/Coupon";
import { ShippingMethod, ShippingMethodList } from "@/components/Features/Checkout/Shipping/types/ShippingMethod";

export interface Checkout{
  cart: Cart;
  address: AddressDetail;
  shipping_method: ShippingMethod;
  shipping_methods: ShippingMethodList;
  coupon: Coupon;
  shipping_cost: number;
}