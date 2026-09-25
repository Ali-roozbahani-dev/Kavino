import { Package } from "lucide-react";


export  function EmptyOrders(){

    return (
      <div className="flex flex-col items-center justify-center bg-white px-5 py-16 text-center">
        <div className="flex size-16 items-center justify-center rounded-full bg-gray-100 text-gray-400">
          <Package size={28} />
        </div>

        <h2 className="mt-4 font-bold text-gray-900">
          هنوز سفارشی ثبت نکرده‌اید
        </h2>

        <p className="mt-2 text-sm text-gray-500">
          سفارش‌های شما بعد از ثبت در این بخش نمایش داده می‌شوند.
        </p>
      </div>
    )
}