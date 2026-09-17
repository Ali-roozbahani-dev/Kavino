import { CategoryListItem } from "../types/Category";
import { getApiBaseUrl } from "@/shared/lib/getApiBaseUrl";

export const getSingleCategory = async (
  slug: string,
): Promise<CategoryListItem | null> => {
  const res = await fetch(`${getApiBaseUrl()}/categories/${slug}/`, {
    next: {
      revalidate: 3600,
    },
  });
  
  if(res.status === 404) return null;

  if (!res.ok) {
    throw new Error("خطایی رخ داد.");
  }

  return res.json();
};
