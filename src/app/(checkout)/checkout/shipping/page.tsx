"use client"
import CheckoutHeader from "@/Features/Checkout/ui/CheckoutHeader";
import Main from "@/ui/Main";
import ShippingSection from "@/Features/Checkout/Shipping/ShippingSection";
import { useCheckoutGuard } from "@/Features/Checkout/hooks/useCheckoutGuard";
import PageLoading from "@/ui/Loading/PageLoading";
import AddressSection from "@/Features/Checkout/select_address/AddressSection";
import CouponSection from "@/Features/Checkout/Coupon/CouponSection";
import CheckoutSummary from "@/Features/Checkout/Summary/CheckoutSummary";
import useSelectedShippingMethod from "@/Features/Checkout/Shipping/hooks/useSelectedShippingMethod";




export default function ShippingPage(){    
    const {selectedShippingMethod} = useSelectedShippingMethod()
    const { isCheckingPermission , hasError } = useCheckoutGuard();   
    

    if (isCheckingPermission) {
        return <PageLoading />;
    }

    if (hasError) {
        throw new Error("خطا در دریافت اطلاعات");
    }
    
    return(
        <>
        <Main>
            <CheckoutHeader/> 
            <div className="flex justify-between">
                <div className="w-full lg:w-6/10 xl:w-7/10 pb-32">
                    <AddressSection />
                    <ShippingSection />
                    <CouponSection />  
                </div>
                <div className="w-full fixed bottom-0 right-0 z-49 lg:z-auto lg:static 
                lg:w-4/10 xl:w-3/10 lg:ps-6 bg-white">
                    <CheckoutSummary 
                    shippingPrice={selectedShippingMethod?.price}
                    inCheckout={true}
                    />
                </div>
            </div>  
        </Main>
        </>
        
    )
}