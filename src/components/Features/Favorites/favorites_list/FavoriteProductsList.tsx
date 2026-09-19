"use client"

import EmptyFavorites from "@/components/ui/Profile/favorites/EmptyFavorites";
import { useFavorites } from "./hooks/useFavorites"
import { ProductsPageCard } from "@/components/ui/Product";

export default function FavoriteProductsList(){
    const {data: favoritesList , isPending , error} = useFavorites();


    if(isPending) return <div>loading...</div>;    
    if(error) throw new Error("خطا در اتصال");

    if(favoritesList.results.length <= 0) return <EmptyFavorites />


    return (
        <section className="rounded-2xl border bg-white p-4 shadow-sm sm:p-5">

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
            {favoritesList.results.map((product)=>(
                <ProductsPageCard 
                key={product.id}
                product={product}
                />
            ))}            
            
          </div>
        </section>
    )
}