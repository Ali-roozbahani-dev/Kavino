import z from "zod";



export const loginSchema = z.object({
  mobile: z
    .string()
    .trim()
    .min(1 , "شماره موبایل را وارد کنید .")
    .regex(/^09\d{9}$/, "شماره همراه معتبر نیست !"),
});

export type LoginSchema = z.infer<typeof loginSchema>;