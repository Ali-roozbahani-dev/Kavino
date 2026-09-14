import { Tqueries } from "../../../../entities/Product/types/TproductSection";

export const productQueryKey = (queries: Omit<Tqueries, "page">) => {
  return ["productList", queries] as const;
};

// جدید: فقط وابسته به category و search
export const productFacetsQueryKey = (params: {
  category?: string;
  search?: string;
  brand?: string;
}) => {
  return ["productFacets", params] as const;
};
