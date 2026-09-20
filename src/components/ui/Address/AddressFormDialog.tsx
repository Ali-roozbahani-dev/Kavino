"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import AddressForm from "../../Features/Address/form/AddressForm";

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
        className="max-h-[90vh] overflow-y-auto sm:max-w-3xl scrollbar-custom rounded-sm"
        dir="rtl"
      >
        <DialogHeader>
          <DialogTitle className="font-vazir font-semibold md:text-[18px] mb-2">
            {initialAddressId ? "ویرایش آدرس" : "افزودن آدرس جدید"}
          </DialogTitle>

        {!initialAddressId &&
          <DialogDescription>
            اطلاعات آدرس و گیرنده را وارد کنید.
          </DialogDescription>
        }
        </DialogHeader>

        <AddressForm initialAddressId={initialAddressId}/>
      </DialogContent>
    </Dialog>
  );
}