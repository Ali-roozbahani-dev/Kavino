import z from "zod";

export const ReviewFormSchema = z.object({

    comment: z
    .string()
    .trim()
    .min(1, "لطفا نظر خود را وارد کنید"),

    rating: z
    .number()
    .min(1, "لطفا امتیاز خود را انتخاب کنید")
    .max(5)
});

export type TreviewForm = z.infer<typeof ReviewFormSchema>