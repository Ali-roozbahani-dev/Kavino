import { TproductList } from "@/entities/Product/types";
import { api } from "@/shared/lib/axios_instance";



export async function getFavorites(page: number): Promise<TproductList> {
  const { data } = await api.get<TproductList>(`/favorites?page=${page}`);
  return data;
}

