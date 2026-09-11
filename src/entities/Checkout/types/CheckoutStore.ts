export interface CheckoutState {
  address_id: number | null;
  shipping_method_id: number | null;
  coupon_code: string | null;

  setAddress: (id: number) => void;
  setShippingMethod: (method: number) => void;
  setCoupon: (code: string | null) => void;
  initDefaultAddress: (id: number) => void;
  reset: () => void;
}