"use client";
import { useUpdateAddress } from "@/components/Features/Address/form/update_address/hooks/useUpdateAddress";
import { useCreateAddress } from "@/components/Features/Address/form/create_address/hooks/useCreateAddress";
import { useAddressDetail } from "@/entities/Address/hooks/useAddressDetail";
import AddressFormContent from "./AddressFormContent";
import AddressFormSkeleton from "./AddressFormSkeleton";

interface Props {
  initialAddressId?: number;
}

export default function AddressForm({ initialAddressId }: Props) {
  const isEditMode = !!initialAddressId;

  const { data: initialAddress, isLoading: isAddressLoading } =
    useAddressDetail(initialAddressId);

  const createAddress = useCreateAddress();
  const updateAddress = useUpdateAddress();

  // تا وقتی داده‌ی آدرس (در حالت ویرایش) لود نشده، فرم رو نمی‌سازیم  
  if (isEditMode && isAddressLoading) {
    return <AddressFormSkeleton />;
  }

  return (
    <AddressFormContent
      initialAddress={initialAddress}
      createAddress={createAddress}
      updateAddress={updateAddress}
    />
  );
}




