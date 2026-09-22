"use client";

import { ReactNode } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { Button } from "@/components/ui/button";
import { useSetDefaultAddress } from "@/components/Features/Address";
import { AddressListItem } from "@/entities/Address";
import { formatNumberWithoutSeparator } from "@/shared/utils/formatNumber";
import { useCheckoutStore } from "@/components/Features/Checkout";

interface SelectAddressDialogProps {
  addresses: AddressListItem[];

  open?: boolean;
  onOpenChange?: (open: boolean) => void;

  trigger?: ReactNode;
}

export function AddressSelectorDialog({
  addresses,
  open,
  onOpenChange,
  trigger,
}: SelectAddressDialogProps) {
  const { mutate: setDefaultAddress, isPending } =
    useSetDefaultAddress();

  const setAddress = useCheckoutStore(
    (state) => state.setAddress
  );

  const isControlled = open !== undefined;

  const handleSelectAddress = (addressId: number) => {
    if (isPending) return;

    
    // تغییر آدرس پیش‌فرض در Backend
    setDefaultAddress(addressId, {
      onSuccess: () => {
        onOpenChange?.(false);
        
        // تغییر انتخاب Checkout
        setAddress(addressId);
      },
    });
  };

  return (
    <Dialog
      {...(isControlled
        ? {
            open,
            onOpenChange,
          }
        : {})}
    >
      {!isControlled && (
        <DialogTrigger asChild>
          {trigger ?? (
            <Button type="button" variant="SoftBlue">
              انتخاب آدرس
            </Button>
          )}
        </DialogTrigger>
      )}

      {isControlled && trigger && (
        <DialogTrigger asChild>
          {trigger}
        </DialogTrigger>
      )}

      <DialogContent
        dir="rtl"
        className="sm:max-w-2xl h-150 overflow-y-auto block!"
      >
        <DialogHeader>
          <DialogTitle className="font-vazir">
            انتخاب آدرس
          </DialogTitle>

          <DialogDescription>
            برای انتخاب آدرس پیش‌فرض، روی آدرس موردنظر کلیک کنید.
          </DialogDescription>
        </DialogHeader>

        <div className="mt-8 space-y-3">
          {addresses.map((address) => {
            const isDefault = address.is_default;

            return (
              <div
                key={address.id}
                role="button"
                tabIndex={0}
                aria-disabled={isPending}
                onClick={() =>
                  handleSelectAddress(address.id)
                }
                onKeyDown={(event) => {
                  if (
                    event.key === "Enter" ||
                    event.key === " "
                  ) {
                    event.preventDefault();
                    handleSelectAddress(address.id);
                  }
                }}
                className={`
                  rounded-xl border p-4 transition
                  ${
                    isPending
                      ? "cursor-not-allowed opacity-60"
                      : "cursor-pointer"
                  }
                  ${
                    isDefault
                      ? "border-primary bg-primary/5"
                      : "border-border hover:bg-muted/50"
                  }
                `}
              >
                <div className="space-y-2 text-sm">
                  <div className="grid gap-1 text-muted-foreground">
                    <span>
                      {address.receiver_name} -{" "}
                      <span dir="ltr">
                        +
                        {formatNumberWithoutSeparator(
                          Number(address.receiver_phone)
                        )}
                      </span>
                    </span>

                    <span>
                      {address.province}، {address.city}
                    </span>

                    <span className="leading-6 font-semibold text-black">
                      {address.address_line}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {addresses.length === 0 && (
          <div className="py-8 text-center text-sm text-muted-foreground">
            آدرسی برای انتخاب وجود ندارد.
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}
