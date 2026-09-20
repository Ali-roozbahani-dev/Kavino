import { MapPin, Plus } from "lucide-react";

export default function EmptyAddress(){

    return (
        <div className="flex flex-col items-center justify-center bg-white px-5 py-16 text-center">
            <div className="flex size-16 items-center justify-center rounded-full bg-gray-100 text-gray-400">
            <MapPin size={28} />
            </div>

            <h2 className="mt-4 font-bold text-gray-900">
            هنوز آدرسی ثبت نکرده‌اید
            </h2>

            <p className="mt-2 text-sm text-gray-500">
            برای ثبت سفارش ابتدا یک آدرس اضافه کنید.
            </p>
      </div>
    )
}