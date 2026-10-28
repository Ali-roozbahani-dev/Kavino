import { AddressDetail } from "@/entities/Address/models/AddressDetail.types";
import { Cart } from "@/entities/Cart/models/Cart.types";
import { Coupon } from "@/entities/Coupon/models/Coupon.types";
import { ShippingMethod, ShippingMethodList } from "@/Features/Checkout/Shipping/types/ShippingMethod";

export interface Checkout{
  cart: Cart;
  address: AddressDetail;
  shipping_method: ShippingMethod;
  shipping_methods: ShippingMethodList;
  coupon: Coupon;
  shipping_cost: number;
}