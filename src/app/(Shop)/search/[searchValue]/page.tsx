import { Tqueries } from "@/Features/Products/Filter/types/TproductSection";
import Main from "@/ui/Main";
import { SidebarProvider } from "@/ui/sidebar";
import { getProductsList } from "@/Features/Products/Products_List/api/getProductsList";
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import { Metadata } from "next";
import { productQueryKey } from "@/Features/Products/util/productQueries";
import ProductsSection from "@/Features/Products/Products_List/ProductsSection";

type PageProps = {
  params: Promise<{
    searchValue: string;
  }>;
};

export async function generateMetadata(): Promise<Metadata> {

  return {
    title: `جستوجوی محصولات |  کاوه شاپ`,
    description: `خرید با بهترین قیمت`,
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

export default async function SearchResultPage({ params }: PageProps) {
  const { searchValue } = await params;
  const search = decodeURIComponent(searchValue);

  const initialQueries: Omit<Tqueries, "page"> = {
    search,
    ordering: undefined,
    brand: undefined,
    category: undefined,
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
          <ProductsSection searchValue={search} />
        </SidebarProvider>
      </Main>
    </HydrationBoundary>
  );
}
