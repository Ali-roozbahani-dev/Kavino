"use client";

import { Pencil } from "lucide-react";

import { Button } from "@/components/ui/button";
import AddressDialog from "@/components/ui/Address/AddressFormDialog";
import { AddressListItem } from "@/entities/Address/types/AddressList";
import { formatNumberWithoutSeparator } from "@/shared/utils/formatNumber";
import { useCheckoutStore } from "../store/checkoutStore";

interface SelectedAddressProps {
  addresses: AddressListItem[];
}

export default function SelectedAddress({
  addresses,
}: SelectedAddressProps) {
  const addressId = useCheckoutStore(
    (state) => state.address_id
  );

  const address = addresses.find(
    (item) => item.id === addressId
  );

  if (!address) {
    return null;
  }

  return (
    <div className="flex items-center justify-between rounded-xl border p-4 transition-colors hover:bg-transparent">
      {/* اطلاعات آدرس */}
      <div className="space-y-2">
        <div className="text-sm font-semibold">
          {address.address_line}
        </div>

        <div className="flex gap-2 text-sm">
          <span className="text-primary-text">
            گیرنده:
          </span>

          <span>{address.receiver_name}</span>

          <span>-</span>

          <span dir="ltr">
            +
            {formatNumberWithoutSeparator(
              Number(address.receiver_phone)
            )}
          </span>
        </div>
      </div>

      {/* عملیات */}
      <div className="ms-auto flex items-center gap-2">
        <AddressDialog
          trigger={
            <Button
              type="button"
              variant="Light"
              aria-label="ویرایش آدرس"
            >
              <Pencil className="size-4" />
              <span>ویرایش آدرس</span>
            </Button>
          }
          initialAddressId={address.id}
        />
      </div>
    </div>
  );
}