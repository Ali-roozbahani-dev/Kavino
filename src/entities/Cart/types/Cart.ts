import { ProductAttribute, ProductImage } from "@/entities/Product/types";

export interface CartItem {
  id: number;
  variant_id: number;
  product_id: number;
  product_name: string;
  product_category: string;
  product_brand: string;
  image: ProductImage;
  sku: string;
  quantity: number;
  unit_price: number;
  discount_amount: number;
  final_price: number;
  variant_stock: number;
  attributes: ProductAttribute[];
}

export interface Cart {
  id: number;
  items_count: number;
  subtotal: number;
  product_discount: number;
  coupon_discount: number;
  discount: number;
  total: number;
  items: CartItem[];
  created_at: string;
  updated_at: string;
}
