import { CategoryListItem } from "../models/Category.types";
import { getApiBaseUrl } from "@/shared/lib/getApiBaseUrl";

export const getAllCategories = async (): Promise<CategoryListItem[]> => {
  const res = await fetch(`${getApiBaseUrl()}/categories/`, {
    next: {
      revalidate: 3600,
    },
  });

  if (!res.ok) {
    throw new Error("خطایی رخ داد.");
  }

  return res.json();
};
