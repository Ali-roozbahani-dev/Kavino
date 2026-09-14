"use client"
import { useCart } from "@/entities/Cart/hooks/useCart";
import CheckoutSummary from "../../../Checkout/Summary/CheckoutSummary";
import { CartList } from "../CartList";



export default function CartDrawer(){
    const {data: cart , isPending , error} = useCart();

    if(isPending) return null;

    if(error) throw new Error("خطایی رخ داد");

    return (
        cart.items.length > 0 &&

        <div>
            <CartList cartItems={cart.items} isDrawer={true}/> 
            <CheckoutSummary inDrawer={true}/>           
        </div>        

    )
}