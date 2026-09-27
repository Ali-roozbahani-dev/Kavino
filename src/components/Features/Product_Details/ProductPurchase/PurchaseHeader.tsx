"use client"

import DiscountBadge from "./DiscountBadge";
import { ProductVariant } from "@/entities/Product";
import { ShareProduct } from "../ShareProduct";

interface Props{    
    selectedVariant: ProductVariant;
}

export default function PurchaseHeader({selectedVariant}: Props){
    const {discount_amount} = selectedVariant;

    return (
        <div className="flex justify-between items-center">
            <div className="hidden lg:block">
                {discount_amount > 0 &&
                <DiscountBadge />
                }
            </div>

            <div className="ms-auto flex-center  text-primary-text2">
                {/* <FavoriteToggle /> */}
                <ShareProduct />
            </div>
        </div>
    )
}