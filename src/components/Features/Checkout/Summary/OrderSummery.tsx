import { Cart } from "@/entities/Cart/types/Cart";
import { formatNumberWithoutSeparator } from "@/shared/utils/formatNumber";

interface Props{
    cart: Cart;
    shippingPrice?: number; 
    inDrawer?: boolean;
}

export default function OrderSummary({cart , shippingPrice , inDrawer}: Props) {
    const {discount , total: final_Price , items_count , subtotal} = cart;
    
    return (
        <div >
            {!inDrawer &&
            <div className="pb-5 border-b hidden lg:block">
                <div className="flex items-center justify-between">
                    <span className="text-[13px] lg:text-[14px]">جمع کل کالا ها ({formatNumberWithoutSeparator(items_count)})</span>
                    <div className="w-max ms-auto">
                        <span className="text-[14px] md:text-[16px]">{subtotal.toLocaleString("fa-IR")}</span>
                        <span className="text-[11px] md:text-[12px] ms-1">تومان</span>
                    </div>
                </div>

                {!!shippingPrice && 
                <div className="flex items-center justify-between mt-2">
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
            }

            <div className="pt-2 lg:pt-5 flex justify-between items-center">                    
                <span className="text-[13px] lg:text-[14px]">مبلغ قابل پرداخت</span>
                <div className="w-max ms-auto">
                    <span className="text-[14px] md:text-[16px] font-semibold">{final_Price.toLocaleString("fa-IR")}</span>
                    <span className="text-[13px] md:text-[14px] ms-1">تومان</span>
                </div>
            </div>
        </div>
    );
}