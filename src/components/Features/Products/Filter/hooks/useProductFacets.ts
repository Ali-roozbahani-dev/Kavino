import { useQuery } from "@tanstack/react-query";
import { productFacetsQueryKey } from "../../util/productQueries";
import { getProductsList } from "@/entities/Product";

interface Params {
  category?: string;
  search?: string;
}

export function useProductFacets({ category, search }: Params) {
  return useQuery({
    queryKey: productFacetsQueryKey({ category, search }),
    queryFn: () =>
      getProductsList({ category, search, page: 1 }).then((res) => res.facets),
    staleTime: 5 * 60 * 1000,
  });
}