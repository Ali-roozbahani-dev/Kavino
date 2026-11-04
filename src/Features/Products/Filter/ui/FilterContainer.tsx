"use client";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
} from "@/components/ui/sidebar";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { CategoryCheckBoxes } from "./CategoryCheckBoxes";
import { BrandCheckBoxes } from "./BrandCheckBoxes";
import { PriceFilter } from "./PriceFilter";
import { HasStockSwitch } from "./HasStockSwitch";
import FormResetBtn from "./FormResetBtn";
import { SlidersHorizontal } from "lucide-react";
import { Facets } from "@/entities/Product";
import { usePathname } from "next/navigation";
import { useIsMobile } from "@/shared/hooks/use-mobile";
import { FormInput } from "../schema/filterProductsSchema";


type Tprops = {
  defaultValues: FormInput;
  facets: Facets;
  onSubmit: React.FormEventHandler<HTMLFormElement>;
};


export default function FilterContainer({facets , onSubmit , defaultValues}: Tprops){
    const pathname = usePathname();
    const firstSegment = pathname.split('/')[1];
    const isMobile = useIsMobile();
    
        

    return (
        <Sidebar
        side="right"
        variant="sidebar"     
        collapsible={isMobile ? "offcanvas" : "none"} 
        className="w-80 border-l h-full md:border"
        >
        
            <form
            onSubmit={onSubmit}
            className="flex h-full flex-col"
            >
            <SidebarHeader className="border-b">
                <h1 className="font-bold text-[16px] md:text-[18px] px-4 py-2">
                    <SlidersHorizontal className="size-5 inline-block me-2.5"/>
                    <span>فیلتر ها</span>
                </h1>
            </SidebarHeader>

            <SidebarContent className="px-4">
                <div className="py-4">
                <HasStockSwitch />
                </div>

                <Accordion
                type="multiple"                
                >
                <AccordionItem value="category">
                    <AccordionTrigger className="font-bold text-[13px] md:text-[15px]">
                    دسته‌بندی
                    </AccordionTrigger>
                    <AccordionContent className="max-h-72 overflow-y-auto">
                    <CategoryCheckBoxes categoryOptions={facets.categories}/>
                    </AccordionContent>
                </AccordionItem>

                <AccordionItem value="price">
                    <AccordionTrigger className="font-bold text-[13px] md:text-[15px]">
                    محدوده قیمت
                    </AccordionTrigger>
                    <AccordionContent>
                     <PriceFilter initialMaxPrice={facets.price.max}/>
                    </AccordionContent>
                </AccordionItem>


                {firstSegment !== "brand" &&
                <AccordionItem value="brand">
                    <AccordionTrigger className="font-bold text-[13px] md:text-[15px]">
                    برند
                    </AccordionTrigger>
                    <AccordionContent className="max-h-72 overflow-y-auto">
                    <BrandCheckBoxes brandsOption={facets.brands}/>
                    </AccordionContent>
                </AccordionItem>
                }

                </Accordion>
            </SidebarContent>

            <SidebarFooter className="border-t">
                <FormResetBtn defaultValues={defaultValues}/>
            </SidebarFooter>
            </form>      
        </Sidebar>
    )
}