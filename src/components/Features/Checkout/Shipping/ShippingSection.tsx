"use client"
import { useGetShippingMethods } from "@/components/Features/Checkout/Shipping/hooks/useGetShippingMethods";
import SectionSpinner from "@/components/ui/Loading/SectionLoading";
import { useCheckoutStore } from "@/components/Features/Checkout/store/checkoutStore";
import MethodSelector from "./MethodSelector";



export default function ShippingSection(){
    const {
        data: Methods,
        isPending: Pending,
        error,
    } = useGetShippingMethods();

    const shippingMethodId = useCheckoutStore(
        (state) => state.shipping_method_id
    );

    const setShippingMethod = useCheckoutStore(
        (state) => state.setShippingMethod
    );

    if (Pending) {
    return <SectionSpinner containerClass="h-40"/>;
    }

    if (error) {
        throw new Error("خطا در دریافت اطلاعات");
    }
    

    return (        
        <div> 
            <MethodSelector 
            value={shippingMethodId ?? undefined}
            onChange={setShippingMethod}
            methods={Methods}
            />                               
        </div>                
    )
}