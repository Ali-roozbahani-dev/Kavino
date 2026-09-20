import { AddressList } from "@/components/Features/Address";
import AddressFormDialog from "@/components/ui/Address/AddressFormDialog";
import { Button } from "@/components/ui/button";
import {
  Plus,
} from "lucide-react";


export default function AddressesPage() {
  return (
    <section className="space-y-5">
      {/* Header */}
      <div className="flex flex-col gap-4 bg-white p-5 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-lg font-bold text-gray-900">
            آدرس‌های من
          </h1>
        </div>


        <AddressFormDialog trigger={
          
        <Button
          variant={"Blue3"}
          type="button"
          className="flex h-11 items-center justify-center gap-2 rounded-md px-5 text-sm font-medium"
        >
          <Plus size={18} />
          افزودن آدرس جدید
        </Button>
        }/>
      </div>

      

      <AddressList />
    </section>
  );
}