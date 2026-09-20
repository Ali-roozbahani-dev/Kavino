"use client"

import EmptyFavorites from "@/components/ui/Profile/favorites/EmptyFavorites";
import { useFavorites } from "./hooks/useFavorites"
import { ProductsPageCard } from "@/components/ui/Product";
import { useInfiniteScrollObserver } from "@/shared/hooks/useInfiniteScrollObserver";
import SectionLoadingDots from "@/components/ui/Loading/SectionLoadingDots";

export default function FavoriteProductsList(){
    const {
    data , 
    hasNextPage,
    fetchNextPage,
    isFetchingNextPage,    
    isPending , 
    error} = useFavorites();   
     
    const sentiel = useInfiniteScrollObserver({fetchNextPage , isFetchingNextPage , hasNextPage})


    if(isPending) return <SectionLoadingDots containerClass="h-20"/>;    
    if(error) throw new Error("خطا در اتصال");

    const favoritesList = data.pages.flatMap((page)=> page.results);

    if(favoritesList.length <= 0) return <EmptyFavorites />


    return (
        <section className="rounded-2xl border bg-white p-4 shadow-sm sm:p-5">

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
            {favoritesList.map((product)=>(
                <ProductsPageCard 
                key={product.id}
                product={product}
                />
            ))}            
            
          </div>

          <div ref={sentiel} className="h-px"></div>

          {isFetchingNextPage &&
          <SectionLoadingDots containerClass="h-20"/>
          }
        </section>
    )
}