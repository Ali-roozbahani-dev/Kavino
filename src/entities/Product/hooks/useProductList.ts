import { useInfiniteQuery } from "@tanstack/react-query";
import { getProductsList } from "@/entities/Product/api/getProductsList";
import { Tqueries } from "../types/TproductSection";
import { productQueryKey } from "@/entities/Product/utils/productQueries";

export function useProductList(queries: Omit<Tqueries, "page">) {
  return useInfiniteQuery({
    queryKey: productQueryKey(queries),

    queryFn: ({ pageParam = 1 }) =>
      getProductsList({
        ...queries,
        page: pageParam,
      }),

    initialPageParam: 1,

    getNextPageParam: (lastPage) => {
      if (!lastPage.next) return undefined;

      const url = new URL(lastPage.next);
      return Number(url.searchParams.get("page"));
    },
  });
}
