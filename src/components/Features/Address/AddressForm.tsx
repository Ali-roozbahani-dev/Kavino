"use client";
import { useUpdateAddress } from "@/entities/Address/hooks/useUpdateAddress";
import { useCreateAddress } from "@/entities/Address/hooks/useCreateAddress";
import { useAddressDetail } from "@/entities/Address/hooks/useAddressDetail";
import { useProvinces } from "@/entities/Location/hooks/useProvinces";
import { useCities } from "@/entities/Location/hooks/useCities";
import AddressFormSkeleton from "@/entities/Address/ui/AddressFormSkeleton";
import AddressFormContent from "./AddressFormContent";

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




