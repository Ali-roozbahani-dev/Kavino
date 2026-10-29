import { CategoryListItem } from "../models/Category.types";
import { getApiBaseUrl } from "@/shared/lib/getApiBaseUrl";

export const getAllCategories = async (): Promise<CategoryListItem[]> => {
  const res = await fetch(`${getApiBaseUrl()}/categories/`, {
    next: {
      revalidate: 3600,
    },
    // اگر بک‌اند کند بود، رندر هدر (و کل صفحه) را معطل نکن
    signal: AbortSignal.timeout(3000),
  });

  if (!res.ok) {
    throw new Error("خطایی رخ داد.");
  }

  return res.json();
};
