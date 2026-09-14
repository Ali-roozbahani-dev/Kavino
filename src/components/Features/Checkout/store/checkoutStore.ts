import { create } from "zustand";
import { CheckoutState } from "../types/CheckoutStore";

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