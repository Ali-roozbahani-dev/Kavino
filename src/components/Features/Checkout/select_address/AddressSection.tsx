"use client";

import { useEffect } from "react";

import {
  useAddressesList,
} from "@/components/Features/Address/address_list/hooks/useAddressesList";
import SectionLoadingDots from "@/components/ui/Loading/SectionLoadingDots";
import { useCheckoutStore } from "../store/checkoutStore";
import SelectAddressHeader from "./SelectAddressHeader";
import SelectedAddress from "./SelectedAddress";
import EmptyAddressSelector from "./EmptyAddressSelector";

export default function AddressSection() {
  const {
    data,
    isPending: addressesPending,
    error: addressesError,
  } = useAddressesList();

  const initDefaultAddress = useCheckoutStore(
    (state) => state.initDefaultAddress
  );

  useEffect(() => {
    if (!data) return;

    const addresses = data.pages.flatMap(
      (page) => page.results
    );

    const defaultAddress = addresses.find(
      (address) => address.is_default
    );

    if (defaultAddress) {
      initDefaultAddress(defaultAddress.id);
    }
  }, [data, initDefaultAddress]);

  if (addressesPending) {
    return <SectionLoadingDots containerClass="h-40" />;
  }

  if (addressesError) {
    throw new Error("خطا در دریافت اطلاعات");
  }

  const addresses = data.pages.flatMap(
    (page) => page.results
  );

  if(addresses.length <= 0) return <EmptyAddressSelector />;

  return (
    
    <section className="mt-5 rounded-xl border bg-background p-6" dir="rtl">
      <SelectAddressHeader addresses={addresses}/>

      
      <SelectedAddress 
      addresses={addresses}
      />      
    </section>
    
  );
}