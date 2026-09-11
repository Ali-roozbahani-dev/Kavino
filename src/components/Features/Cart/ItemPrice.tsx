import { Badge } from "@/components/ui/badge";
import { getDiscountPercentage } from "@/utils/getDiscountPercentage";
interface Props {
    discount_amount: number;
    final_price: number;
}

export default function ItemPrice({
    final_price,
    discount_amount
}: Props) {
    const original_price = final_price + discount_amount;
    const discount_percentage = getDiscountPercentage( original_price , final_price);

    return (
        <div className="flex flex-col items-end gap-1">
            {discount_amount > 0 && (
                <div className="flex items-center gap-2">
                    <span className="text-xs md:text-sm text-muted-foreground line-through">
                        {original_price.toLocaleString("fa-IR")}
                    </span>

                    <Badge className="min-w-8 rounded-full bg-red-100 px-1.5 text-[12px] 
                    font-medium text-red-600 md:text-[14px] flex-center pt-1">
                        {discount_percentage.toLocaleString("fa-IR")}%
                    </Badge>
                </div>
            )}

            <div className="flex items-center">
                <span className="font-semibold text-[15px] md:text-[16px]">
                    {final_price.toLocaleString("fa-IR")}
                </span>

                <span className="ms-1 text-[12px] md:text-[13px]">
                    تومان
                </span>
            </div>
        </div>
    );
}