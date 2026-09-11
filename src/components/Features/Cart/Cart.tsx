"use client";
import { useCart } from "@/entities/Cart/hooks/useCart";
import { CartList } from "./CartList";
import CartListHeader from "./CartListHeader";
import CheckoutSummary from "../Checkout/Summary/CheckoutSummary";
import EmptyCart from "./EmptyCart";
import { useClearCart } from "@/entities/Cart/hooks/useClearCart";
import SectionSpinner from "@/components/ui/Loading/SectionLoading";

export default function Cart() {
  const { clearCart, isClearing } = useClearCart();
  const {data: cart , isPending , error} = useCart();

  if(isPending) return <SectionSpinner containerClass="h-120"/>;

  if(error) throw new Error("خطایی رخ داد");

  return (
    <>
      {cart.items.length !== 0 ? (
        <div className="flex justify-between">
          <div className="w-full lg:w-6/10 xl:w-7/10">
            <CartListHeader
              cart={cart}
              isClearing={isClearing}
              clearCart={() => clearCart()}
            />
            <CartList cartItems={cart.items}/>
          </div>
          <div
            className="w-full fixed bottom-0 right-0 z-49 lg:z-auto lg:static 
            lg:w-4/10 xl:w-3/10 lg:ps-6 bg-white"
          >
            <CheckoutSummary />
          </div>
        </div>
      ) : (
        <EmptyCart />
      )}
    </>
  );
}
