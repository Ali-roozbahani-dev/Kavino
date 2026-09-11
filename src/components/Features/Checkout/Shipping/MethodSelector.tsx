"use client";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { ShippingMethodList } from "@/entities/Shipping/types/ShippingMethod";
import { formatNumberWithoutSeparator } from "@/utils/formatNumber";
import { Truck } from "lucide-react";

interface MethodSelectorProps {
methods: ShippingMethodList;
value?: number | undefined;
onChange?: (methodId: number) => void;
}

export default function MethodSelector({
methods,
value,
onChange,
}: MethodSelectorProps) {

return ( 

    <div className="mt-5 rounded-xl border bg-background p-6 space-y-4"> 
    <div> 
        <h2 className="flex items-center gap-2 text-lg font-semibold">
            <Truck className="size-5" />
             روش ارسال
        </h2> 
        <p className="text-sm text-muted-foreground mt-1">
        روش ارسال سفارش خود را انتخاب کنید. 
        </p> 
    </div>

        <RadioGroup
        value={value?.toString()}
        onValueChange={(id) => onChange?.(Number(id))}
        className="space-y-3"
        >
            {methods.map((method) => (
                <label
                key={method.id}
                htmlFor={`shipping-method-${method.id}`}
                className="flex cursor-pointer items-center justify-between gap-4 
                rounded-lg border p-4 transition-colors hover:bg-muted/50"
                >
                    <div className="flex items-center gap-3">
                        <RadioGroupItem
                            value={method.id.toString()}
                            id={`shipping-method-${method.id}`}
                        />

                        <div>
                            <p className="font-medium">
                                {method.name}
                            </p>

                            <p className="mt-1 text-sm text-muted-foreground">
                                زمان تقریبی تحویل:{" "}
                                {formatNumberWithoutSeparator(method.estimated_days)} روز
                            </p>
                        </div>
                    </div>

                    <div className="shrink-0 text-sm font-medium">
                        {method.price === 0
                            ? "رایگان"
                            : `${method.price.toLocaleString("fa-IR")} تومان`}
                    </div>
                </label>
            ))}
        </RadioGroup>
    </div>
);


}
