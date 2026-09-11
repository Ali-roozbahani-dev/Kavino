import { Checkout } from "@/entities/Checkout/types/Checkout";
import {
  formatNumber,
  formatNumberWithoutSeparator,
} from "@/utils/formatNumber";

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

      <div className="flex items-center justify-between rounded-lg border p-4">
        <div>
          <p className="font-medium">
            {shippingMethod.name}
          </p>

          <p className="mt-1 text-sm text-muted-foreground">
            زمان تحویل: حدود{" "}
            {formatNumberWithoutSeparator(
              shippingMethod.estimated_days
            )}{" "}
            روز
          </p>
        </div>

        <span className="font-medium">
          {shippingCost === 0
            ? "رایگان"
            : `${formatNumber(shippingCost)} تومان`}
        </span>
      </div>
    </section>
  );
}