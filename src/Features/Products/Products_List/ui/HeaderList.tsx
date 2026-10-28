"use client";

import { SidebarTrigger } from "@/ui/sidebar";
import { SortBySelect } from "./SortBySelect";
import { FilterTrigger } from "@/ui/FilterTrigger";
import { Dispatch, SetStateAction } from "react";
import { CategoryListItem } from "@/entities/Category/models/Category.types";
import { Ordering } from "@/Features/Products/Filter/types/TproductSection";
import { formatNumberWithoutSeparator } from "@/shared/utils/formatNumber";
import ProductsBreadCrumbs from "@/ui/BreadCrumbs/ProductsBreadCrumbs";

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
    <div className="p-5">
      {initialCategory!! && (
        <ProductsBreadCrumbs initialCategory={initialCategory} />
      )}
      <div className="flex justify-between w-full py-4">
        <SidebarTrigger className="md:hidden" />
        <FilterTrigger showFilter={showFilter} setter={setShowFilter} />
        <div className="flex justify-center">
          <div className="me-4">
            <SortBySelect ordering={ordering} setOrdering={setOrdering} />
          </div>
          <div className="flex-center">
            <span className="text-primary-text text-[13px]">{formatNumberWithoutSeparator(count)} محصول</span>
          </div>
        </div>
      </div>
    </div>
  );
}
