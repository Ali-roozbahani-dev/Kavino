import Link from "next/link";


export default function UserInformation(){

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
                نام و نام خانوادگی
                </span>

                <span className="text-sm font-medium">
                علی روزبهانی
                </span>
            </div>

            <div className="flex items-center justify-between gap-4 p-5">
                <span className="text-sm text-muted-foreground">
                شماره موبایل
                </span>

                <span dir="ltr" className="text-sm font-medium">
                ۰۹۱۲۱۲۳۴۵۶۷
                </span>
            </div>

            <div className="flex items-center justify-between gap-4 p-5">
                <span className="text-sm text-muted-foreground">
                ایمیل
                </span>

                <span dir="ltr" className="text-sm font-medium">
                ali@example.com
                </span>
            </div>

            <div className="flex items-center justify-between gap-4 p-5">
                <span className="text-sm text-muted-foreground">
                تاریخ عضویت
                </span>

                <span className="text-sm font-medium">
                ۱۵ مرداد ۱۴۰۴
                </span>
            </div>
            </div>

            <div className="p-4">
            <Link
                href="/profile"
                className="flex h-10 w-full items-center justify-center rounded-md bg-blue-600 
                text-sm font-medium text-white transition hover:bg-blue-700"
            >
                ویرایش اطلاعات
            </Link>
            </div>
        </div>
    )
}