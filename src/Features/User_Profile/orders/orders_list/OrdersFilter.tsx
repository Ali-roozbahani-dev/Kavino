

export default function OrdersFilter(){

    return (
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
    )
}