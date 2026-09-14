import { Tqueries } from "@/entities/Product/types/TproductSection";
import Main from "@/components/ui/Main";
import { SidebarProvider } from "@/components/ui/sidebar";
import { getProductsList } from "@/entities/Product/api/getProductsList";
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import { productQueryKey } from "@/components/Features/Products/util/productQueries";
import ProductsSection from "@/components/Features/Products/products_list/ProductsSection";

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function BrandProductsPage({ params }: PageProps) {
  const { slug } = await params;
  const brandsSlug = decodeURIComponent(slug);

  const initialQueries: Omit<Tqueries, "page"> = {
    ordering: undefined,
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
