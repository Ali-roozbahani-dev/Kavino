"use client";
import { useMemo } from "react";
import {
  Field,
  FieldContent,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useFormContext, Controller, useWatch } from "react-hook-form";
import FieldError from "@/components/ui/Error/FieldError";
import { useProvinces } from "@/entities/Location/hooks/useProvinces";
import { Province } from "@/entities/Location/types/locations";
import AddressLocationFormSkeleton from "@/components/ui/Address/AddressLocationFormSkeleton";

export default function AddressLocationForm() {
  const {
    register,
    control,
    setValue,
    formState: { errors },
  } = useFormContext();

  const { data: provinces, isPending: provincesPending, error: provincesError } = useProvinces();

  // مقدار استان را مستقیماً از فرم می‌خوانیم (چه از defaultValues بیاید، چه از تعامل کاربر)
  const provinceValue = useWatch({ control, name: "province" });
  const selectedProvinceId = provinceValue != null ? String(provinceValue) : "";

  const selectedProvince = useMemo<Province | undefined>(
    () => provinces?.find((province: Province) => String(province.id) === selectedProvinceId),
    [provinces, selectedProvinceId]
  );

  const provinceCities = selectedProvince?.cities;

  if (provincesPending) return <AddressLocationFormSkeleton />;

  if (provincesError) throw new Error("خطا در دریافت اطلاعات");

  const postalCodeError = errors?.postal_code;
  const provinceError = errors?.province;
  const cityError = errors?.city;
  const addressError = errors?.address_line;

  return (
    <>
      {/* استان */}
      <Field>
        <FieldLabel htmlFor="province">استان</FieldLabel>

        <FieldContent>
          <Controller
            name="province"
            control={control}
            render={({ field }) => (
              <Select
                value={field.value ? String(field.value) : ""}
                onValueChange={(value) => {
                  field.onChange(Number(value));
                  // با تغییر دستی استان، شهر انتخاب‌شده‌ی قبلی دیگر معتبر نیست
                  setValue("city", undefined, { shouldDirty: true });
                }}
              >
                <SelectTrigger id="province" className="py-5 rounded-md w-full">
                  <SelectValue placeholder="استان را انتخاب کنید" />
                </SelectTrigger>

                <SelectContent>
                  {provinces.map((province: Province) => (
                    <SelectItem key={province.id} value={String(province.id)}>
                      {province.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            )}
          />

          {typeof provinceError?.message === "string" && (
            <FieldError message={provinceError.message} />
          )}
        </FieldContent>
      </Field>

      {/* شهر */}
      <Field>
        <FieldLabel htmlFor="city">شهر</FieldLabel>

        <FieldContent>
          <Controller
            name="city"
            control={control}
            render={({ field }) => (
              <Select
                value={field.value ? String(field.value) : ""}
                onValueChange={(value) => field.onChange(Number(value))}
                disabled={!selectedProvinceId}
              >
                <SelectTrigger id="city" className="py-5 rounded-md w-full">
                  <SelectValue
                    placeholder={
                      selectedProvinceId ? "شهر را انتخاب کنید" : "ابتدا استان را انتخاب کنید"
                    }
                  />
                </SelectTrigger>

                <SelectContent>
                  {!!provinceCities &&
                    provinceCities.map((city) => (
                      <SelectItem key={city.id} value={String(city.id)}>
                        {city.name}
                      </SelectItem>
                    ))}
                </SelectContent>
              </Select>
            )}
          />

          {typeof cityError?.message === "string" && (
            <FieldError message={cityError.message} />
          )}
        </FieldContent>
      </Field>

      {/* کد پستی */}
      <Field>
        <FieldLabel htmlFor="postalCode">کد پستی</FieldLabel>

        <FieldContent>
          <Input
            {...register("postal_code")}
            id="postalCode"
            className="py-5 rounded-md"
            inputMode="numeric"
            placeholder="کد پستی 10 رقمی  را وارد کنید"
          />

          {typeof postalCodeError?.message === "string" && (
            <FieldError message={postalCodeError.message} />
          )}
        </FieldContent>
      </Field>

      {/* آدرس */}
      <Field className="md:col-span-2">
        <FieldLabel htmlFor="address">آدرس</FieldLabel>

        <FieldContent>
          <Input
            {...register("address_line")}
            id="address"
            className="py-5 rounded-md"
            placeholder="آدرس کامل خود را وارد کنید"
          />

          {typeof addressError?.message === "string" && (
            <FieldError message={addressError.message} />
          )}
        </FieldContent>
      </Field>
    </>
  );
}