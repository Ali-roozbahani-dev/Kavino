import * as z from "zod";

const priceField = (positive: boolean) =>
  z.union([z.string(), z.number()])
    .transform((val) => Number(val))
    .pipe(
      positive
        ? z.number().int().positive()
        : z.number().int().nonnegative()
    )
    .optional();
 
export const filterProductsSchema = z.object({
  has_stock: z
  .boolean()
  .optional()
  , 

  category: z
  .string()
  .trim()
  .optional()
  ,

  min_price: priceField(false),

  max_price: priceField(true),

  brand: z
  .string()
  .trim()
  .optional()
  ,
})
.refine(
  (data) =>
    data.min_price === undefined ||
    data.max_price === undefined ||
    data.min_price <= data.max_price,
  {
    path: ["max_price"],
    message: "حداکثر قیمت باید از حداقل قیمت بیشتر باشد.",
  }
);
