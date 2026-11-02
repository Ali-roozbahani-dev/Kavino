import { Checkout } from "@/entities/Checkout/models/Checkout.types";
import { formatNumber, formatNumberWithoutSeparator } from "@/shared/utils/formatNumber";
import Image from "next/image";

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
            className="flex items-center gap-3 rounded-lg border p-2 md:p-3"
          >
            <div className="h-16 w-16 shrink-0 overflow-hidden rounded-md bg-muted">
              <Image
                width={40}
                height={40}
                src={item.image.image}
                alt={item.product_name}
                className="h-full w-full object-contain"
              />
            </div>

            <div className="min-w-0 flex-1">
              <p className="line-clamp-2 text-[12px] md:text-[13px] lg:text-[14px] font-medium">
                {item.product_name}
              </p>

              <div className="flex-between pt-3">
                <p className="mt-1 text-xs text-muted-foreground">
                  تعداد: {formatNumberWithoutSeparator(item.quantity)}
                </p>

                <div className="text-left">
                  {Number(item.discount_amount) > 0 && (
                    <p className="text-xs text-muted-foreground line-through">
                      {formatNumber(item.unit_price)}
                    </p>
                  )}

                  <p className="font-semibold text-[14px] md:text-[15px] lg:text-[16px]">
                    {formatNumber(item.final_price)} 
                    <span className="inline-block ms-1 text-[10px] md:text-[11px] lg:text-[12px]">
                      تومان
                    </span>
                  </p>
                </div>
              </div>

            </div>

            
          </div>
        ))}
      </div>
    </section>
  );
}