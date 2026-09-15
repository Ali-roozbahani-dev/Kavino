import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,    
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Ordering } from "@/components/Features/Products/Filter/types/TproductSection";
import { Dispatch, SetStateAction } from "react";
const sortOptions = [
  { value: "-created_at", label: "جدیدترین" },
  { value: "created_at", label: "قدیمی‌ترین" },
  { value: "default_price", label: "ارزان‌ترین" },
  { value: "-default_price", label: "گران‌ترین" },
];

interface Tprops { 
  ordering: Ordering | undefined;
  setOrdering: Dispatch<SetStateAction<Ordering | undefined>>;    
}

export function SortBySelect({ordering,setOrdering}: Tprops) {
  
  return (
    <Select value={ordering ?? ""} onValueChange={(v: Ordering)=> setOrdering(v)}>
      <SelectTrigger className="w-full max-w-48 rounded-md py-3 lg:py-5">
        <span className="text-primary-text text-[13px]">مرتب سازی :</span>
        <SelectValue />
      </SelectTrigger>
      <SelectContent      
      position="popper"           
      sideOffset={2} 
      >
        <SelectGroup>
          {sortOptions.map((option) => (
            <SelectItem
              key={option.value}
              value={option.value}
            >
              {option.label}
            </SelectItem>
          ))}
        </SelectGroup>        
      </SelectContent>
    </Select>
  )
}
