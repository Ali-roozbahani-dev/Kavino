"use client";

import { useState } from "react";
import { ChevronLeft } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useOrderDetail } from "@/components/Features/User_Profile";
import Spinner from "../../Loading/Spinner";

interface OrderDetailDialogProps {
  orderId: number;
}

export function OrderDetailDialog({
  orderId,
}: OrderDetailDialogProps) {
  const [open, setOpen] = useState(false);

  const {
    data: order,
    isPending,
    isError,
  } = useOrderDetail(orderId, open);

 
  

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <button
          type="button"
          className="flex items-center gap-1 text-sm font-medium text-blue-600 transition hover:text-blue-700"
        >
          مشاهده جزئیات
          <ChevronLeft size={16} />
        </button>
      </DialogTrigger>

      <DialogContent
        dir="rtl"
        className="h-[90vh] overflow-y-auto sm:max-w-2xl"
      >
        <DialogHeader>
          <DialogTitle>جزئیات سفارش</DialogTitle>
        </DialogHeader>

        {isPending && (
          <div className="flex-center h-full">
            <Spinner />
          </div>
        )}

        {isError && (
          <div className="py-10 text-center text-sm text-red-500">
            دریافت جزئیات سفارش با خطا مواجه شد.
          </div>
        )}

        {order && (
          <div className="space-y-6">
            {/* اطلاعات سفارش */}
            <div className="grid grid-cols-2 gap-4 rounded-lg bg-gray-50 p-4 sm:grid-cols-3">
              <div>
                <span className="text-xs text-gray-400">
                  شماره سفارش
                </span>

                <p className="mt-1 text-sm font-bold text-gray-800">
                  {order.order_number}
                </p>
              </div>

              <div>
                <span className="text-xs text-gray-400">
                  وضعیت
                </span>

                <p className="mt-1 text-sm font-medium text-gray-700">
                  {order.status_display}
                </p>
              </div>

              <div>
                <span className="text-xs text-gray-400">
                  تاریخ ثبت
                </span>

                <p className="mt-1 text-sm text-gray-700">
                  {order.created_at}
                </p>
              </div>
            </div>

            {/* محصولات */}
            <div>
              <h3 className="mb-3 text-sm font-bold text-gray-800">
                محصولات سفارش
              </h3>

              <div className="space-y-3">
                {order.items.map((item) => (
                  <div
                    key={item.id}
                    className="rounded-lg border border-gray-100 p-4"
                  >
                    <div className="flex items-center justify-between gap-4">
                      <div>
                        <p className="text-sm font-medium text-gray-800">
                          {item.product_snapshot}
                        </p>

                        <p className="mt-1 text-xs text-gray-500">
                          تعداد: {item.quantity}
                        </p>
                      </div>

                      <div className="text-left">
                        <p className="text-sm font-bold text-gray-800">
                          {item.final_price} تومان
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* مبالغ */}
            <div className="space-y-3 border-t border-gray-100 pt-4">
              <div className="flex justify-between text-sm">
                <span className="text-gray-500">
                  مبلغ سفارش
                </span>

                <span className="font-medium">
                  {order.subtotal} تومان
                </span>
              </div>

              <div className="flex justify-between text-sm">
                <span className="text-gray-500">
                  تخفیف
                </span>

                <span className="font-medium text-green-600">
                  {order.discount_amount} تومان
                </span>
              </div>

              <div className="flex justify-between text-sm">
                <span className="text-gray-500">
                  هزینه ارسال
                </span>

                <span className="font-medium">
                  {order.shipping_cost} تومان
                </span>
              </div>

              <div className="flex justify-between border-t border-gray-100 pt-3">
                <span className="font-bold text-gray-800">
                  مبلغ نهایی
                </span>

                <span className="font-bold text-gray-900">
                  {order.total_amount} تومان
                </span>
              </div>
            </div>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}