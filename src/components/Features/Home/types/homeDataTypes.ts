import { CategoryListItem } from "@/entities/Category/types/Category";
import { Brand, ProductListItem } from "@/entities/Product";


interface PublicItems {
  title: string;
  layout: string;
}

export interface HeroSliderItem {
  id: number;
  title: string;
  subtitle: string;
  desktop_image: string;
  mobile_image: string;
  button_text: string;
  button_url: string;
}

export interface GridBannerItem extends Omit<
  HeroSliderItem,
  "subtitle" | "button_text" | "button_url"
> {
  url: string;
}

export interface CategorySliderItem extends CategoryListItem {
  image: string;
}

export interface HeroSlider extends PublicItems {
  items: HeroSliderItem[];
}

export interface CategorySlider extends PublicItems {
  items: CategorySliderItem[];
}

export interface BrandSlider extends PublicItems {
  items: Brand[];
}

export interface GridBanner extends PublicItems {
  items: GridBannerItem[];
}

export interface DiscountProducts extends PublicItems {
  items: ProductListItem[];
}

export interface HomeData {
  hero_slider: HeroSlider[];
  categories: CategorySlider[];
  brands: BrandSlider[];
  banner: GridBanner[];
  discount_products: DiscountProducts[];
}
