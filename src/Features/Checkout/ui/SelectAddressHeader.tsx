import AddressFormDialog from "@/Features/Address/ui/AddressFormDialog";
import { AddressSelectorDialog } from "@/Features/Address/ui/SelectAddressDialog";
import { Button } from "@/components/ui/button";
import { AddressListItem } from "@/entities/Address";
import { MapPin, Plus } from "lucide-react";


export default function SelectAddressHeader({addresses}:{addresses: AddressListItem[]}){

    return (
        <div className="flex justify-between mb-6">
            <h2 className="flex items-center gap-1.5 text-md md:text-lg font-semibold">
                <MapPin className="size-4.5 md:size-5" />
                 آدرس
            </h2>

            <div className="flex gap-1 md:gap-2">
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
                    <span className="hidden md:block">
                     افزودن آدرس
                    </span>
                    </Button>
                }
                />
            </div>
        </div>
    )
}