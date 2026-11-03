import { OrdersList, PageTitle } from "@/Features/User_Profile";
import { Package } from "lucide-react";

export default function OrdersPage() {
  return (
    <section className="space-y-5">
      <PageTitle>
        <div className="bg-white py-5 lg:p-5">
            <div className="flex items-center gap-4">
              <div
                className={"hidden lg:flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600"}
              >   
              <Package strokeWidth={1.8} size={25} />             
              </div>
      
              <div>
                <h1 className="text-[15px] md:text-xl font-bold">سفارش ها</h1>
              </div>
            </div>
          </div>        
      </PageTitle>
      <OrdersList />      
    </section>
  );
}