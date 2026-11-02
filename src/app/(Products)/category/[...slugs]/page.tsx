import { Tqueries } from "@/Features/Products/Filter/types/TproductSection";
import Main from "@/ui/Main";
import { SidebarProvider } from "@/ui/sidebar";
import { getSingleCategory } from "@/entities/Category/api/getSingleCategory";
import { getProductsList } from "@/Features/Products/Products_List/api/getProductsList";
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { productFacetsQueryKey, productQueryKey } from "@/Features/Products/util/productQueries";
import ProductsSection from "@/Features/Products/Products_List/ProductsSection";
import { safeDecode } from "@/shared/utils/safeDecode";

type PageProps = {
  params: Promise<{
    slugs: string[];
  }>;
};

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slugs } = await params;
  const decodedSlug = safeDecode(slugs[0]);

  return {
    title: `${decodedSlug} | کاوینو`,
    description: `خرید ${decodedSlug} با بهترین قیمت`,
    openGraph: {
      title: `${decodedSlug} | کاوینو`,
      description: `خرید ${decodedSlug} با بهترین قیمت`,
      images: [
        {
          url: "/mainLogo.png",
          width: 1200,
          height: 630,
        },
      ],
    },
  };
}

export default async function CategoryProductsPage({ params }: PageProps) {
  const { slugs } = await params;
    
  const decodedSlug = safeDecode(slugs[0]);

  const category = await getSingleCategory(decodedSlug);

  if(!category) notFound();

  const initialQueries: Omit<Tqueries, "page"> = {
    category: category.slug,
    ordering: undefined,
    brand: undefined,
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

  await queryClient.prefetchQuery({
    queryKey: productFacetsQueryKey({ category: category.slug }),
    queryFn: () =>
      getProductsList({ ...initialQueries, page: 1 }).then((res) => res.facets),
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <Main>
        <SidebarProvider>
          <ProductsSection initialCategory={category} />
        </SidebarProvider>
      </Main>
    </HydrationBoundary>
  );
}
