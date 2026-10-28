import { OrderListItem } from "@/entities/Orders";
import { ShoppingBag } from "lucide-react";


export  function OrderListHeader({orders}:{orders: OrderListItem[]}){


    return (
        <div className="bg-white p-5">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
                <h1 className="text-lg font-bold text-gray-900">
                سفارش‌های من
                </h1>

                <p className="mt-1 text-sm text-gray-500">
                سفارش‌های ثبت‌شده خود را مشاهده و پیگیری کنید
                </p>
            </div>

            <div className="flex items-center gap-2 text-sm text-gray-500">
                <ShoppingBag size={18} />
                <span>{orders.length} سفارش</span>
            </div>
            </div>
        </div>
    )
}