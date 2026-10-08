import { z } from "zod";

export const updateUserSchema = z.object({
  phone_number: z
    .string()
    .min(11, "شماره موبایل باید ۱۱ رقم باشد")
    .max(11, "شماره موبایل باید ۱۱ رقم باشد"),

  first_name: z
    .string()
    .min(2, "نام باید حداقل ۲ کاراکتر باشد")
    .max(50, "نام نمی‌تواند بیشتر از ۵۰ کاراکتر باشد"),

  last_name: z
    .string()
    .min(2, "نام خانوادگی باید حداقل ۲ کاراکتر باشد")
    .max(50, "نام خانوادگی نمی‌تواند بیشتر از ۵۰ کاراکتر باشد"),

  email: z
    .string()
    .email("ایمیل وارد شده معتبر نیست"),
});

export type UpdateUserForm = z.infer<typeof updateUserSchema>;