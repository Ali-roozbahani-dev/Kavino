import { ProductListItem, TproductList } from "@/entities/Product";
import { api } from "@/shared/lib/axios_instance";

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