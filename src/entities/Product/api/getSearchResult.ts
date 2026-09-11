import { api } from "@/api/axios_instance";
import { ProductListItem, TproductList } from "@/entities/Product/types";

export const fetchResult = async (search: string): Promise<ProductListItem[]> => {
  const res = await api.get<TproductList>(
    "/products/",
    {
      params: {
        search,
        page: 1,
        page_size: 8,
      },
    },
  );

  return res.data.results;
};