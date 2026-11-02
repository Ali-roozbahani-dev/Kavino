"use client";

import { AddressForm } from "@/Features/Address";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/ui/dialog"

interface AddressDialogProps {
  trigger: React.ReactNode;
  initialAddressId?: number;
}

export default function AddressFormDialog({
  trigger,
  initialAddressId
}: AddressDialogProps) {

  return (
    <Dialog>
      <DialogTrigger asChild>
       {trigger}
      </DialogTrigger>

      <DialogContent
        className="h-screen rounded-none md:rounded-lg max-w-screen sm:max-w-2xl md:h-150 overflow-y-auto block! scrollbar-custom"
        dir="rtl"
      >
        <DialogHeader>
          <DialogTitle className="font-vazir font-semibold md:text-[18px] mb-2">
            {initialAddressId ? "ویرایش آدرس" : "افزودن آدرس جدید"}
          </DialogTitle>

        {!initialAddressId &&
          <DialogDescription className="mb-2.5 text-[13px] md:text-[14px]">
            اطلاعات آدرس و گیرنده را وارد کنید.
          </DialogDescription>
        }
        </DialogHeader>

        <AddressForm initialAddressId={initialAddressId}/>
      </DialogContent>
    </Dialog>
  );
}