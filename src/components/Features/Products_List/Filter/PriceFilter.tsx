import { Slider } from "@/components/ui/slider"
import { useFormContext } from "react-hook-form";
import { FormInput, FormOutput } from "../../../../entities/Product/types/TproductSection";
import { formatNumber} from "@/utils/formatNumber";

interface Tprops{
    initialMaxPrice: number;
}

export function PriceFilter({initialMaxPrice}: Tprops) {
    const { watch, setValue } = useFormContext<FormInput, any, FormOutput>();

    const minPrice = watch("min_price") ?? 0;
    const maxPrice = watch("max_price") ?? 0;

    
    return (
        <div className="py-4">
            <div className="px-1">
                <Slider
                    onValueChange={([min, max]) => {
                        setValue("min_price", min);
                        setValue("max_price", max);
                    }}
                    value={[Number(minPrice), Number(maxPrice)]}
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
                            value={formatNumber(Number(minPrice))}
                            onChange={(e) => setValue("min_price", Number(e.target.value) || 0)}
                            className="border md:text-[15px] focus:outline-theme px-2 py-2 me-2 flex-1 rounded-xs"
                        />
                        <span>تومان</span>
                    </div>
                </div>

                <div className="rounded-md border p-2">
                    <p>تا</p>
                    <div className="flex items-center">
                        <input
                            value={formatNumber(Number(maxPrice))}
                            onChange={(e) => setValue("max_price", Number(e.target.value) || 0)}
                            className="border md:text-[15px] focus:outline-theme px-2 py-2 me-2 flex-1 rounded-xs"
                        />
                        <span>تومان</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
