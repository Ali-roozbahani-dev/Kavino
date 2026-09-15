import { getHomeData } from "@/components/Features/Home/api/getHomeData";
import BrandSlider from "@/components/Features/Home/BrandSlider/BrandSlider";
import CategorySlider from "@/components/Features/Home/CategorySlider/CategorySlider";
import HeroSlider from "@/components/Features/Home/HeroSlider/HeroSlider";
import SpecialOffers from "@/components/Features/Home/SpecialOffers/SpecialOffers";
import FourBanner from "@/components/ui/Banners/FourBanner";
import TwinsBanner from "@/components/ui/Banners/TwinsBanner";

export default async function HomePage() {
  const {
    hero_slider,
    categories,
    brands,
    banner,
    discount_products,
  } = await getHomeData();

  const heroItems = hero_slider?.[0]?.items ?? [];
  const categoryItems = categories?.[0]?.items ?? [];
  const firstBannerItems = banner?.[0]?.items ?? [];
  const secondBannerItems = banner?.[1]?.items ?? [];
  const discountItems = discount_products?.[0]?.items ?? [];
  const brandItems = brands?.[0]?.items ?? [];

  return (
    <main className="mx-auto">
      {heroItems.length > 0 && <HeroSlider sliders={heroItems} />}

      {categoryItems.length > 0 && (
        <CategorySlider categories={categoryItems} />
      )}

      <div className="container-0 md:px-3">
        {firstBannerItems.length > 0 && (
          <TwinsBanner banners={firstBannerItems} />
        )}

        {discountItems.length > 0 && (
          <SpecialOffers products={discountItems} />
        )}

        {secondBannerItems.length > 0 && (
          <FourBanner banners={secondBannerItems} />
        )}

        {brandItems.length > 0 && (
          <BrandSlider brands={brandItems} />
        )}
      </div>
    </main>
  );
}
