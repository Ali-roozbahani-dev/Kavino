import { TproductList } from "@/entities/Product/types";
import { api } from "@/shared/lib/axios_instance";



export async function getFavorites(): Promise<TproductList> {
  const { data } = await api.get<TproductList>("/favorites/");
  return data;
}

