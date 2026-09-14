"use client"
import { Search } from "lucide-react"

import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group"
import { Result } from "./ui/Result"
import { useEffect, useRef, useState } from "react"
import { usePathname } from "next/navigation"
import { useSearchResult } from "./hooks/useSearchResult"


export default function SearchHeader() {
  const [openResult , setOpenResult] = useState(false);
  const pathname = usePathname();
  const [searchValue , setSearchValue] = useState("");
  const [debouncedSearch , setDebouncedSearch] = useState("");  
  const {data: results , isPending} = useSearchResult(debouncedSearch);  
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(e.target as Node)
      ) {
        setOpenResult(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
    
  
  useEffect(()=>{
    const debounceHandler = setTimeout(() => {
      setDebouncedSearch(searchValue)      
    }, 500);

    return ()=> clearTimeout(debounceHandler)
  },[searchValue])

  
  
  useEffect(() => {
    setOpenResult(false);
  }, [pathname]);

 




  return (
    <div ref={containerRef} className="relative w-full">
      <InputGroup className="py-5 lg:py-6 px-2.5 rounded-full bg-[#f5f5f5]">
        <InputGroupInput 
        className="placeholder:text-[13px] lg:placeholder:text-[15px]"
        placeholder="جستوجو ..." 
        onFocus={()=> setOpenResult(true)}        
        value={searchValue} 
        onChange={(e) => setSearchValue(e.target.value)}/>
        <InputGroupAddon className="ms-2">
          <Search className="w-6! h-6!"/>
        </InputGroupAddon>      
      </InputGroup> 

      <Result 
      results={results} 
      searchValue={searchValue} 
      isPending={isPending}
      openResult={openResult}
      />  

    </div>
  )
}
