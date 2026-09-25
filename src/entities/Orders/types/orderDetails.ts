export interface OrderDetail {
  id: number;
  order_number: string;

  status: "pending" | "paid" | "cancelled";
  status_display: string;

  address_snapshot: string;

  subtotal: string;
  coupon: string;
  discount_amount: string;

  shipping_method_snapshot: string;
  shipping_method_name: string;
  shipping_cost: string;

  total_amount: string;

  note: string;

  items: OrderDetailItem[];

  created_at: string;
  updated_at: string;
}

export interface OrderDetailItem {
  id: number;
  quantity: number;

  price: string;
  discount_amount: string;
  final_price: string;

  product_snapshot: string;
}