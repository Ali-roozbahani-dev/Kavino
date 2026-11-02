"use client";

import { SidebarTrigger } from "@/ui/sidebar";
import { SortBySelect } from "./SortBySelect";
import { FilterTrigger } from "@/ui/FilterTrigger";
import { Dispatch, SetStateAction } from "react";
import { CategoryListItem } from "@/entities/Category/models/Category.types";
import { Ordering } from "@/Features/Products/Filter/types/TproductSection";
import { formatNumberWithoutSeparator } from "@/shared/utils/formatNumber";
import ProductsBreadCrumbs from "@/Features/Products/ui/ProductsBreadCrumbs";

interface Tprops {
  initialCategory?: CategoryListItem;
  count: number;
  ordering: Ordering | undefined;
  setOrdering: Dispatch<SetStateAction<Ordering | undefined>>;
  showFilter: boolean;
  setShowFilter: Dispatch<SetStateAction<boolean>>;
}

export default function HeaderList({
  initialCategory,
  count,
  ordering,
  setOrdering,
  showFilter,
  setShowFilter,
}: Tprops) {

  
  return (
    <div className="p-0 md:p-2.5 lg:p-5">
      {initialCategory!! && (
        <ProductsBreadCrumbs initialCategory={initialCategory} />
      )}
      <div className="flex justify-between w-full py-3 md:py-4">        
        <SidebarTrigger className="md:hidden" />
        <FilterTrigger showFilter={showFilter} setter={setShowFilter} />
        <div className="flex justify-center">
          <div className="md:me-4">
            <SortBySelect ordering={ordering} setOrdering={setOrdering} />
          </div>
          <div className="hidden md:flex justify-center items-center">
            <span className="text-primary-text text-[11px] md:text-[13px]">{formatNumberWithoutSeparator(count)} محصول</span>
          </div>
        </div>
      </div>
      <div className="md:hidden mb-3 sm:flex justify-center items-center">
        <span className="font-semibold text-[13px]">{formatNumberWithoutSeparator(count)} محصول</span>
      </div>
    </div>
  );
}
