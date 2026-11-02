"use client";
import { RadioGroup, RadioGroupItem } from "@/ui/radio-group";
import { ShippingMethodList } from "@/Features/Checkout/Shipping/types/ShippingMethod";
import { formatNumberWithoutSeparator } from "@/shared/utils/formatNumber";
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

    <div className="mt-7 rounded-md md:rounded-xl md:border bg-background p-0 md:p-3 lg:p-6 space-y-4"> 
    <div> 
        <h2 className="flex items-center gap-2 text-[15px] md:text-lg font-semibold">
            <Truck className="size-4.5 md:size-5" />
             روش ارسال
        </h2> 
        <p className="text-sm text-muted-foreground mt-1 text-[12px] md:text-[15px]">
        روش ارسال سفارش خود را انتخاب کنید. 
        </p> 
    </div>

        <RadioGroup
        value={value?.toString()}
        onValueChange={(id) => onChange?.(Number(id))}
        className="space-y-px"
        >
            {methods.map((method) => (
                <label
                key={method.id}
                htmlFor={`shipping-method-${method.id}`}
                className="flex cursor-pointer items-center justify-between gap-4 
                rounded-md md:rounded-lg border transition-colors hover:bg-muted/50 p-2.5 md:p-4"
                >
                    <div className="flex items-start md:items-center gap-3">
                        <RadioGroupItem
                            value={method.id.toString()}
                            id={`shipping-method-${method.id}`}
                        />

                        <div>
                            <p className="font-medium text-[13px] md:text-[16px]">
                                {method.name}
                            </p>

                            <p className="md:mt-1 text-[13px] md:text-[14px] text-muted-foreground">
                                زمان تقریبی تحویل:{" "}
                                {formatNumberWithoutSeparator(method.estimated_days)} روز
                            </p>
                        </div>
                    </div>

                    <div className="shrink-0 text-[13px] md:text-[15px] lg:text-[16px]">
                        <span className="font-medium md:font-semibold">
                            {method.price === 0
                                ? "رایگان"
                                : `${method.price.toLocaleString("fa-IR")}`}
                        </span>
                        <span className="text-[10px] md:text-[12px] ms-0.75">تومان</span>
                    </div>
                </label>
            ))}
        </RadioGroup>
    </div>
);


}
