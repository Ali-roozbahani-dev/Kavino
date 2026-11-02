"use client";

import { Pencil } from "lucide-react";
import { Button } from "@/ui/button";
import AddressDialog from "@/Features/Address/ui/AddressFormDialog";
import { AddressListItem } from "@/entities/Address/models/AddressList.types";
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
    <div className="relative flex items-start md:items-center justify-between rounded-md md:rounded-xl 
    mt-7 md:mt-0
    border gap-2 p-2.5 md:p-4 
    transition-colors hover:bg-transparent">
      {/* اطلاعات آدرس */}
      <div className="space-y-2">
        <div className="text-[13px] md:text-[14px]  bg font-semibold">
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
              variant="outline"
              aria-label="ویرایش آدرس"
              className="absolute md:static -top-5 left-1 h-7 w-7 md:w-max md:h-10"
            >
              <Pencil className="size-3 md:size-4" />
              <span className=" hidden md:block">ویرایش آدرس</span>
            </Button>
          }
          initialAddressId={address.id}
        />
      </div>
    </div>
  );
}