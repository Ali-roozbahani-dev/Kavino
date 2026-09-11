"use client";

import { Textarea } from "@/components/ui/textarea";

import {
  Field,
  FieldContent,  
} from "@/components/ui/field";

import { useFormContext } from "react-hook-form";
import FieldError from "@/components/ui/Error/FieldError";

export default function AddressAdditionalForm() {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  const descriptionError = errors?.description;

  return (
    <section
      className="rounded-xl border bg-background p-6 mt-5"
      dir="rtl"
    >
      <h2 className="mb-6 text-lg font-semibold">
        یادداشت سفارش (اختیاری)
      </h2>

      <Field>
        <FieldContent>
          <Textarea
            {...register("description")}
            id="order-note"
            rows={4}
            placeholder="اگر توضیحی درباره سفارش دارید اینجا وارد کنید. مثال: لطفاً قبل از ارسال تماس بگیرید."
          />

          {typeof descriptionError?.message === "string" && (
            <FieldError message={descriptionError.message} />
          )}
        </FieldContent>
      </Field>
    </section>
  );
}
