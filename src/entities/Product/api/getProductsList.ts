import { Tqueries } from "@/entities/Product/types/TproductSection";
import { TproductList } from "@/entities/Product/types";
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
      cache: "no-store"
    },
  );

  if (!res.ok) {
    throw new Error("خطایی رخ داد.");
  }

  return res.json();
}
