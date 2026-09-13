import { ProductDetails } from "../types/ProductDetails";
import { getApiBaseUrl } from "@/shared/lib/getApiBaseUrl";


export async function getProduct(slug: string): Promise<ProductDetails> {
  const response = await fetch(
    `${getApiBaseUrl()}/products/${slug}`,
    {
      next: {
        revalidate: 60,
      },
    }
  );

  if (!response.ok) {
    throw new Error("Failed to fetch product");
  }

  return response.json();
}