import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { CategoryPath} from "@/entities/Category/types/Category";
import React from "react";


interface Props { 
  name: string;
  path: CategoryPath[]; 

}

export default function ProductBreadcrumb({name , path}: Props) {
  return (
    <div
      className="w-full overflow-x-auto scrollbar-none"
      style={{
        WebkitOverflowScrolling: "touch",
        touchAction: "pan-x",
        overscrollBehaviorX: "contain",
      }}
    >      
      <Breadcrumb>
        <BreadcrumbList className="flex-nowrap whitespace-nowrap text-[12px] md:text-[13px] py-3.5">
          <BreadcrumbItem>
            <BreadcrumbLink href="/">خانه</BreadcrumbLink>
          </BreadcrumbItem>
          
            {path.map((item , i)=>(
              <React.Fragment key={i}>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbLink href={`/category/${item.slug}`}>{item.name}</BreadcrumbLink>
                </BreadcrumbItem>                
              </React.Fragment>
            ))}
                       
          <BreadcrumbSeparator />
          <BreadcrumbItem>            
            <BreadcrumbPage>{name}</BreadcrumbPage>            
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
    </div>
  )
}