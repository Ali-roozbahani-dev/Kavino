"use client";
import CartDrawer from "@/components/Features/Cart/CartDrawer";
import { Badge } from "@/components/ui/badge";
import { useGetCart } from "@/entities/Cart/hooks/useGetCart";
import Link from "next/link";
import { FaCartShopping } from "react-icons/fa6";

export default function CartLink() {
  const {data: cart , isPending , error} = useGetCart();  
    
  if (error) throw new Error(error.message);
  
  const showBadge = !isPending && cart.items.length > 0;


  return (
    <div className="relative group">
      <Link
        href={"/cart"}
        className="relative block text-theme-4 lg:bg-theme-4 lg:text-white rounded-md  
          py-1.5 px-2  lg:px-2 hover:opacity-85"
      >
        {showBadge &&
        <Badge
          className="rounded-full bg-theme-2 lg:bg-white lg:text-theme-4 border border-theme-4
          h-4.5 w-4.5 lg:h-5 lg:w-5 pt-1 absolute -top-1 -right-1 lg:top-0lg:right-1"
        >
          {cart.items.length}
        </Badge>
        }
        <FaCartShopping className="inline-block size-6 lg:size-6.5" />       
  
      </Link>
      <div
        className="
          absolute top-full left-0 pt-2
          w-130 z-50
          invisible opacity-0
          translate-y-2
          transition-all duration-200
          group-hover:visible
          group-hover:opacity-100
          group-hover:translate-y-0
          bg-white
        "
      >
        <CartDrawer />
      </div>
    </div>
  );
}
