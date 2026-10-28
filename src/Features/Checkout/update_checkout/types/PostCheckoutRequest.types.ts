export interface PostCheckoutRequest {
  address_id: number;
  shipping_method_id: number;
  coupon_code?: string;
}