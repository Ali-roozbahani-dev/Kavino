"use client";
import { useEffect, useRef, useState } from "react";
import HeaderList from "./ui/HeaderList";
import ProductsList from "./ProductsList";
import { FilterForm } from "@/components/Features/Products/Filter/ui/FilterForm";
import { CategoryListItem } from "@/entities/Category/types/Category";
import { PulsatingDots } from "@/components/ui/Loading/pulsating-dots";
import { FormInput, FormOutput, Ordering } from "@/components/Features/Products/Filter/types/TproductSection";
import { useProductList } from "@/components/Features/Products/products_list/hooks/useProductList";
import { useProductFacets } from "@/components/Features/Products/Filter/hooks/useProductFacets";

interface Tprops {
  initialBrand?: string;
  searchValue?: string;
  initialCategory?: CategoryListItem;
}

export default function ProductsSection({
  initialBrand,
  searchValue,
  initialCategory,
}: Tprops) {
  const sentinel = useRef(null);
  const [showFilter, setShowFilter] = useState(true);
  const [ordering, setOrdering] = useState<Ordering | undefined>(undefined);
  const [formQueries, setFormQueries] = useState<Omit<FormOutput, "page" | "ordering" | "search">>({
    category: initialCategory?.slug ?? undefined,
    brand: initialBrand ?? undefined,
    max_price: undefined,
    min_price: undefined,
    has_stock: undefined,
  });

  // این کوئری فقط با category/search/brand عوض می‌شه، نه با فیلترها
  const { data: facets, isPending: isFacetsPending } = useProductFacets({
    category: initialCategory?.slug,
    search: searchValue,
  });

  const {
    data,
    isPending: isListPending,
    hasNextPage,
    isFetchingNextPage,
    isError,
    error,
    fetchNextPage,
  } = useProductList({
    ...formQueries,
    search: searchValue,
    ordering,
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting && hasNextPage && !isFetchingNextPage) {
          fetchNextPage();
        }
      },
      { root: null, rootMargin: "50px" },
    );

    if (sentinel.current) observer.observe(sentinel.current);
    return () => observer.disconnect();
  }, [fetchNextPage, hasNextPage, isFetchingNextPage]);

  if (isFacetsPending || !facets) {
    return <div>loading ...</div>;
  }

  if (isError) {
    throw error;
  }

  const products = data ? data.pages.flatMap((page) => page.results) : [];

  return (
    <div className="flex w-full relative">
      <FilterForm
        facets={facets}
        initialCategory={initialCategory}
        setFormQueries={setFormQueries}
        showFilter={showFilter}
      />

      <div className="flex-1">
        <div className="w-full">
          <HeaderList
            initialCategory={initialCategory}
            count={products.length}
            ordering={ordering}
            setOrdering={setOrdering}
            showFilter={showFilter}
            setShowFilter={setShowFilter}
          />

          {isListPending ? (
            <div>loading list ...</div>
          ) : (
            <>
              <ProductsList products={products} />
              <div ref={sentinel} className="h-2 w-full">
                {isFetchingNextPage && (
                  <div className="w-max mx-auto mt-5">
                    <PulsatingDots className="w-11 ltr" />
                  </div>
                )}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}