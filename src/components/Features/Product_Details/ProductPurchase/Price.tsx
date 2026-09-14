"use client"
import { ProductVariant } from "@/entities/Product/types";
import { useProductStore } from "@/components/Features/Product_Details/stores/product_store";


export default function Price({selectedVariant}: {selectedVariant: ProductVariant}){
    const {price , discount_amount , final_price} = selectedVariant;

    
    return (
        <div className="font-bold">
            {discount_amount ?
            <>
            <div className="line-through text-primary-text2 text-[14px] lg:text-[16px] 2xl:text-[20px]">
                {price.toLocaleString("Fa")}
            </div>

            <div className="text-[18px] lg:text-[20px] 2xl:text-[24px] text-theme-4">
                {final_price}
                <span className="text-[13px] 2xl:text-[15px] ms-1">تومان</span>
            </div>            
            </>
            :
            <div className="text-[18px] lg:text-[20px] 2xl:text-[24px] text-theme-4">
                <span>{price.toLocaleString("fa")}</span>
            </div>
            }
        </div>
    )
}