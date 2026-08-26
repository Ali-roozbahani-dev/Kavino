"use client"
import { useGetCart } from "@/entities/Cart/hooks/useGetCart";
import { CartItem as TCartItem } from "@/entities/Cart/types/Cart";
import CartItem from "./CartItem";
import DrawerItem from "./DrawerItem";

interface Props{
  cartItems: TCartItem[];
  isDrawer?: boolean;  
}

export function CartList({cartItems , isDrawer}: Props) {
  const {data: cart , isPending , error} = useGetCart();

  if(isPending) return <div>loading</div>;

  if(error) throw new Error("خطایی رخ داد");

  return (
    <div className="overflow-hidden ">
      {isDrawer ?
        cartItems.map((item)=>(
          <DrawerItem 
          key={item.id} 
          item={item}
          />
        ))          
        :
        cartItems.map((item)=>(
          <CartItem 
          key={item.id} 
          item={item}
          />
        ))  
      }
    </div>
  )
}
