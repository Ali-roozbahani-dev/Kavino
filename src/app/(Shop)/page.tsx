import { getHomeData } from "@/components/Features/Home/api/getHomeData";
import BrandSlider from "@/components/Features/Home/BrandSlider/BrandSlider";
import CategorySlider from "@/components/Features/Home/CategorySlider/CategorySlider";
import HeroSlider from "@/components/Features/Home/HeroSlider/HeroSlider";
import SpecialOffers from "@/components/Features/Home/SpecialOffers/SpecialOffers";
import Main from "@/components/Layout/Main/Main";
import FourBanner from "@/components/ui/Banners/FourBanner";
import TwinsBanner from "@/components/ui/Banners/TwinsBanner";




export default async function HomePage() {
  const {
    hero_slider , 
    categories, 
    brands, 
    banner, 
    discount_products} = await getHomeData();
  
  

  
  return (   
    <main className="mx-auto">
    <HeroSlider sliders={hero_slider[0].items}/>
    <CategorySlider categories={categories[0].items}/>
    <div className="container-0 md:px-3">    

      <TwinsBanner banners={banner[0].items}/>

      {discount_products[0].items.length > 0 &&
      <SpecialOffers products={discount_products[0].items}/> 
      }

      <FourBanner banners={banner[1].items}/>

      <BrandSlider brands={brands[0].items}/>          
    </div> 

    </main>            
  );
}
