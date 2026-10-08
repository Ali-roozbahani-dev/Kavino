import FavoriteProductsList from "@/components/Features/Favorites/favorites_list/FavoriteProductsList";
import { PageTitle } from "@/components/ui/Profile";
import { Heart } from "lucide-react";



export default function FavoritesPage() {



  return (
    <div className="space-y-4">


      <PageTitle>
        <div className="bg-white py-5 lg:p-5">
            <div className="flex items-center gap-4">
              <div
                className={"hidden lg:flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-red-50 text-red-500"}
              >
                <Heart />
              </div>
      
              <div>
                <h1 className="text-xl font-bold">علاقه مندی ها</h1>
              </div>
            </div>
          </div>        
      </PageTitle>
      

      <FavoriteProductsList />
    </div>
  );
}
