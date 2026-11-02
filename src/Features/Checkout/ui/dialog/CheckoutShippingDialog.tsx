import { Checkout } from "@/entities/Checkout/models/Checkout.types";
import {
  formatNumber,
  formatNumberWithoutSeparator,
} from "@/shared/utils/formatNumber";

interface CheckoutShippingSectionProps {
  shippingMethod: Checkout["shipping_method"];
  shippingCost: Checkout["shipping_cost"];
}

export default function CheckoutShippingDialog({
  shippingMethod,
  shippingCost,
}: CheckoutShippingSectionProps) {
  return (
    <section className="space-y-3">
      <h3 className="font-semibold">روش ارسال</h3>

      <div className="flex items-center justify-between rounded-lg border p-2.5 md:p-4">
        <div>
          <p className="font-medium">
            {shippingMethod.name}
          </p>

          <p className="mt-1 text-[13px] md:text-[14px] text-muted-foreground">
            زمان تحویل: حدود{" "}
            {formatNumberWithoutSeparator(
              shippingMethod.estimated_days
            )}{" "}
            روز
          </p>
        </div>

        <div className="font-medium text-[14px] md:text-[15px] lg:text-[16px]">
          {shippingCost === 0
            ? "رایگان"
            : `${formatNumber(shippingCost)}`}
            <span className="inline-block ms-1 text-[10px] md:text-[11px] lg:text-[12px]">
              تومان
            </span>
        </div>
      </div>
    </section>
  );
}