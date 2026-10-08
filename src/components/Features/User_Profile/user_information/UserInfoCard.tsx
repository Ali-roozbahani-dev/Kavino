"use client"

import Link from "next/link";
import { useAuth } from "../../Auth";



export function UserInformation(){
    const {data: user , isPending , error} = useAuth();
    
    if(isPending) return null;
    if(error) throw new Error("خطا در دریافت اطلاعات");
    if(!user?.phone_number) return null;

    const {email , first_name , last_name , phone_number} = user;


    return(
        <div className="rounded-2xl border bg-white shadow-sm">
            <div className="border-b p-5">
            <h2 className="font-bold">اطلاعات کاربری</h2>
            <p className="mt-1 text-xs text-muted-foreground">
                اطلاعات حساب کاربری شما
            </p>
            </div>

            <div className="divide-y">
                
            <div className="flex items-center justify-between gap-4 p-5">
                <span className="text-sm text-muted-foreground">
                نام 
                </span>

                <span className="text-sm font-medium">
                {first_name.length ? first_name : "---"}
                </span>
            </div>

            <div className="flex items-center justify-between gap-4 p-5">
                <span className="text-sm text-muted-foreground">
                نام خانوادگی
                </span>

                <span className="text-sm font-medium">
                {last_name.length ? last_name : "---"}
                </span>
            </div>


            <div className="flex items-center justify-between gap-4 p-5">
                <span className="text-sm text-muted-foreground">
                شماره موبایل
                </span>

                <span dir="ltr" className="text-sm font-medium">
                {phone_number}
                </span>
            </div>

            <div className="flex items-center justify-between gap-4 p-5">
                <span className="text-sm text-muted-foreground">
                ایمیل
                </span>

                <span dir="ltr" className="text-sm font-medium">
                {email.length ? email : "---"}
                </span>
            </div>

            </div>

            <div className="p-4">
            <Link
                href="/profile"
                className="flex h-10 w-max px-4 mx-auto items-center justify-center rounded-md bg-blue-600 
                text-sm font-medium text-white transition hover:bg-blue-700"
            >
                ویرایش / تکمیل اطلاعات
            </Link>
            </div>
        </div>
    )
}