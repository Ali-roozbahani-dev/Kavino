"use client"

import DiscountBadge from "./DiscountBadge";
import { ProductVariant } from "@/entities/Product";
import { ShareProduct } from "../ShareProduct";
import { FavoriteToggle } from "../../Favorites";

interface Props{    
    selectedVariant: ProductVariant;
    productId: number;
}

export default function PurchaseHeader({selectedVariant , productId}: Props){
    const {discount_amount} = selectedVariant;
     
    
    return (
        <div className="flex justify-between items-center">
            <div className="hidden lg:block">
                {discount_amount > 0 &&
                <DiscountBadge />
                }
            </div>

            <div className="ms-auto flex-center  text-primary-text2">
                <FavoriteToggle productId={productId}/>
                <ShareProduct />
            </div>
        </div>
    )
}