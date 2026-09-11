import { CartItem as TCartItem } from "@/entities/Cart/types/Cart";
import CartItem from "./CartItem";
import DrawerItem from "./Drawer/DrawerItem";

interface Props{
  cartItems: TCartItem[];
  isDrawer?: boolean;  
}

export function CartList({cartItems , isDrawer}: Props) {  

  return (
    <div className={`${isDrawer ? "scrollbar-custom max-h-[350px] overflow-y-auto" : "mb-10"}`}>
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
