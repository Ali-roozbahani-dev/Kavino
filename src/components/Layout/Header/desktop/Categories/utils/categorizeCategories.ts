import { CategoryListItem } from "@/entities/Category/types/Category";

export type TCategoriesGroup = {
  parents: CategoryListItem[];
  children: CategoryListItem[];
};

export function categorizeCategories(
  categories: CategoryListItem[],
): TCategoriesGroup {
  const parents = categories.filter((cat) => cat.path.length === 1);

  const children = categories.filter((cat) => cat.path.length > 1);

  return {
    parents,
    children,
  };
}
