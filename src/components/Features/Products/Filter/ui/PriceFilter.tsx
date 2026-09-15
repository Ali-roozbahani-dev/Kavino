"use client";

import { Slider } from "@/components/ui/slider";
import { useFormContext } from "react-hook-form";
import { useEffect, useRef, useState } from "react";
import { FormInput, FormOutput } from "../types/TproductSection";
import { formatNumber } from "@/shared/utils/formatNumber";

interface Tprops {
  initialMaxPrice: number;
}

export function PriceFilter({ initialMaxPrice }: Tprops) {
  const { watch, setValue } = useFormContext<FormInput, any, FormOutput>();

  const minPrice = watch("min_price") ?? 0;
  const maxPrice = watch("max_price") ?? initialMaxPrice;

  // مقادیر محلی برای نمایش فوری هنگام تایپ / کشیدن اسلایدر
  const [localRange, setLocalRange] = useState<[number, number]>([
    Number(minPrice),
    Number(maxPrice),
  ]);

  const debounceRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const isLocalChange = useRef(false);

  // سینک شدن با فرم وقتی تغییر از بیرون میاد (مثلاً ریست فرم)
  useEffect(() => {
    if (isLocalChange.current) return;
    setLocalRange([Number(minPrice), Number(maxPrice)]);
  }, [minPrice, maxPrice]);

  useEffect(() => {
    return () => {
      if (debounceRef.current) clearTimeout(debounceRef.current);
    };
  }, []);

  const commitRange = (min: number, max: number) => {
    isLocalChange.current = true;
    setLocalRange([min, max]);

    if (debounceRef.current) clearTimeout(debounceRef.current);

    debounceRef.current = setTimeout(() => {
      setValue("min_price", min, { shouldValidate: true, shouldDirty: true });
      setValue("max_price", max, { shouldValidate: true, shouldDirty: true });
      isLocalChange.current = false;
    }, 500);
  };

  // حذف جداکننده‌ها و کاراکترهای غیرعددی قبل از تبدیل
  const parsePrice = (value: string) => {
    const digitsOnly = value.replace(/[^\d]/g, "");
    return digitsOnly === "" ? 0 : Number(digitsOnly);
  };

  return (
    <div className="py-4">
      <div className="px-1">
        <Slider
          onValueChange={([min, max]) => commitRange(min, max)}
          value={localRange}
          max={initialMaxPrice}
          step={1}
          className="w-full mb-6"
        />
      </div>

      <div className="text-[12px] text-primary-text">
        <div className="rounded-md border p-2 mb-3">
          <p>از</p>
          <div className="flex items-center">
            <input
              inputMode="numeric"
              value={formatNumber(localRange[0])}
              onChange={(e) =>
                commitRange(parsePrice(e.target.value), localRange[1])
              }
              className="border md:text-[15px] focus:outline-theme px-2 py-2 me-2 flex-1 rounded-xs"
            />
            <span>تومان</span>
          </div>
        </div>

        <div className="rounded-md border p-2">
          <p>تا</p>
          <div className="flex items-center">
            <input
              inputMode="numeric"
              value={formatNumber(localRange[1])}
              onChange={(e) =>
                commitRange(localRange[0], parsePrice(e.target.value))
              }
              className="border md:text-[15px] focus:outline-theme px-2 py-2 me-2 flex-1 rounded-xs"
            />
            <span>تومان</span>
          </div>
        </div>
      </div>
    </div>
  );
}