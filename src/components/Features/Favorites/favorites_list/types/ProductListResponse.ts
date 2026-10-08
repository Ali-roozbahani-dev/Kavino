import { ApiPaginatedResponse } from "@/shared/types/ApiPaginatedResponse";

export type FavoriteListItem = {
  id: number;
  brand: string;
  category: string;
  name: string;
  image: string;
  price: number;
  discount_amount: number;
  total: number;
  slug: string;
  has_stock: boolean;
};

export interface ProductListResponse extends ApiPaginatedResponse {
  results: FavoriteListItem[];
};