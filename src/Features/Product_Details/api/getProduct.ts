import { notFound } from "next/navigation";
import { getApiBaseUrl } from "@/shared/lib/getApiBaseUrl";
import { ProductDetails } from "@/entities/Product";


export async function getProduct(slug: string): Promise<ProductDetails> {
  const response = await fetch(
    `${getApiBaseUrl()}/products/${slug}`,
    {
      next: {
        revalidate: 60
      }
    }
  );

  if (response.status === 404) {
    notFound();
  }

  if (!response.ok) {
    throw new Error("Failed to fetch product");
  }

  return response.json();
}