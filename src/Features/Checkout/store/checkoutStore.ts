import { create } from "zustand";

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

const initialState = {
  address_id: null,
  shipping_method_id: null,
  coupon_code: null,
};

export const useCheckoutStore = create<CheckoutState>()((set, get) => ({
  ...initialState,

  setAddress: (id) => set({ address_id: id }),

  setShippingMethod: (method) => set({ shipping_method_id: method }),

  setCoupon: (code) => set({ coupon_code: code }),

  initDefaultAddress: (id) => {
    if (get().address_id == null) {
      set({ address_id: id });
    }
  },

  reset: () => set(initialState),
}));