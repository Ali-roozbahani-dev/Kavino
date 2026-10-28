import { CategoryListItem } from "@/entities/Category/models/Category.types";
import { Brand } from "./Brand.types";

export interface ProductListItem {
  id: number;
  name: string;
  slug: string;
  brand: Brand;
  category: CategoryListItem;
  price: number;
  discount_amount: number;
  final_price: number;
  has_stock: boolean;
  image: string;
}
