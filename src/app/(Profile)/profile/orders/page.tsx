import {
  ChevronLeft,
  Clock3,
  Package,
  ShoppingBag,
} from "lucide-react";

const orders = [
  {
    id: "KAV-10245",
    date: "۱۴۰۴/۰۶/۲۵",
    status: "تحویل شده",
    statusType: "delivered",
    payment: "پرداخت شده",
    total: "۲۵,۸۰۰,۰۰۰",
    items: [
      {
        title: "یخچال فریزر دوقلو",
        quantity: 1,
        image: "/images/products/refrigerator.jpg",
      },
      {
        title: "ماشین لباسشویی ۹ کیلویی",
        quantity: 1,
        image: "/images/products/washing-machine.jpg",
      },
    ],
  },
  {
    id: "KAV-10218",
    date: "۱۴۰۴/۰۶/۱۸",
    status: "در حال ارسال",
    statusType: "shipping",
    payment: "پرداخت شده",
    total: "۱۸,۵۰۰,۰۰۰",
    items: [
      {
        title: "تلویزیون هوشمند ۵۵ اینچ",
        quantity: 1,
        image: "/images/products/tv.jpg",
      },
    ],
  },
  {
    id: "KAV-10194",
    date: "۱۴۰۴/۰۶/۱۰",
    status: "در انتظار پرداخت",
    statusType: "pending",
    payment: "پرداخت نشده",
    total: "۷,۲۰۰,۰۰۰",
    items: [
      {
        title: "جاروبرقی بدون کیسه",
        quantity: 1,
        image: "/images/products/vacuum.jpg",
      },
    ],
  },
];

const statusStyles = {
  delivered: "bg-green-50 text-green-600",
  shipping: "bg-blue-50 text-blue-600",
  pending: "bg-orange-50 text-orange-600",
};

export default function OrdersPage() {
  return (
    <section className="space-y-5">
      {/* Header */}
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

      {/* Filters */}
      <div className="overflow-x-auto bg-white">
        <div className="flex min-w-max items-center gap-6 px-5">
          <button
            type="button"
            className="relative py-4 text-sm font-bold text-blue-600"
          >
            همه سفارش‌ها

            <span className="absolute inset-x-0 bottom-0 h-0.5 rounded-full bg-blue-600" />
          </button>

          <button
            type="button"
            className="py-4 text-sm text-gray-500 transition hover:text-gray-900"
          >
            در حال پردازش
          </button>

          <button
            type="button"
            className="py-4 text-sm text-gray-500 transition hover:text-gray-900"
          >
            در حال ارسال
          </button>

          <button
            type="button"
            className="py-4 text-sm text-gray-500 transition hover:text-gray-900"
          >
            تحویل شده
          </button>

          <button
            type="button"
            className="py-4 text-sm text-gray-500 transition hover:text-gray-900"
          >
            لغو شده
          </button>
        </div>
      </div>

      {/* Orders */}
      <div className="space-y-4">
        {orders.map((order) => (
          <article
            key={order.id}
            className="bg-white"
          >
            {/* Order Header */}
            <div className="flex flex-col gap-4 border-b border-gray-100 p-5 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
                <div>
                  <span className="text-xs text-gray-400">
                    شماره سفارش
                  </span>

                  <p className="mt-1 text-sm font-bold text-gray-800">
                    {order.id}
                  </p>
                </div>

                <div>
                  <span className="text-xs text-gray-400">
                    تاریخ ثبت
                  </span>

                  <p className="mt-1 text-sm text-gray-700">
                    {order.date}
                  </p>
                </div>

                <span
                  className={`rounded-full px-3 py-1.5 text-xs font-medium ${statusStyles[order.statusType as keyof typeof statusStyles]}`}
                >
                  {order.status}
                </span>
              </div>

              <button
                type="button"
                className="flex items-center gap-1 text-sm font-medium text-blue-600 transition hover:text-blue-700"
              >
                مشاهده جزئیات
                <ChevronLeft size={16} />
              </button>
            </div>

            {/* Products */}
            <div className="p-5">
              <div className="flex gap-3 overflow-x-auto pb-1">
                {order.items.map((item, index) => (
                  <div
                    key={index}
                    className="relative size-20 shrink-0 overflow-hidden rounded-lg border border-gray-100 bg-gray-50"
                  >
                    <img
                      src={item.image}
                      alt={item.title}
                      className="size-full object-contain"
                    />

                    {item.quantity > 1 && (
                      <span className="absolute bottom-1 right-1 rounded-md bg-black/70 px-1.5 py-0.5 text-[10px] text-white">
                        ×{item.quantity}
                      </span>
                    )}
                  </div>
                ))}
              </div>

              {/* Order Summary */}
              <div className="mt-5 grid gap-4 border-t border-gray-100 pt-5 sm:grid-cols-3">
                <div>
                  <span className="text-xs text-gray-400">
                    وضعیت پرداخت
                  </span>

                  <p
                    className={`mt-1 text-sm font-medium ${
                      order.payment === "پرداخت شده"
                        ? "text-green-600"
                        : "text-orange-500"
                    }`}
                  >
                    {order.payment}
                  </p>
                </div>

                <div>
                  <span className="text-xs text-gray-400">
                    تعداد کالا
                  </span>

                  <p className="mt-1 text-sm font-medium text-gray-700">
                    {order.items.length} کالا
                  </p>
                </div>

                <div>
                  <span className="text-xs text-gray-400">
                    مبلغ کل
                  </span>

                  <p className="mt-1 text-sm font-bold text-gray-900">
                    {order.total} تومان
                  </p>
                </div>
              </div>
            </div>

            {/* Shipping Progress */}
            {order.statusType === "shipping" && (
              <div className="border-t border-gray-100 bg-gray-50 px-5 py-4">
                <div className="flex items-center gap-3">
                  <Clock3
                    size={18}
                    className="shrink-0 text-blue-600"
                  />

                  <div>
                    <p className="text-sm font-medium text-gray-800">
                      سفارش شما در حال ارسال است
                    </p>

                    <p className="mt-1 text-xs text-gray-500">
                      سفارش به شرکت حمل‌ونقل تحویل داده شده است.
                    </p>
                  </div>
                </div>
              </div>
            )}
          </article>
        ))}
      </div>

      {/* Empty State */}
      {/*
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
      */}
    </section>
  );
}