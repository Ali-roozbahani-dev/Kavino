"use client";

import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { filterProductsSchema } from "../schema/filterProductsSchema";
import FilterContainer from "./FilterContainer";
import { Dispatch, SetStateAction } from "react";
import { FormInput, FormOutput, Tqueries } from "../../../../../entities/Product/types/TproductSection";
import { Facets } from "@/entities/Product/types";
import { CategoryListItem } from "@/entities/Category/types/Category";

interface Tprops {
  facets: Facets;
  initialCategory?: CategoryListItem;
  showFilter: boolean;
  setFormQueries: Dispatch<
    SetStateAction<Omit<Tqueries, "page" | "ordering" | "search">>
  >;
}

export function FilterForm({
  facets,
  initialCategory,
  setFormQueries,
  showFilter,
}: Tprops) {
  const methods = useForm<FormInput, any, FormOutput>({
    resolver: zodResolver(filterProductsSchema),
    defaultValues: {
      has_stock: false,
      category: initialCategory?.slug,
      brand: undefined,
      min_price: 0,
      max_price: facets.price.max,
    },
  });

  const submitHandler = (data: FormOutput) => {
    setFormQueries({ ...data });
  };

  return (
    <FormProvider {...methods}>
      <div
        className={`
          block
          md:sticky md:top-38 lg:top-45 md:right-0 md:p-4 md:self-start
          ${showFilter ? "md:block" : "md:hidden"}
        `}
      >
        <FilterContainer
          facets={facets}
          onSubmit={methods.handleSubmit(submitHandler)}
        />
      </div>
    </FormProvider>
  );
}
