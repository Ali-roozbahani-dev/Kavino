

export interface CategoryListItem {
  id: number;
  name: string;
  slug: string;
  path: CategoryPath[];
}

export interface CategoryPath {
  name: string;
  slug: string;  
}

export interface SingleCategory extends Omit<CategoryListItem, "path"> {
  path: CategoryPath[];
}
