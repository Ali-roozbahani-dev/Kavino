import { filterProductsSchema } from "@/components/Features/Products/Filter/schema/filterProductsSchema";
import z from "zod";

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
