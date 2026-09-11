import { Tqueries } from "../types/TproductSection";


export const productQueryKey = ( queries: Omit<Tqueries, "page">) => {

return ["productList", queries,] as const;
}
