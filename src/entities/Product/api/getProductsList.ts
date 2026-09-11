import { Tqueries } from "@/entities/Product/types/TproductSection";
import { TproductList } from "@/entities/Product/types";

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
    `http://127.0.0.1:8000/api/products?${searchParams.toString()}`,
    {
      next: {
        revalidate: 300,
      },
    },
  );

  if (!res.ok) {
    throw new Error("خطایی رخ داد.");
  }

  return res.json();
}
