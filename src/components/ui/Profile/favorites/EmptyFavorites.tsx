import { Heart } from "lucide-react";
import { Button } from "../../button";


export default function EmptyFavorites(){

    return (
        
        <section className="flex min-h-[400px] flex-col items-center justify-center rounded-2xl border bg-white px-5 text-center shadow-sm">
          <div className="flex h-20 w-20 items-center justify-center rounded-full bg-red-50 text-red-400">
            <Heart className="h-9 w-9" />
          </div>

          <h2 className="mt-5 text-lg font-bold">
            هنوز محصولی به علاقه‌مندی‌ها اضافه نکرده‌اید
          </h2>

          <p className="mt-2 max-w-md text-sm leading-6 text-muted-foreground">
            محصولاتی که دوست دارید را به علاقه‌مندی‌ها اضافه کنید تا
            بعداً راحت‌تر به آن‌ها دسترسی داشته باشید.
          </p>

          <Button
            variant={"Blue3"}
            type="button"
            className="mt-6 h-11 rounded-md"
          >
            مشاهده محصولات
          </Button>
        </section>
    )
}