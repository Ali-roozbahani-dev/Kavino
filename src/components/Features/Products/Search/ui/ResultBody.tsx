import Spinner from "@/components/ui/Loading/Spinner";
import ResultItem from "./ResultItem";
import EmptySearchResult from "@/components/Features/Products/Search/ui/EmptySearchResult";
import { ProductListItem } from "@/entities/Product/types";

interface Tprops {
  results: ProductListItem[] | undefined;
  isPending: boolean;
}

export default function ResultBody({ results, isPending }: Tprops) {
  if (isPending) {
    return (
      <div className="h-100 flex-center">
        <Spinner className={"text-[40px]"} />
      </div>
    );
  }

  return (
    <>
      {results?.length ? (
        <div
          style={{ direction: "ltr" }}
          className="-mx-(--card-spacing) h-100 space-y-4
        overflow-y-auto border-t p-2 scrollbar-hide"
        >
          <div style={{ direction: "rtl" }}>
            <ul>
              {results.map((product) => (
                <ResultItem key={product.id} product={product} />
              ))}
            </ul>
          </div>
        </div>
      ) : (
        <EmptySearchResult className="w-full flex-center" />
      )}
    </>
  );
}
