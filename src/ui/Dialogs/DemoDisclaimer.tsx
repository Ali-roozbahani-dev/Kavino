"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/ui/dialog";

import { Button } from "@/ui/button";
import { Info } from "lucide-react";
import { useDemoDisclaimer } from "@/shared/hooks/use-demo-disclaimer";

export default function DemoDisclaimer() {
  const { open, accept } = useDemoDisclaimer();

  return (
    <Dialog open={open} onOpenChange={(value) => !value && accept()}>
      <DialogContent
        dir="rtl"
        className="sm:max-w-md font-vazir"
        showCloseButton={false}
      >
        <DialogHeader className="text-right">
          <DialogTitle className="text-lg flex gap-2 font-vazir">
            <Info className="size-6 flex items-center justify-center rounded-full bg-blue-100 text-blue-600" />
            <span>اطلاعیه مهم</span>
          </DialogTitle>

          <DialogDescription className="text-right text-[14px] md:text-[15px] leading-6 md:leading-7">
            این وب‌سایت صرفاً با هدف نمایش نمونه‌کار و ارزیابی مهارت‌های توسعه
            وب طراحی شده است. محتوای سایت، شامل محصولات، تصاویر، اطلاعات و
            قیمت‌ها، از منابع دیگر کپی‌برداری شده و جنبه نمایشی دارد. هیچ‌گونه
            فروش واقعی یا تراکنش مالی در این وب‌سایت انجام نمی‌شود.
          </DialogDescription>
        </DialogHeader>

        <DialogFooter>
          <Button className="w-full" onClick={accept}>
            متوجه شدم
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}