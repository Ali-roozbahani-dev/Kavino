"use client";

import { Bell } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function NotifyWhenAvailableBtn() {
  const handleNotify = () => {
    // TODO: ارسال درخواست ثبت اعلان موجودی
  };

  return (
    <Button
      type="button"
      onClick={handleNotify}
      variant="SoftBlue"
      className="w-full rounded-sm px-5 h-11 lg:h-12.5 lg:text-[16px]"
    >
      <Bell className="size-5 lg:size-6" />
      موجود شد خبرم کن
    </Button>
  );
}