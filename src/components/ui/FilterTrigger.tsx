"use client";
import { Button } from "@/components/ui/button";
import { PanelTopClose, SlidersHorizontal } from "lucide-react";
import { Dispatch, SetStateAction } from "react";

interface Tprops { 
    showFilter: boolean;   
    setter: Dispatch<SetStateAction<boolean>>
}

export function FilterTrigger({showFilter,setter}: Tprops) {
  

  return (
    <Button
      variant="outline"
      onClick={() => setter(prev => !prev)}
      className={`${showFilter ? "border-0 p-0" : ""}  hidden md:flex`}
    >
      {showFilter ?
      <PanelTopClose strokeWidth={1.3} className="rotate-90 size-8"/>
      :
      <>
      <SlidersHorizontal className="size-4" />
      <span>فیلترها</span>      
      </>      
    }
    </Button>
  );
}