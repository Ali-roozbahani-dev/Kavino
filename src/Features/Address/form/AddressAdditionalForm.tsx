"use client";

import { Textarea } from "@/ui/textarea";

import {
  Field,
  FieldContent,  
} from "@/ui/field";

import { useFormContext } from "react-hook-form";
import FieldError from "@/ui/Error/FieldError";

export default function AddressAdditionalForm() {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  const descriptionError = errors?.description;

  return (
    <section
      className="rounded-xl md:border bg-background md:p-6 mt-7"
      dir="rtl"
    >
      <h2 className="mb-3 md:mb-6 text-[14px] md:text-[16px] font-semibold">
        یادداشت سفارش (اختیاری)
      </h2>

      <Field>
        <FieldContent>
          <Textarea
            {...register("description")}
            id="order-note"
            rows={4}
            placeholder="اگر توضیحی درباره سفارش دارید اینجا وارد کنید. مثال: لطفاً قبل از ارسال تماس بگیرید."
            className="placeholder:text-[13px] placeholder:md:text-[15px] text-[13px] md:text-[15px]"
          />

          {typeof descriptionError?.message === "string" && (
            <FieldError message={descriptionError.message} />
          )}
        </FieldContent>
      </Field>
    </section>
  );
}
