import { Checkout } from "@/entities/Checkout/types/Checkout";
import { formatNumber, formatNumberWithoutSeparator } from "@/utils/formatNumber";

interface CheckoutProductsSectionProps {
  cart: Checkout["cart"];
}

export default function CheckoutProductsDialog({
  cart,
}: CheckoutProductsSectionProps) {
  return (
    <section className="space-y-3">
      <div className="flex items-center justify-between">
        <h3 className="font-semibold">محصولات سفارش</h3>

        <span className="text-sm text-muted-foreground">
          {formatNumberWithoutSeparator(cart.items_count)} کالا
        </span>
      </div>

      <div className="space-y-3">
        {cart.items.map((item) => (
          <div
            key={item.id}
            className="flex items-center gap-3 rounded-lg border p-3"
          >
            <div className="h-16 w-16 shrink-0 overflow-hidden rounded-md bg-muted">
              <img
                src={item.image.image}
                alt={item.product_name}
                className="h-full w-full object-contain"
              />
            </div>

            <div className="min-w-0 flex-1">
              <p className="line-clamp-2 text-sm font-medium">
                {item.product_name}
              </p>

              <p className="mt-1 text-xs text-muted-foreground">
                تعداد: {formatNumberWithoutSeparator(item.quantity)}
              </p>
            </div>

            <div className="text-left">
              {Number(item.discount_amount) > 0 && (
                <p className="text-xs text-muted-foreground line-through">
                  {formatNumber(item.unit_price)}
                </p>
              )}

              <p className="text-sm font-semibold">
                {formatNumber(item.final_price)} تومان
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}