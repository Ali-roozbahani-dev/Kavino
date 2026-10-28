import { z } from "zod";

export const updateUserSchema = z.object({
  first_name: z    
    .string()
    .min(2, "نام باید حداقل ۲ کاراکتر باشد")
    .max(50, "نام نمی‌تواند بیشتر از ۵۰ کاراکتر باشد")
    .optional(),

  last_name: z
    .string()
    .min(2, "نام خانوادگی باید حداقل ۲ کاراکتر باشد")
    .max(50, "نام خانوادگی نمی‌تواند بیشتر از ۵۰ کاراکتر باشد")
    .optional(),

  email: z
    .string()
    .email("ایمیل وارد شده معتبر نیست")
    .optional()
});

export type UpdateUserForm = z.infer<typeof updateUserSchema>;