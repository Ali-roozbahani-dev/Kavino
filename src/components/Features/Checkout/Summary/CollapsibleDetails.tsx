"use client"
import { Cart } from "@/entities/Cart/types/Cart"
import { formatNumberWithoutSeparator } from "@/utils/formatNumber";
import { ChevronsUpDown } from "lucide-react"
import { useState } from "react"

interface Props{
    cart: Cart;
    shippingPrice?: number;
}

export function CollapsibleDetails({cart , shippingPrice}: Props) {
  const {discount , total: final_Price , items_count , subtotal} = cart;  
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
    <button 
    onClick={()=> setIsOpen(!isOpen)}
    className="absolute z-49 border bg-[#f3f1f1] -top-3 left-0 lg:hidden p-px"
    >
        <ChevronsUpDown strokeWidth={1.5}/>
    </button>
    <div className={`${isOpen ? "block" : "hidden"} lg:hidden`}>
      <h1 className="flex h-10 mb-4 items-center text-[15px] md:text-[18px] font-bold">خلاصه سفارش</h1>    
      <div className="pb-5 border-b block">
          <div className="flex items-center justify-between">
            <span className="text-[13px] lg:text-[14px]">جمع کل کالا ها ({formatNumberWithoutSeparator(items_count)})</span>
            <div className="w-max ms-auto">
                <span className="text-[14px] md:text-[16px]">{final_Price.toLocaleString("fa-IR")}</span>
                <span className="text-[11px] md:text-[12px] ms-1">تومان</span>
            </div>
          </div>

          
          {!!shippingPrice &&
          <div className="flex items-center justify-between">
            <span className="text-[13px] lg:text-[14px]">هزینه ارسال</span>
            <div className="w-max ms-auto">
                <span className="text-[14px] md:text-[16px]">{shippingPrice.toLocaleString("fa-IR")}</span>
                <span className="text-[11px] md:text-[12px] ms-1">تومان</span>
            </div>
          </div>
          }

          <div className="flex items-center text-red-600 justify-between mt-4">
              <span className="text-[13px] lg:text-[14px]">تخفیف</span>
              <div className="w-max ms-auto">
                  <span className="text-[14px] md:text-[16px]">{discount.toLocaleString("fa-IR")}</span>
                  <span className="text-[11px] md:text-[12px] ms-1">تومان</span>
              </div>
          </div>
      </div>
    </div>
    </>
  )
}
