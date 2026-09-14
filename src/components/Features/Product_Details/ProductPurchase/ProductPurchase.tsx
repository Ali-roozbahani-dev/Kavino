"use client"
import { ShieldCheck } from "lucide-react";
import Price from "./Price";
import PurchaseHeader from "./PurchaseHeader";
import AddToCartBtn from "./AddToCartBtn";
import StoreFeatures from "./StoreFeatures";
import { ProductVariant } from "@/entities/Product/types";
import { useProductStore } from "@/components/Features/Product_Details/stores/product_store";
import SectionSpinner from "@/components/ui/Loading/SectionLoading";


interface Props{  
    PurchaseInTabs?: boolean;
    variants: ProductVariant[];
}


export default function ProductPurchase({PurchaseInTabs , variants}: Props){
    const selectedVariantId = useProductStore((state)=> state.selectedVariantId);
    const selectedVariant = variants.find((variant)=> variant.id === selectedVariantId);

    return (
        <div className="flex justify-between h-[60px] xl:h-auto items-center xl:block w-full px-3.5 py-2
        xl:border md:rounded-xl xl:p-5">
            {selectedVariant!! ?

            <>
            <div className="hidden xl:block">
                <PurchaseHeader                 
                selectedVariant={selectedVariant}
                />
            </div>
            <div className="order-2 xl:order-1">
                <Price selectedVariant={selectedVariant}/>
            </div>
            <div className="hidden xl:flex items-center my-4">
                <ShieldCheck strokeWidth={1.6} className="me-2"/>
                <p className="text-[13px] lg:text-[14px] 2xl:text-[15px]">گارانتی اصالت و سلامت فیزیکی کالا</p>
            </div>
            <div className="order-1 xl:order-1">
             <AddToCartBtn                
             selectedVariant={selectedVariant}
             />
            </div>
            </>
            :
            <SectionSpinner dotsClass="size-10" containerClass="h-full xl:h-[174px]"/>           

            }

            {!PurchaseInTabs && 
            <div className="hidden xl:block mt-3">
                <StoreFeatures />
            </div>
            }

        </div>        
    )
}