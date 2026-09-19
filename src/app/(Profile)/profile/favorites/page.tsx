import FavoriteProductsList from "@/components/Features/Favorites/favorites_list/FavoriteProductsList";
import { SectionHeader } from "@/components/ui/Profile";
import { Heart } from "lucide-react";



export default function FavoritesPage() {



  return (
    <div className="space-y-4">
      
      <SectionHeader 
      title="علاقه مندی ها"
      Icon={Heart}
      iconWrapperClassName="bg-red-50 text-red-500"
      />
      

      <FavoriteProductsList />
    </div>
  );
}
