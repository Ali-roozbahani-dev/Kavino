import { AddressList } from "@/components/Features/User_Profile";
import AddressFormDialog from "@/components/ui/Address/AddressFormDialog";
import { Button } from "@/components/ui/button";
import { PageTitle } from "@/components/ui/Profile";
import {
  Plus,
} from "lucide-react";


export default function AddressesPage() {
  return (
    <section className="space-y-5">
      {/* Header */}
      <div className="flex  gap-4 bg-white py-5 lg:p-5 justify-between">
        <PageTitle>
          آدرس‌های من
        </PageTitle>     


        <AddressFormDialog trigger={
          
        <Button
          variant={"Blue3"}
          type="button"
          className="flex h-9 md:h-11 items-center justify-center gap-2 rounded-md px-3 md:px-5 text-sm font-medium"
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