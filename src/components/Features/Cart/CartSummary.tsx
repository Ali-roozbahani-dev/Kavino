import { CollapsibleDetails } from "./CollapsibleDetails";
import OrderRegistrationBtn from "./OrderRegistrationBtn";


interface Props{
    inDrawer?: boolean;
}

export default function CartSummary({inDrawer}: Props){

    return(
        <div className="sticky border-t lg:border-0 top-[150px] px-4">  
        <div className="relative">
            <CollapsibleDetails />   
            {inDrawer && 
            <h1 className="hidden lg:flex h-10 mb-4 items-center text-[15px] md:text-[18px] font-bold">خلاصه سفارش</h1>
            }         
            <div className="lg:rounded-lg py-2 lg:p-4 lg:border">
                <div className="pb-5 border-b hidden lg:block">
                    <div className="flex items-center justify-between">
                    <span className="text-[13px] lg:text-[14px]">جمع کل کالا ها ({"3"})</span>
                    <div className="w-max ms-auto">
                        <span className="text-[14px] md:text-[16px]">{"120000"}</span>
                        <span className="text-[11px] md:text-[12px] ms-1">تومان</span>
                    </div>
                    </div>

                    <div className="flex items-center text-red-600 justify-between mt-4">
                        <span className="text-[13px] lg:text-[14px]">تخفیف</span>
                        <div className="w-max ms-auto">
                            <span className="text-[14px] md:text-[16px]">{"120000"}</span>
                            <span className="text-[11px] md:text-[12px] ms-1">تومان</span>
                        </div>
                    </div>
                </div>

                <div className="pt-2 lg:pt-5 flex justify-between items-center">                    
                    <span className="text-[13px] lg:text-[14px]">مبلغ قابل پرداخت</span>
                    <div className="w-max ms-auto">
                        <span className="text-[14px] md:text-[16px] font-semibold">{"120000"}</span>
                        <span className="text-[13px] md:text-[14px] ms-1">تومان</span>
                    </div>
                </div>

                <div className="mt-5">
                    <OrderRegistrationBtn />
                </div>
            </div>
        </div>          
        </div>
    )
}