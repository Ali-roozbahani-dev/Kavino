import {
  Field,
  FieldContent,
  FieldDescription,
} from "@/components/ui/field";
import { RadioGroupItem } from "@/components/ui/radio-group";
import { AddressListItem } from "@/entities/Address/types/AddressList";
import { Button } from "@/components/ui/button";
import { Pencil, Plus } from "lucide-react";
import { formatNumberWithoutSeparator } from "@/shared/utils/formatNumber";
import AddressDialog from "@/components/Features/Address/form/ui/AddressDialog";

export default function AddressSelectorItem({
  address,
}: {
  address: AddressListItem;
}) {
  return (
    <Field
      orientation="horizontal"
      className="rounded-xl border p-4 transition-colors hover:bg-transparent"
    >
      <div className="flex items-center gap-3">
        <RadioGroupItem
          value={String(address.id)}
          id={`address-${address.id}`}
        />

        <FieldContent>
          <FieldDescription className="mt-2 space-y-1">
            <span className="block">{address.address_line}</span>

            <span className="flex gap-2">
              <span className="text-black">گیرنده :</span>
              {address.receiver_name} -
              <span dir="ltr">
                +{formatNumberWithoutSeparator(Number(address.receiver_phone))}
              </span>
            </span>
          </FieldDescription>
        </FieldContent>
      </div>

      <div className="ms-auto flex items-center gap-2">
        {/* ویرایش آدرس */}
        <AddressDialog
          trigger={
            <Button
              type="button"
              variant="Light"
              size="icon"
              aria-label="ویرایش آدرس"
            >
              <Pencil className="size-4" />
            </Button>
          }
          initialAddressId={address.id}
        />

        {/* افزودن آدرس */}
        <AddressDialog
          trigger={
            <Button
              type="button"
              variant="Light"
              className="gap-1.5"
            >
              <Plus className="size-4" />
              افزودن آدرس
            </Button>
          }
        />
      </div>
    </Field>
  );
}
