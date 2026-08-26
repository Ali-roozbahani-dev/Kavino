import Image from "next/image";
import QuantitySelector from "./QuantitySelector";
import { CartItem as TCartItem } from "@/entities/Cart/types/Cart";
import CartColor from "./CartColor";


export default function DrawerItem({item}: {item: TCartItem}){
    const {id ,product_name , quantity ,  variant_stock , attributes} = item;

    return(
        <div className="flex flex-wrap justify-between not-last:border-b not-last:pb-4 not-first:pt-4">
        
            <div className="flex">
                <div className="w-25">
                    <Image 
                    src={"/search-result.webp"}
                    alt="تصویر محصول"
                    width={1000}
                    height={1000}
                    className="w-full"
                    />
                </div>
                <div className="ps-2">
                    <h3 
                    className="font-semibold text-[13px] md:text-[14px] w-full pt-2 pb-4">
                        {product_name}
                    </h3>

                    <div className="flex justify-between items-center">
                        <CartColor attributes={attributes}/>
                        <div>
                            <QuantitySelector 
                            itemId={id}
                            quantity={quantity}
                            stock={variant_stock}
                            className="w-25 h-7.5"
                            />
                        </div>
                    </div>

                    <div className="w-full mt-4">                
                        <div className="w-max ms-auto">
                            <span className="font-semibold text-[15px] md:text-[16px] me-1">{"14500000"}</span>
                            <span className="text-[12px] md:text-[13px]">تومان</span>
                        </div>
                    </div>

                </div>
            </div>  

        </div>
    )
}