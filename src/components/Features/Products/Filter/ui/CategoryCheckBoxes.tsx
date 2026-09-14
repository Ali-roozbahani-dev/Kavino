import { Checkbox } from "@/components/ui/checkbox"
import {
  Field,  
  FieldGroup,  
  FieldLabel,  
  FieldSet,
} from "@/components/ui/field"
import { CategoryOption } from "@/entities/Product/types";
import { formatNumberWithoutSeparator } from "@/shared/utils/formatNumber";
import { useFormContext, Controller } from "react-hook-form";


export function CategoryCheckBoxes({categoryOptions}:{categoryOptions:CategoryOption[]}) {
  const {control} = useFormContext();


  return (
    <Controller
      name="category"
      control={control}
      defaultValue={[]}
      render={({ field }) => (
        <FieldSet className="py-4">
          <FieldGroup className="gap-3">
            {categoryOptions.map((cat) => (
              <Field key={cat.category__slug} orientation="horizontal">
                <Checkbox
                  id={cat.category__slug}
                  checked={field.value.includes(cat.category__slug)}
                  onCheckedChange={(checked) => {
                    if (checked) {
                      field.onChange([...field.value, cat.category__slug]);
                    } else {
                      field.onChange(
                        field.value.filter((v: string) => v !== cat.category__slug)
                      );
                    }
                  }}
                  className="data-[state=checked]:bg-theme"
                />
                <FieldLabel
                  htmlFor={cat.category__slug}
                  className="font-normal text-primary-text"
                >
                  {cat.category__name}
                  <span className="text-[13px]">({formatNumberWithoutSeparator(cat.count)})</span>
                </FieldLabel>
              </Field>
            ))}
          </FieldGroup>
        </FieldSet>
      )}
    />
  );
}
