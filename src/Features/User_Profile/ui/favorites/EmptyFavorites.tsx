import { Heart } from "lucide-react";


export default function EmptyFavorites(){

    return (
        
        <section className="flex min-h-[300px] flex-col items-center justify-center rounded-2xl 
        md:border bg-white px-0 md:px-5 text-center md:shadow-sm">
          <div className="flex h-15 w-15 md:h-17 md:w-17 items-center justify-center rounded-full bg-red-50 text-red-400">
            <Heart className="size-6 md:size-7" />
          </div>

          <h2 className="mt-5 text-[15px] md:text-lg font-bold">
            هنوز محصولی به علاقه‌مندی‌ها اضافه نکرده‌اید
          </h2>         
        </section>
    )
}