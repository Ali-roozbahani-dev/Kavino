import { notFound } from "next/navigation";
import { ProductDetails } from "../types/ProductDetails";
import { getApiBaseUrl } from "@/shared/lib/getApiBaseUrl";


export async function getProduct(slug: string): Promise<ProductDetails> {
  const response = await fetch(
    `${getApiBaseUrl()}/products/${slug}`,
    {
      cache: "no-store"
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