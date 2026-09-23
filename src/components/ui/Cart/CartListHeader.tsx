"use client"

import { Cart } from "@/entities/Cart/types/Cart";
import BulkDelete from "./BulkDelete";
import { formatNumberWithoutSeparator } from "@/shared/utils/formatNumber";


interface Props{
    cart: Cart;
    isClearing: boolean;
    clearCart: () => void;
}

export default function CartListHeader({cart , isClearing , clearCart}: Props){
    

    return (
        <div className="flex justify-between items-center py-2.5 mb-2">
            <div>
                <h1 className="font-semibold text-[18px] md:text-[22px] me-2 inline-block">سبد خرید</h1>
                <span className="text-primary-text text-[13px] md:text-[14px]">
                    ({formatNumberWithoutSeparator(cart.items.length)}) عدد کالا
                </span>
            </div> 
            <div>
                <BulkDelete 
                isClearing={isClearing}
                clearCart={clearCart}
                />
            </div>    
        </div>
    )
}