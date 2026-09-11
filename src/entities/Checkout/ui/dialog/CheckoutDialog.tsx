"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Checkout } from "@/entities/Checkout/types/Checkout";
import CheckoutAddressDialog from "./CheckoutAddressDialog";
import CheckoutShippingDialog from "./CheckoutShippingDialog";
import CheckoutProductsDialog from "./CheckoutProductsDialog";
import CheckoutSummaryDialog from "./CheckoutSummaryDialog";

interface CheckoutDialogProps {
  checkout: Checkout;
  open: boolean;
  onOpenChange: (open: boolean) => void;
  /** اختیاری: اگه بعد از تایید باید کاری انجام بشه (مثلاً هدایت به درگاه پرداخت) */
  onConfirm?: () => void;
  confirmLabel?: string;
}


export default function CheckoutDialog({
  checkout,
  open,
  onOpenChange,
  onConfirm,
  confirmLabel = "پرداخت",
}: CheckoutDialogProps) {
  const { cart, address, shipping_method, coupon, shipping_cost } = checkout;

  const handleConfirm = () => {
    if (onConfirm) {
      onConfirm();
    } else {
      onOpenChange(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent
        dir="rtl"
        className="
          h-screen w-screen max-w-none rounded-none
          overflow-y-auto scrollbar-custom
          sm:h-auto sm:max-h-[90vh] sm:w-full sm:max-w-2xl sm:rounded-md
        "
      >
        <DialogHeader className="text-right">
          <DialogTitle className="font-vazir font-semibold md:text-[18px]">
            برسی نهایی
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-5">
          {/* آدرس */}
          <CheckoutAddressDialog address={address} />

          <Separator />

          {/* روش ارسال */}
          <CheckoutShippingDialog 
          shippingMethod={shipping_method}
          shippingCost={shipping_cost} 
          />

          <Separator />

          {/* محصولات */}
          <CheckoutProductsDialog cart={cart}/>

          <Separator />

          {/* خلاصه قیمت */}
          <CheckoutSummaryDialog
          cart={cart} 
          coupon={coupon} 
          shippingCost={shipping_cost} 
          />
          
        </div>

        <DialogFooter className="mt-2">
          <Button
            type="button"
            variant="Blue1"
            className="w-full h-10"
            onClick={handleConfirm}
          >
            {confirmLabel}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
