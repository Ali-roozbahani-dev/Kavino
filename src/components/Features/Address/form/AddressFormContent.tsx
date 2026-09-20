"use client";
import AddressLocationForm from "./AddressLocationForm";
import AddressAdditionalForm from "./AddressAdditionalForm";
import AddressReceiverForm from "./AddressReceiverForm";
import { useForm, FormProvider } from "react-hook-form";
import { CreateAddressInput, createAddressSchema } from "@/components/Features/Address/form/schemas/AddressSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useUpdateAddress } from "@/components/Features/Address/form/update_address/hooks/useUpdateAddress";
import { useCreateAddress } from "@/components/Features/Address/form/create_address/hooks/useCreateAddress";
import SubmitAddressBtn from "./SubmitAddressBtn";

export default function AddressFormContent({
  initialAddress,
  createAddress,
  updateAddress,
}: {
  initialAddress?: import("@/entities/Address/types/AddressDetail").AddressDetail;
  createAddress: ReturnType<typeof useCreateAddress>;
  updateAddress: ReturnType<typeof useUpdateAddress>;
}) {
  
  const methods = useForm<CreateAddressInput>({
    resolver: zodResolver(createAddressSchema),
    defaultValues: initialAddress
      ? {
          title: initialAddress.title,
          address_type: initialAddress.address_type,
          receiver_name: initialAddress.receiver_name,
          receiver_phone: initialAddress.receiver_phone,
          province: initialAddress.province.id,
          city: initialAddress.city.id,
          address_line: initialAddress.address_line,
          alley: initialAddress.alley,
          plaque: initialAddress.plaque,
          unit: initialAddress.unit,
          postal_code: initialAddress.postal_code,
          description: initialAddress.description,
          latitude: initialAddress.latitude,
          longitude: initialAddress.longitude,
        }
      : {
          title: "خانه",
          address_type: "home",
          receiver_name: undefined,
          receiver_phone: undefined,
          province: undefined,
          city: undefined,
          address_line: "",
          alley: "",
          plaque: "",
          unit: "",
          postal_code: undefined,
          description: "",
          latitude: "",
          longitude: "",
        },
  });

  const onSubmit = (data: CreateAddressInput) => {
  const payload = {
    ...data,
    receiver_phone: `+98${data.receiver_phone}`,
  };

  if (initialAddress) {
    updateAddress.mutate(
      { id: initialAddress.id, data: payload },
      {
        onSuccess: () => {
          methods.reset(data);
        },
      }
    );
  } else {
    createAddress.mutate(payload, {
      onSuccess: () => {
        methods.reset();
      },
    });
  }
};

  const isPending = createAddress.isPending || updateAddress.isPending;

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        <section className="rounded-xl border bg-background p-6">
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
            <AddressReceiverForm />
            <AddressLocationForm />
          </div>
        </section>
        <AddressAdditionalForm />
        <SubmitAddressBtn
          isPending={isPending}
          disabled={!methods.formState.isDirty}
          formType={initialAddress ? "update" : "create"}
        />
      </form>
    </FormProvider>
  );
}