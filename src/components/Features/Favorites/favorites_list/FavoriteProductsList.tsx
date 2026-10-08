"use client"

import EmptyFavorites from "@/components/ui/Profile/favorites/EmptyFavorites";
import { useFavorites } from "./hooks/useFavorites"
import { useInfiniteScrollObserver } from "@/shared/hooks/useInfiniteScrollObserver";
import SectionLoadingDots from "@/components/ui/Loading/SectionLoadingDots";
import FavoriteItemCard from "@/components/ui/Product/Cards/FavoriteItemCard";

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

    const favoritesList = data.pages.flatMap((page)=> page.results) ?? [];

    if(favoritesList.length <= 0) return <EmptyFavorites />


    return (
        <section className="rounded-2xl bg-white p-4 sm:p-5">

          <div className="grid grid-cols-1 gap-4 md:grid-cols-3 xl:grid-cols-4">
            {favoritesList.map((product)=>(
                <FavoriteItemCard 
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