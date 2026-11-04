import { AddressList, PageTitle } from "@/Features/User_Profile";
import AddressFormDialog from "@/Features/Address/ui/AddressFormDialog";
import { Button } from "@/components/ui/button";
import {
  MapPin,
  Plus,
} from "lucide-react";


export default function AddressesPage() {
  return (
    <section className="space-y-5">
      {/* Header */}
      <div className="flex gap-4 bg-white py-5 lg:p-5 justify-between items-start">
        <PageTitle>
        <div>
            <div className="flex items-center gap-4">
              <div
                className={"hidden lg:flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600"}
              >     
              <MapPin strokeWidth={1.8} size={25} />         
              </div>
      
              <div>
                <h1 className="text-[15px] md:text-xl font-bold">آدرس ها </h1>
              </div>
            </div>
          </div>        
      </PageTitle>     


        <AddressFormDialog trigger={
          
        <Button
          variant={"Blue3"}
          type="button"
          className="flex h-7 md:h-11 items-center justify-center gap-2 rounded-md px-2 md:px-5 text-[12px] md:text-[15px] font-medium"
        >
          <Plus size={18} />
          افزودن آدرس 
        </Button>
        }/>
      </div>

      

      <AddressList />
    </section>
  );
}