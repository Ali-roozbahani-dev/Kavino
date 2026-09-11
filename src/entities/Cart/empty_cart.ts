import { Cart } from "./types/Cart";

export const EMPTY_CART: Cart = {
  id: 0,
  items_count: 0,
  subtotal: 0,
  product_discount: 0,
  coupon_discount: 0,
  discount: 0,
  total: 0,
  items: [],
  created_at: new Date().toISOString(),
  updated_at: new Date().toISOString(),
};