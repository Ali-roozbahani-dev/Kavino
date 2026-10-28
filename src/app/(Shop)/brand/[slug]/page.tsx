import { Tqueries } from "@/Features/Products/Filter/types/TproductSection";
import Main from "@/ui/Main";
import { SidebarProvider } from "@/ui/sidebar";
import { getProductsList } from "@/Features/Products/Products_List/api/getProductsList";
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import { productQueryKey } from "@/Features/Products/util/productQueries";
import ProductsSection from "@/Features/Products/Products_List/ProductsSection";
import { notFound } from "next/navigation";

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function BrandProductsPage({ params }: PageProps) {
  const { slug } = await params;
  const brandsSlug = decodeURIComponent(slug);

  if(!brandsSlug) notFound();

  const initialQueries: Omit<Tqueries, "page"> = {
    ordering: undefined,
    category: undefined,
    brand: brandsSlug,
    max_price: undefined,
    min_price: undefined,
    has_stock: undefined,
  };

  const queryClient = new QueryClient();

  await queryClient.prefetchInfiniteQuery({
    queryKey: productQueryKey(initialQueries),
    queryFn: ({ pageParam = 1 }) =>
      getProductsList({
        ...initialQueries,
        page: pageParam,
      }),
    initialPageParam: 1,
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <Main>
        <SidebarProvider>
          <ProductsSection initialBrand={brandsSlug} />
        </SidebarProvider>
      </Main>
    </HydrationBoundary>
  );
}
