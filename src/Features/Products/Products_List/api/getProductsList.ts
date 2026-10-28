import { TproductList } from "@/entities/Product";
import { Tqueries } from "@/Features/Products/Filter/types/TproductSection";
import { getApiBaseUrl } from "@/shared/lib/getApiBaseUrl";

export async function getProductsList(
  queries: Partial<Tqueries>,
): Promise<TproductList> {
  const searchParams = new URLSearchParams();

  Object.entries({
    ...queries,
    page_size: 8,
  }).forEach(([key, value]) => {
    if (value !== undefined && value !== null && value !== "") {
      searchParams.append(key, String(value));
    }
  });
  

  const res = await fetch(
    `${getApiBaseUrl()}/products?${searchParams.toString()}`,
    {
      next: {
        revalidate: 60
      }
    },
  );

  if (!res.ok) {
    throw new Error("خطایی رخ داد.");
  }

  return res.json();
}
