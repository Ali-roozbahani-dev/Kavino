"use client";

import { Bookmark } from "lucide-react";

interface FavoriteToggleProps {
  productId: number;
}

export default function FavoriteToggle({ productId }: FavoriteToggleProps) {
  productId
  // const { data: favoriteIds } = useFavorites();
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