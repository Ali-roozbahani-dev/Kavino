import { Separator } from "@/components/ui/separator";
import { Checkout } from "@/entities/Checkout/models/Checkout.types";
import { formatNumber } from "@/shared/utils/formatNumber";

interface CheckoutSummarySectionProps {
  cart: Checkout["cart"];
  coupon: Checkout["coupon"];
  shippingCost: Checkout["shipping_cost"];
}

export default function CheckoutSummaryDialog({
  cart,
  coupon,
  shippingCost,
}: CheckoutSummarySectionProps) {
  return (
    <section className="space-y-3">
      <h3 className="font-semibold">خلاصه سفارش</h3>

      <div className="space-y-3 text-sm">
        <div className="flex justify-between">
          <span className="text-muted-foreground">
            مبلغ کالاها
          </span>

          <div>
            <span>
              {formatNumber(cart.subtotal)} 
            </span>
            <span className="inline-block ms-1 text-[12px] md:text-[13px] lg:text-[14px]">
              تومان
            </span>
          </div>

        </div>

        {Number(cart.product_discount) > 0 && (
          <div className="flex justify-between text-green-600">
            <span>تخفیف محصولات</span>

            <span>
              - {formatNumber(cart.product_discount)}
            </span>
            <span className="inline-block ms-1 text-[12px] md:text-[13px] lg:text-[14px]">
            تومان
            </span>
          </div>
        )}

        {Number(cart.coupon_discount) > 0 && (
          <div className="flex justify-between text-green-600">
            <span>
              تخفیف کد {coupon?.code && `(${coupon.code})`}
            </span>

            <span>
              - {formatNumber(cart.coupon_discount)} 
            </span>
            <span className="inline-block ms-1 text-[12px] md:text-[13px] lg:text-[14px]">
            تومان
            </span>
          </div>
        )}

        <div className="flex justify-between">
          <span className="text-muted-foreground">
            هزینه ارسال
          </span>

          <span>
            {shippingCost === 0
              ? "رایگان"
              : `${formatNumber(shippingCost)}`}
              <span className="inline-block ms-1 text-[12px] md:text-[13px] lg:text-[14px]">
              تومان
              </span>
          </span>
        </div>

        <Separator />

        <div className="flex items-center justify-between text-base font-bold">
          <span className="text-[15px] md:text-[16px] lg:text-[18px]">مبلغ قابل پرداخت</span>

          <span className="text-primary">
            {formatNumber(
              Number(cart.total) + Number(shippingCost)
            )}{" "}
            <span className="inline-block text-[12px] md:text-[13px] lg:text-[14px]">
            تومان
            </span>
          </span>
        </div>
      </div>
    </section>
  );
}