"use client";

import { Bookmark } from "lucide-react";
import { useAuth } from "../../Auth";
import { usePathname, useRouter } from "next/navigation";
import { useFavoritesId } from "./hooks/useFavoritesId";
import { useAddFavorite } from "./hooks/useAddToFavorite";
import { useDeleteFavorite } from "./hooks/useDeleteFavorite";

interface FavoriteToggleProps {
  productId: number;
}

export default function FavoriteToggle({
  productId,
}: FavoriteToggleProps) {
  const router = useRouter();
  
  const pathName = usePathname();

  const { data, isPending: favoritesPending, error: favoritesError } = useFavoritesId();

  const { mutate: addToFavorite, isPending: isAdding } = useAddFavorite();

  const { mutate: deleteFavorite, isPending: isRemoving } = useDeleteFavorite();

  const { data: user, isPending: authPending , error: authError} = useAuth();

  const isFavorite = data?.ids.includes(productId) ?? false;

  
  if (favoritesPending || authPending) return null;

  if (favoritesError || authError) {
    throw new Error("خطا در برقراری ارتباط");
  }

  const handleClick = () => {
  if (!user) {
    router.push(`/Login?callbackUrl=${pathName}`);
    return;
  }

  if (isFavorite) {
    deleteFavorite(productId);
  } else {
    addToFavorite({ product_id: productId });
  }
};

  return (
    <button
      onClick={handleClick}
      disabled={isAdding || isRemoving}
      className="me-4"
    >
      <Bookmark
        className={`size-5.5 md:size-6.5 ${
          isFavorite ? "fill-theme text-theme" : ""
        }`}
      />
    </button>
  );
}