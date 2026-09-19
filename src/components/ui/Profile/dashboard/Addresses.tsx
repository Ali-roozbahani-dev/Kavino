import Link from "next/link";
import {
  ArrowLeft,
  MapPin
} from "lucide-react";


export default function Addresses(){

    return (
        <div className="rounded-2xl border bg-white shadow-sm">
    <div className="flex items-center justify-between border-b p-5">
      <div>
        <h2 className="font-bold">آدرس‌های من</h2>
        <p className="mt-1 text-xs text-muted-foreground">
          آدرس‌های ذخیره شده
        </p>
      </div>

      <Link
        href="/profile/addresses"
        className="flex items-center gap-1 text-sm font-medium text-blue-600"
      >
        مدیریت
        <ArrowLeft className="h-4 w-4" />
      </Link>
    </div>

    <div className="space-y-3 p-4">
      <div className="rounded-xl border bg-slate-50/70 p-4">
        <div className="flex gap-3">
          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
            <MapPin className="h-4 w-4" />
          </div>

          <div className="min-w-0">
            <div className="flex flex-wrap items-center gap-2">
              <p className="text-sm font-semibold">
                خانه
              </p>

              <span className="rounded-full bg-green-50 px-2 py-0.5 text-[10px] font-medium text-green-600">
                پیش‌فرض
              </span>
            </div>

            <p className="mt-2 text-xs leading-6 text-muted-foreground">
              تهران، خیابان ولیعصر، کوچه شهید احمدی، پلاک ۲۵
            </p>

            <p className="mt-1 text-xs text-muted-foreground">
              گیرنده: علی روزبهانی
            </p>
          </div>
        </div>
      </div>

      <div className="rounded-xl border p-4">
        <div className="flex gap-3">
          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-slate-100 text-slate-500">
            <MapPin className="h-4 w-4" />
          </div>

          <div className="min-w-0">
            <p className="text-sm font-semibold">
              محل کار
            </p>

            <p className="mt-2 text-xs leading-6 text-muted-foreground">
              تهران، میدان ونک، خیابان ملاصدرا، پلاک ۱۲
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
    )
}