import z from "zod";
import { filterProductsSchema } from "../schema/filterProductsSchema";

export type FormInput = z.input<typeof filterProductsSchema>;
export type FormOutput = z.output<typeof filterProductsSchema>;

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
