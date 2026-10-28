import { FormOutput } from "../schema/filterProductsSchema";


export type Ordering =
  | "created_at"
  | "-created_at"
  | "default_price"
  | "-default_price";

export interface Tqueries extends FormOutput {
  search?: string;
  page: number;
  ordering?: Ordering;
}
