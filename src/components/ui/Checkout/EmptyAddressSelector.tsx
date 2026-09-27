import AddressDialog from "@/components/ui/Address/AddressFormDialog";
import { Button } from "@/components/ui/button";
import { MapPin } from "lucide-react";



export default function EmptyAddressSelector() {
  return (
    <section className="mt-5 rounded-xl border bg-background p-6" dir="rtl">
      <h2 className="mb-2 flex items-center gap-2 text-lg font-semibold">
        <MapPin className="size-5" />
        انتخاب آدرس
      </h2>

      <p className="text-sm text-muted-foreground">
        هنوز هیچ آدرسی برای ارسال ثبت نکرده‌اید.
      </p>

    <AddressDialog trigger={
        <Button   
        variant="Blue3"     
        type="button"
        className="mt-4 rounded-sm px-4 py-2 text-sm font-medium text-primary-foreground"
      >
        افزودن آدرس جدید
      </Button>
    } />
      
    </section>
  );
}