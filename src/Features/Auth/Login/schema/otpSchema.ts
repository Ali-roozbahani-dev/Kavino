import { z } from "zod"

export const otpSchema = z.object({
  otp: z
    .string()
    .min(1, { message: "کد تایید را وارد کنید" })
    .length(6, { message: "کد تایید باید ۶ رقم باشد" })
    .regex(/^\d+$/, { message: "کد تایید فقط باید شامل عدد باشد" }),
})

export type OtpFormValues = z.infer<typeof otpSchema>