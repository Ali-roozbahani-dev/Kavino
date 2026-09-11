"use client";
import { useState } from "react";
import { Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { usePathname, useRouter } from "next/navigation";
import { useCheckoutStore } from "../../../../entities/Checkout/store/checkoutStore";
import { toast } from "sonner";
import {
  checkoutStepsConfig,
  defaultStepConfig,
  StepContext,
} from "@/entities/Checkout/config/checkoutStepsConfig";
import { useUpdateCheckout } from "@/entities/Checkout/hooks/useUpdateCheckout";
import { useCheckout } from "@/entities/Checkout/hooks/useCheckout";
import CheckoutDialog from "@/entities/Checkout/ui/dialog/CheckoutDialog";
import { Checkout } from "@/entities/Checkout/types/Checkout";

const SHIPPING_STEP_PATH = "/checkout/shipping";

export default function CheckoutActionBtn() {
  const pathname = usePathname();
  const router = useRouter();

  const address_id = useCheckoutStore((s) => s.address_id);
  const shipping_method_id = useCheckoutStore((s) => s.shipping_method_id);
  const coupon_code = useCheckoutStore((s) => s.coupon_code);
  const reset = useCheckoutStore((s) => s.reset);

  const { mutateAsync: submitCheckout, isPending } = useUpdateCheckout();

  const isShippingStep = pathname === SHIPPING_STEP_PATH;

  const { data: checkout, isLoading: isCheckoutLoading } = useCheckout({
    enabled: isShippingStep,
  });

  // نتیجه‌ی نهایی که قراره داخل دیالوگ نشون داده بشه
  const [resultCheckout, setResultCheckout] = useState<Checkout | null>(null);
  const [dialogOpen, setDialogOpen] = useState(false);

  const config = checkoutStepsConfig[pathname] ?? defaultStepConfig;
  const ctx: StepContext = {
    router,
    address_id,
    shipping_method_id,
    coupon_code,
    submitCheckout: () =>
      submitCheckout({
        address_id: address_id!,
        shipping_method_id: shipping_method_id!,
        ...(coupon_code ? { coupon_code } : {}),
      }),
    resetCheckout: reset,
  };

  const disabledReason = config.getDisabledReason?.(ctx) ?? null;
  const isDisabled = Boolean(disabledReason) || isPending;

  const handleClick = async () => {
    if (disabledReason) {
      toast.warning(disabledReason);
      return;
    }
    const result = await config.onNext(ctx);
    if (result) {
      setResultCheckout(result);
      setDialogOpen(true);
    }
  };

  const handleDisabledClick = () => {
    if (disabledReason) toast.warning(disabledReason);
  };

  // مرحله shipping و داده checkout هنوز در حال لود
  if (isShippingStep && !disabledReason && isCheckoutLoading) {
    return <Skeleton className="h-12 w-full rounded-md" />;
  }

  // مرحله shipping: پیش‌نیازها کامل نیست
  if (isShippingStep && disabledReason) {
    return (
      <Button
        type="button"
        variant="Blue1"
        className="h-12 w-full"
        onClick={handleDisabledClick}
      >
        {config.label}
      </Button>
    );
  }

  // مرحله shipping و همه‌چیز آماده:
  // کلیک روی دکمه = صدا زدن mutation. تا نتیجه نیومده اسپینر رو دکمه است،
  // دیالوگ فقط بعد از موفقیت (resultCheckout ست شدن) باز می‌شه.
  if (isShippingStep && checkout) {
    return (
      <>
        <Button
          type="button"
          variant="Blue1"
          className="h-12 w-full"
          disabled={isPending}
          onClick={handleClick}
        >
          {isPending ? (
            <span className="flex items-center justify-center gap-2">
              <Loader2 className="h-4 w-4 animate-spin" />
              در حال ثبت سفارش...
            </span>
          ) : (
            config.label
          )}
        </Button>

        {resultCheckout && (
          <CheckoutDialog
            checkout={resultCheckout}
            open={dialogOpen}
            onOpenChange={setDialogOpen}
          />
        )}
      </>
    );
  }

  // بقیه مراحل: همون دکمه ساده
  return (
    <Button
      type="button"
      variant="Blue1"
      className="h-12 w-full"
      disabled={isDisabled}
      onClick={handleClick}
    >
      {isPending ? "در حال ثبت..." : config.label}
    </Button>
  );
}