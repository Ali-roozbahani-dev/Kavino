import { OrderListItem } from "@/entities/Orders";
import { formatPersianDate } from "@/shared/utils/date";
import { OrderDetailDialog } from "./OrderDetailDialog";
import { formatNumber } from "@/shared/utils/formatNumber";


export function OrdersListItem({order}:{order: OrderListItem}){


    return (
        <article className="bg-white">
            {/* Order Header */}
            <div className="flex flex-col gap-4 border-b border-gray-100 p-5 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
                {/* Order Number */}
                <div>
                    <span className="text-xs text-gray-400">
                    شماره سفارش
                    </span>

                    <p className="mt-1 text-sm font-bold text-gray-800">
                    {order.order_number}
                    </p>
                </div>

                {/* Created At */}
                <div>
                    <span className="text-xs text-gray-400">
                    تاریخ ثبت
                    </span>

                    <p className="mt-1 text-sm text-gray-700">
                    {formatPersianDate(order.created_at)}
                    </p>
                </div>

                {/* Status */}
                <span className="rounded-full bg-gray-100 px-3 py-1.5 text-xs font-medium text-gray-700">
                    {order.status_display}
                </span>
                </div>

                {/* Details */}
                <OrderDetailDialog orderId={order.id}/>
            </div>

            {/* Order Summary */}
            <div className="p-5">
                <div className="grid gap-4 sm:grid-cols-3">
                {/* Status */}
                <div>
                    <span className="text-xs text-gray-400">
                    وضعیت سفارش
                    </span>

                    <p className="mt-1 text-sm font-medium text-gray-700">
                    {order.status_display}
                    </p>
                </div>

                {/* Items Count */}
                <div>
                    <span className="text-xs text-gray-400">
                    تعداد کالا
                    </span>

                    <p className="mt-1 text-sm font-medium text-gray-700">
                    {order.items_count} کالا
                    </p>
                </div>

                {/* Total */}
                <div>
                    <span className="text-xs text-gray-400">
                    مبلغ کل
                    </span>

                    <p className="mt-1 text-sm font-bold text-gray-900">
                    {formatNumber(Number(order.total_amount))} تومان
                    </p>
                </div>
                </div>
            </div>
        </article>
    )
}

