"use client"
import { ProductVariant } from "@/entities/Product";

export default function Price({selectedVariant}: {selectedVariant: ProductVariant}){
    const {price , discount_amount , final_price} = selectedVariant;

    
    return (
        <div className="font-bold">
            {discount_amount ?
            <>
            <div className="line-through  text-primary-text2 text-[11px] lg:text-[13px] 2xl:text-[16px]">
                {price.toLocaleString("Fa")}
            </div>

            <div className="text-[18px] lg:text-[20px] 2xl:text-[22px] text-theme-4">
                {final_price.toLocaleString("Fa")}
                <span className="text-[10px] lg:text-[12px] 2xl:text-[14px] ms-1">تومان</span>
            </div>            
            </>
            :
            <div className="flex items-center gap-1 text-[18px] lg:text-[20px] 2xl:text-[22px] text-theme-4">                
                <span>{price.toLocaleString("Fa")}</span>
                <span className="w-max ms-auto md:ms-1 inline-block  text-[10px] lg:text-[12px] 2xl:text-[14px]">تومان</span>
            </div>
            }
        </div>
    )
}