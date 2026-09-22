"use client";
import { Button } from "@/components/ui/button";
import { Loader2, ShoppingCart } from "lucide-react";
import Link from "next/link";
import QuantitySelector from "../../../ui/Cart/QuantitySelector";
import { ProductVariant } from "@/entities/Product/types";
import { useCart } from "@/entities/Cart/hooks/useCart";
import { useAddToCart } from "@/components/Features/Cart/hooks/useAddToCart";
import NotifyWhenAvailableBtn from "./NotifyWhenAvailableBtn";

interface Props {
  selectedVariant: ProductVariant;
}

export default function AddToCartBtn({selectedVariant }: Props) {
  const { data: cart , isPending , error} = useCart();
  const {addToCart , isAddingToCart} = useAddToCart();

  if(isPending) return <div>loading</div>
  if(error) throw new Error(error.message)

  const addedVariant = cart.items.find(
    (item) => item.variant_id === selectedVariant.id
  );

  const addToCartHandler = () => {
    if (addedVariant || !selectedVariant.id) return;

    addToCart({quantity: 1 , variant : selectedVariant.id});
  };

  if(!selectedVariant.has_stock) return <NotifyWhenAvailableBtn />

  return (
    <>
      {addedVariant ? (
        <div
          className="w-full flex justify-between items-center border border-primary-text3 text-theme-2 
        rounded-sm px-2 h-11 lg:h-12.5 lg:py-2 lg:text-[16px]"
        >
        
          <QuantitySelector
            className="ms-3 xl:ms-0 order-last xl:order-first"
            itemId={addedVariant.id} 
            quantity={addedVariant.quantity} 
            stock={addedVariant.variant_stock}            
          />
          
          <Link
            href={"/cart"}
            className="border border-theme-2 font-semibold p-2 text-[12px] md:text-[13px]"
          >
            مشاهده سبد خرید
          </Link>
        </div>
      ) : (
        <Button
          disabled={isAddingToCart}
          onClick={addToCartHandler}
          variant={"Blue1"}
          className="w-full rounded-sm px-5 h-11  lg:h-12.5 lg:text-[16px]"
        >
          {isAddingToCart ? (
            <Loader2 className="size-5 lg:size-6 animate-spin" />
          ) : (
            <ShoppingCart className="hidden md:block size-5 lg:size-6" />
          )}

          افزودن به سبد خرید
        </Button>
      )}
    </>
  );
}
