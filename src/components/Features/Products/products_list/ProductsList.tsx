"use client";
import { useEffect, useMemo, useRef } from "react";
import { useWindowVirtualizer } from "@tanstack/react-virtual";
import { ProductListItem } from "@/entities/Product/types";
import ProductsPageCard from "@/components/ui/Product/Cards/ProductsPageCard";
import EmptyResult from "./ui/EmptyResult";
import { useColumns } from "@/components/Features/Products/products_list/hooks/useColumns";

interface Props {
  products: ProductListItem[];
}


export default function ProductsList({ products }: Props) {
  const parentRef = useRef<HTMLDivElement>(null);
  
  // محاسبه تعداد ستون ها
  const columns = useColumns(parentRef);

  // تبدیل محصولات به ردیف
  const rows = useMemo(() => {
    const result: ProductListItem[][] = [];

    for (let i = 0; i < products.length; i += columns) {
      result.push(products.slice(i, i + columns));
    }

    return result;
  }, [products , columns]);

  


  const rowVirtualizer = useWindowVirtualizer({
    count: rows.length,    
    estimateSize: () => 420,
    overscan: 5,
    useFlushSync: false,
  });
  

  // محاسبه مجدد ارتفاع ردیف ها با تغییر تعداد ستون
  useEffect(() => {
    rowVirtualizer.measure();
  }, [columns,rowVirtualizer]);

  if (products.length === 0) {
    return <EmptyResult />;
  }

  return (
    <div ref={parentRef} className="px-5">
      <div
        style={{
          height: rowVirtualizer.getTotalSize(),
          position: "relative",
        }}
      >
        {rowVirtualizer.getVirtualItems().map((virtualRow) => {          
          const row = rows[virtualRow.index];

          if (!row) return null;

          return (
            <div
              key={virtualRow.key}
              ref={rowVirtualizer.measureElement}
              data-index={virtualRow.index}
              className="absolute left-0 top-0 grid w-full gap-4 not-last:pb-4"
              style={{
                gridTemplateColumns: `repeat(${columns}, minmax(0,1fr))`,
                transform: `translateY(${virtualRow.start}px)`,
              }}
            >
              {row.map((product) => (
                <ProductsPageCard
                  key={product.slug}
                  product={product}
                />
              ))}
            </div>
          );
        })}
      </div>
    </div>
  );
}