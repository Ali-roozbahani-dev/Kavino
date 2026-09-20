"use client"

import { useSetDefaultAddress } from "./hooks/useSetDefaultAddress";

export default function SetDefaultAddress({addressId} : {addressId: number}){
    const {mutate , isPending} = useSetDefaultAddress();

    return (
        <button
        disabled={isPending}
        onClick={()=> mutate(addressId)}
        type="button"
        className="text-sm font-medium text-blue-600 transition hover:text-blue-700"
        >
            انتخاب به‌عنوان آدرس پیش‌فرض
        </button>
    )
}