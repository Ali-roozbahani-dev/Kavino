import AddressFormDialog from "@/components/ui/Address/AddressFormDialog";
import { AddressSelectorDialog } from "@/components/ui/Address/SelectAddressDialog";
import { Button } from "@/components/ui/button";
import { AddressListItem } from "@/entities/Address";
import { MapPin, Plus } from "lucide-react";


export default function SelectAddressHeader({addresses}:{addresses: AddressListItem[]}){

    return (
        <div className="flex justify-between mb-6">
            <h2 className="flex items-center gap-1.5 text-lg font-semibold">
                <MapPin className="size-5" />
                انتخاب آدرس
            </h2>

            <div className="flex gap-2">
                <AddressSelectorDialog addresses={addresses} />
                {/* افزودن آدرس */}
                <AddressFormDialog
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
        </div>
    )
}