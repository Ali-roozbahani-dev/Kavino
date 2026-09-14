import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { CategoryListItem } from "@/entities/Category/types/Category";
import React from "react";

interface Tprops {
  initialCategory: CategoryListItem;
}

export default function ProductsBreadCrumbs({ initialCategory }: Tprops) {
  
  return (
    <div>
      <h1 className="font-bold text-[20px] mb-2">{initialCategory.name}</h1>
      <Breadcrumb>
        <BreadcrumbList className="text-[12px] md:text-[13px]">
          <BreadcrumbItem>
            <BreadcrumbLink href="/">
              خانه
            </BreadcrumbLink>
          </BreadcrumbItem>
          {initialCategory.path.map((item , i) => (            
            <React.Fragment key={item.slug}>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
              {initialCategory.path.length === i + 1 ?
                <BreadcrumbPage>
                  {item.name}
                </BreadcrumbPage>
                :
                <BreadcrumbLink href={`/category/${item.slug}`}>
                  {item.name}
                </BreadcrumbLink>
              }
              </BreadcrumbItem>              
            </React.Fragment>
          ))}          
        </BreadcrumbList>
      </Breadcrumb>
    </div>
  );
}
