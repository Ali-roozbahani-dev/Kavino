import { api } from "@/shared/lib/axios_instance";
import { ProductListResponse } from "../types/ProductListResponse";



export async function getFavorites(page: number): Promise<ProductListResponse> {
  const { data } = await api.get<ProductListResponse>(`/favorites?page=${page}`);
  return data;
}

