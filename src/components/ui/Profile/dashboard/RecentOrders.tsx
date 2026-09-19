import {
  ArrowLeft,
  Heart,
  MapPin,
  Clock3,
  CheckCircle2,
  Truck,
} from "lucide-react";
import Link from "next/link";

const recentOrders = [
  {
    id: "#12548",
    date: "۲۲ شهریور ۱۴۰۵",
    status: "تحویل شده",
    statusType: "success",
    price: "۱۲,۸۵۰,۰۰۰",
  },
  {
    id: "#12521",
    date: "۱۸ شهریور ۱۴۰۵",
    status: "در حال ارسال",
    statusType: "shipping",
    price: "۵,۴۹۰,۰۰۰",
  },
  {
    id: "#12487",
    date: "۱۲ شهریور ۱۴۰۵",
    status: "در انتظار پرداخت",
    statusType: "pending",
    price: "۲,۳۵۰,۰۰۰",
  },
];

export default function RecentOrders(){

    return (
        <section className="rounded-2xl border bg-white shadow-sm">
            <div className="flex items-center justify-between border-b p-5">
                <div>
                <h2 className="font-bold">آخرین سفارش‌ها</h2>
                <p className="mt-1 text-xs text-muted-foreground">
                    وضعیت آخرین سفارش‌های شما
                </p>
                </div>

                <Link
                href="/profile/orders"
                className="flex items-center gap-1 text-sm font-medium text-blue-600 hover:text-blue-700"
                >
                مشاهده همه
                <ArrowLeft className="h-4 w-4" />
                </Link>
            </div>

            <div className="divide-y">
                {recentOrders.map((order) => (
                <div
                    key={order.id}
                    className="flex flex-col gap-4 p-5 sm:flex-row sm:items-center sm:justify-between"
                >
                    <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-slate-50">
                        {order.statusType === "success" && (
                        <CheckCircle2 className="h-5 w-5 text-green-500" />
                        )}

                        {order.statusType === "shipping" && (
                        <Truck className="h-5 w-5 text-blue-500" />
                        )}

                        {order.statusType === "pending" && (
                        <Clock3 className="h-5 w-5 text-orange-500" />
                        )}
                    </div>

                    <div>
                        <p className="text-sm font-semibold">
                        سفارش {order.id}
                        </p>

                        <p className="mt-1 text-xs text-muted-foreground">
                        {order.date}
                        </p>
                    </div>
                    </div>

                    <div className="flex items-center justify-between gap-6 sm:justify-end">
                    <span
                        className={`rounded-full px-3 py-1 text-xs font-medium ${
                        order.statusType === "success"
                            ? "bg-green-50 text-green-600"
                            : order.statusType === "shipping"
                            ? "bg-blue-50 text-blue-600"
                            : "bg-orange-50 text-orange-600"
                        }`}
                    >
                        {order.status}
                    </span>

                    <span className="text-sm font-bold">
                        {order.price} تومان
                    </span>
                    </div>
                </div>
                ))}
            </div>
        </section>
    )
}