"use client";

import { Menu } from "lucide-react";

import {
  Sheet,  
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import {
  Accordion,  
} from "@/components/ui/accordion";
import { TCategoriesGroup } from "../desktop/Categories/utils/categorizeCategories";
import CategoryItem from "./CategoryItem";
import StaticNavbarItems from "../NavbarHeader/StaticNavbarItems";
import Image from "next/image";

export default function MobileNavbar({categoriesGroup,}:{categoriesGroup: TCategoriesGroup;}) {


  return (
    <Sheet>
      <SheetTrigger asChild className="">
        <button className="rounded-lg p-2 hover:bg-muted">
          <Menu className="size-6" />
        </button>
      </SheetTrigger>

      <SheetContent side="right" className="w-[320px] p-0 z-200">
        <SheetHeader className="pb-0! pt-3 px-1">
          <Image src={"/mainLogo.png"} width={100} height={100} alt="logo"/>          
        </SheetHeader>

        <div className="overflow-y-auto h-full pb-20  scrollbar-custom">
          <SheetTitle className="font-vazir text-right px-3 my-1 font-bold">
            دسته بندی ها
          </SheetTitle>
          <Accordion type="multiple" className="w-full">
            {categoriesGroup.parents.map((parent) => (
              <CategoryItem 
              parent={parent}
              children={categoriesGroup.children}
              key={parent.id}

              />              
            ))}
          </Accordion>

          
          <StaticNavbarItems />
                             
        </div>
      </SheetContent>
    </Sheet>
  );
}
