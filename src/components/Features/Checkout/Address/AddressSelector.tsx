"use client"
import { useEffect } from "react";
import {
  Field,
  FieldContent,
  FieldLabel,
} from "@/components/ui/field";
import { RadioGroup } from "@/components/ui/radio-group";
import { AddressListItem } from "@/entities/Address/types/AddressList";
import EmptyAddressState from "@/entities/Address/ui/EmptyAddressState";
import AddressSelectorItem from "./AddressSelectorItem";
import { useCheckoutStore } from "@/entities/Checkout/store/checkoutStore";
import { MapPin } from "lucide-react";

interface AddressSelectorProps {
  addresses: AddressListItem[];
}

export default function AddressSelector({ addresses }: AddressSelectorProps) {
  const setAddress = useCheckoutStore((state) => state.setAddress);
  const address_id = useCheckoutStore((state) => state.address_id);


  if (addresses.length === 0) {
    return <EmptyAddressState />;
  }

  return (
    <section className="mt-5 rounded-xl border bg-background p-6" dir="rtl">
      <h2 className="mb-6 flex items-center gap-1.5 text-lg font-semibold">
        <MapPin className="size-5" />
        انتخاب آدرس
      </h2>

      <Field>
        <FieldLabel>آدرس ارسال را انتخاب کنید</FieldLabel>

        <FieldContent>
          <RadioGroup
            value={String(address_id) ?? undefined}
            onValueChange={(value) => {
              const id = Number(value);
              setAddress(id);
            }}
            className="grid gap-3"
          >
            {addresses.map((address) => (
              <AddressSelectorItem key={address.id} address={address} />
            ))}
          </RadioGroup>
        </FieldContent>
      </Field>
    </section>
  );
}