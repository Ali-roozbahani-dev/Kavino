import Image from "next/image";
import QuantitySelector from "./QuantitySelector";
import { CartItem as TCartItem } from "@/entities/Cart/types/Cart";
import CartColor from "./CartColor";


export default function CartItem({item}: {item: TCartItem}){
    const {id ,product_name , image , quantity ,  variant_stock , attributes} = item;

    return(
        <div className="flex flex-wrap justify-between not-last:border-b not-last:pb-4 not-first:pt-4">
        
            <div className="flex">
                <div className="w-25 lg:w-35 xl:w-40">
                    <Image 
                    src={image.image}
                    alt={image.alt_text}
                    width={1000}
                    height={1000}
                    className="w-full"
                    />
                </div>
                <div className="ps-2 flex flex-col justify-between items-start">
                    <h3 
                    className="font-semibold text-[13px] md:text-[14px] w-full">
                        {product_name}
                    </h3>
                    <CartColor attributes={attributes}/>
                </div>
            </div>
            <div className="flex items-end w-full lg:w-auto lg:flex-col justify-between mt-4 lg:mt-0">
                <div className="lg:order-last">
                    <QuantitySelector 
                    itemId={id}
                    quantity={quantity}
                    stock={variant_stock}
                    />
                </div>
                <div>
                    <span className="font-semibold text-[15px] md:text-[16px] me-1">{"14500000"}</span>
                    <span className="text-[12px] md:text-[13px]">تومان</span>
                </div>
            </div>
        </div>
    )
}