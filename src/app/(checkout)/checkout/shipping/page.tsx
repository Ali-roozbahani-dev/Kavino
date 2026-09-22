"use client"
import CheckoutHeader from "@/components/Features/Checkout/ui/CheckoutHeader";
import Main from "@/components/ui/Main";
import ShippingSection from "@/components/Features/Checkout/Shipping/ShippingSection";
import { useCheckoutGuard } from "@/components/Features/Checkout/hooks/useCheckoutGuard";
import PageLoading from "@/components/ui/Loading/PageLoading";
import AddressSection from "@/components/Features/Checkout/select_address/AddressSection";
import CouponSection from "@/components/Features/Checkout/Coupon/CouponSection";
import CheckoutSummary from "@/components/Features/Checkout/Summary/CheckoutSummary";
import useSelectedShippingMethod from "@/components/Features/Checkout/Shipping/hooks/useSelectedShippingMethod";




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