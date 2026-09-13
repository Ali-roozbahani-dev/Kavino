import { z } from "zod";


export const createAddressSchema = z.object({
  title: z.string(),
  address_type: z.enum(["home", "work", "other"]),
  receiver_name: z.string().min(1, "نام و نام خانوادگی گیرنده الزامی است"),
  receiver_phone: z
    .string()
    .min(1,"شماره تماس گیرنده را وارد کنید")
    .regex(/^9\d{9}$/, "شماره موبایل معتبر نیست"),
  province: z.number("استان را انتخاب کنید"),
  city: z.number("شهر را انتخاب کنید"),
  address_line: z.string().min(1, "آدرس خود را وارد کنید"),
  alley: z.string(),
  plaque: z.string(),
  unit: z.string(),
  postal_code: z
    .string()
    .regex(/^\d{10}$/, "کد پستی باید ۱۰ رقم باشد"),
  description: z.string(),
  latitude: z.string(),
  longitude: z.string(),
});

export type CreateAddressInput = z.infer<typeof createAddressSchema>;

export const updateAddressSchema = createAddressSchema;

export type UpdateAddressInput = z.infer<typeof updateAddressSchema>;
