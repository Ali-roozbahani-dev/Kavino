"use client";

import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { filterProductsSchema } from "../schema/filterProductsSchema";
import FilterContainer from "./FilterContainer";
import {
  Dispatch,
  SetStateAction,
  useCallback,
  useEffect,
} from "react";
import { FormInput, FormOutput, Tqueries } from "../types/TproductSection";
import { Facets } from "@/entities/Product";
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
  const defaultValues: FormInput = {
    has_stock: false,
    category: initialCategory ? [initialCategory.slug] : [],
    brand: [],
    min_price: 0,
    max_price: facets.price.max,
  };

  const methods = useForm<FormInput, any, FormOutput>({
    resolver: zodResolver(filterProductsSchema),
    defaultValues,
    mode: "onChange",
  });

  const { watch, handleSubmit} = methods;

  const submitHandler = useCallback(
    (data: FormOutput) => {
      setFormQueries({ ...data });
    },
    [setFormQueries]
  );

  useEffect(() => {
    // React Hook Form's watch subscription is intentionally used
    // to submit filters whenever form values change.
    // eslint-disable-next-line react-hooks/incompatible-library
    const subscription = watch(() => {
      handleSubmit(submitHandler)();
    });

    return () => subscription.unsubscribe();
  }, [watch, handleSubmit, submitHandler]);

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
          defaultValues={defaultValues}
          facets={facets}
          onSubmit={methods.handleSubmit(submitHandler)}
        />
      </div>
    </FormProvider>
  );
}
