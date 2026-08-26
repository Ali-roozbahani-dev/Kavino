"use client"
import { useGetCart } from "@/entities/Cart/hooks/useGetCart";
import { CartList } from "./CartList";
import CartSummary from "./CartSummary";



export default function CartDrawer(){
    const {data: cart , isPending , error} = useGetCart();

    if(isPending) return null;

    if(error) throw new Error("خطایی رخ داد");

    return (
        cart.items.length > 0 &&

        <div className="border rounded-md p-3 shadow-[0px_0px_10px_2px_#bfbfbf] hidden lg:block">
            <CartList cartItems={cart.items} isDrawer={true}/> 
            <CartSummary />           
        </div>        

    )
}