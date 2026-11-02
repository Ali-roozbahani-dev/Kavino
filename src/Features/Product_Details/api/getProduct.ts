import { notFound } from "next/navigation";
import { getApiBaseUrl } from "@/shared/lib/getApiBaseUrl";
import { ProductDetails } from "@/entities/Product";
import { normalizeSlug } from "../util/normalizeSlug";


export async function getProduct(slug: string): Promise<ProductDetails> {
  const url = `${getApiBaseUrl()}/products/${normalizeSlug(slug)}`;
  const response = await fetch(url, { next: { revalidate: 60 } });

  if (response.status === 404) {
    notFound();
  }
  if (!response.ok) {
    throw new Error("Failed to fetch product");
  }
  return response.json();
}