"use client";
import { Label } from "@/ui/label";
import { Switch } from "@/ui/switch";
import { useFormContext, Controller } from "react-hook-form";
import { FormInput, FormOutput } from "../schema/filterProductsSchema";

export function HasStockSwitch() {
  const { control } = useFormContext<FormInput, any, FormOutput>();

  return (
    <div className="flex items-center space-x-2">
      <Controller
        name="has_stock"
        control={control}
        render={({ field }) => (
          <Switch
            checked={field.value}
            onCheckedChange={field.onChange}
            id="has_stock"
            className="data-[state=checked]:bg-theme rotate-180"
          />
        )}
      />

      <Label htmlFor="has_stock">فقط کالا های موجود</Label>
    </div>
  );
}
