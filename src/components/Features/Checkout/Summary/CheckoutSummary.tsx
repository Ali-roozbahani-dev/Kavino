"use client"
import { CollapsibleDetails } from "./CollapsibleDetails";
import { useCart } from "@/entities/Cart/hooks/useCart";
import OrderSummary from "./OrderSummery";
import CheckoutActionBtn from "@/components/Features/Checkout/Summary/CheckoutActionBtn";


interface Props{
    inDrawer?: boolean;
    inCheckout?: boolean;
    shippingPrice?: number;
}

export default function CheckoutSummary({inDrawer , inCheckout , shippingPrice}: Props){
    const {data: cart , isPending , error} = useCart()
    
    if(isPending) return <div>loading</div>;

    if(error) throw new Error("خطا در دریافت اطلاعات")

    return(
        <div className={`${inDrawer ? "mt-5" : `px-4 border-t lg:border-0 sticky ${inCheckout ? "top-[150px]" : "top-[200px]"}`}`}>  
            <div className="relative">
                <CollapsibleDetails 
                shippingPrice={shippingPrice}
                cart={cart}
                />   
                {!inDrawer && 
                <h1 className="hidden lg:flex h-10 mb-4 items-center text-[15px] md:text-[18px] font-bold">خلاصه سفارش</h1>
                }   
                <div className="lg:rounded-lg py-2 lg:p-4 lg:border">
                    <OrderSummary 
                    inDrawer={inDrawer}
                    shippingPrice={shippingPrice}
                    cart={cart}
                    />
                    <div className="mt-5">
                        <CheckoutActionBtn />
                    </div>
                </div>      
            </div>          
        </div>
    )
}