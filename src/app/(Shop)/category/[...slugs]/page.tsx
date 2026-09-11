import { Tqueries } from "@/entities/Product/types/TproductSection";
import Main from "@/components/Layout/Main/Main";
import { SidebarProvider } from "@/components/ui/sidebar";
import { getSingleCategory } from "@/entities/Category/api/getSingleCategory";
import { getProductsList } from "@/entities/Product/api/getProductsList";
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { productQueryKey } from "@/entities/Product/utils/productQueries";
import ProductsSection from "@/components/Features/Products_List/ProductsSection";

type PageProps = {
  params: Promise<{
    slugs: string[];
  }>;
};

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slugs } = await params;
  const category = decodeURIComponent(slugs[slugs.length - 1]);

  return {
    title: `${category} | کاوه شاپ`,
    description: `خرید ${category} با بهترین قیمت`,
    openGraph: {
      title: "...",
      description: "...",
      images: [
        {
          url: "",
          width: 1200,
          height: 630,
        },
      ],
    },
  };
}

export default async function ProductListPage({ params }: PageProps) {
  const { slugs } = await params;
    
  const decodedSlug = decodeURIComponent([...slugs].reverse()[slugs.length - 1]);

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
