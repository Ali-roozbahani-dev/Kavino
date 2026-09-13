"use client";

import { Bookmark } from "lucide-react";
import { useAddFavorite } from "../add_to_favorite/hooks/useAddToFavorite";
import { useDeleteFavorite } from "../remove_from_favorite/hooks/useDeleteFavorite";

interface FavoriteToggleProps {
  productId: number;
}

export default function FavoriteToggle({ productId }: FavoriteToggleProps) {
  // const { data: favoriteIds } = useGetFavorites();
  // const isFavorite = favoriteIds?.includes(productId) ?? false;

  // const { mutate: addToFavorite, isPending: isAdding } = useAddFavorite();
  // const { mutate: deleteFavorite, isPending: isRemoving } = useDeleteFavorite();

  // const handleClick = () => {
  //   if (isFavorite) {
  //     deleteFavorite(productId);
  //   } else {
  //     addToFavorite({ product_id: productId });
  //   }
  // };

  return (
    <button
      // onClick={handleClick}
      // disabled={isAdding || isRemoving}
      className="me-4"
    >
      <Bookmark
        className={`size-5.5 md:size-6.5 ${
          false ? "fill-theme text-theme" : ""
        }`}
      />
    </button>
  );
}