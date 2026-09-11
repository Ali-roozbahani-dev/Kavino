import { Checkbox } from "@/components/ui/checkbox"
import {
  Field,  
  FieldGroup,  
  FieldLabel,  
  FieldSet,
} from "@/components/ui/field"
import { BrandOption } from "@/entities/Product/types";
import { formatNumberWithoutSeparator } from "@/utils/formatNumber";
import { Controller, useFormContext } from "react-hook-form";


export function BrandCheckBoxes({brandsOption}:{brandsOption: BrandOption[]}) {
  console.log(brandsOption)
  const {control} = useFormContext();

  return (
    <Controller
      name="brand"
      control={control}
      defaultValue={[]}
      render={({ field }) => (
        <FieldSet className="py-4">
          <FieldGroup className="gap-3">
            {brandsOption.map((brand) => (
              <Field key={brand.brand__slug} orientation="horizontal">
                <Checkbox
                  id={brand.brand__slug}
                  checked={field.value.includes(brand.brand__slug)}
                  onCheckedChange={(checked) => {
                    if (checked) {
                      field.onChange([...field.value, brand.brand__slug]);
                    } else {
                      field.onChange(
                        field.value.filter((v: string) => v !== brand.brand__slug)
                      );
                    }
                  }}
                  className="data-[state=checked]:bg-theme"
                />
                <FieldLabel
                  htmlFor={brand.brand__slug}
                  className="font-normal text-primary-text"
                >
                  {brand.brand__name}
                  <span className="text-[13px]">({formatNumberWithoutSeparator(brand.count)})</span>
                </FieldLabel>
              </Field>
            ))}
          </FieldGroup>
        </FieldSet>
      )}
    />
  );
}