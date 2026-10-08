"use client";

import { Bookmark } from "lucide-react";
import { useAuth } from "../../Auth";
import { usePathname, useRouter } from "next/navigation";
import { useFavoritesId } from "./hooks/useFavoritesId";
import { useAddFavorite } from "./hooks/useAddFavorite";
import { useDeleteFavorite } from "./hooks/useDeleteFavorite";
import { toast } from "sonner";
import { useEffect } from "react";

interface FavoriteToggleProps {
  id: number;
}

export default function FavoriteToggle({
  id,
}: FavoriteToggleProps) {
  const router = useRouter();
  
  const pathName = usePathname();

  const { data: user, isPending: authPending , error: authError } = useAuth();
  const { data: favorites, isPending: favPending , error: favError } = useFavoritesId({ enabled: !!user });
  const { mutate: add, isPending: isAdding } = useAddFavorite();
  const { mutate: remove, isPending: isRemoving } = useDeleteFavorite();

  const favoriteItem = favorites?.find((i) => i.product_id === id || i.id === id);
  const isLoading = authPending || (!!user && favPending);

  
  useEffect(() => {
    if (authError || favError) toast.error("خطا در برقراری ارتباط");
  }, [authError, favError]);

  const handleClick = () => {
    if (!user) return router.push(`/Login?callbackUrl=${encodeURIComponent(pathName)}`);
    if (favoriteItem) remove(favoriteItem.id);
    else add({ product_id: id });
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      disabled={isLoading || !!favError || isAdding || isRemoving || !!authError}    
      aria-pressed={!!favoriteItem}
      className="me-4"
    >
      <Bookmark className={`size-5.5 md:size-6.5 ${favoriteItem ? "fill-theme text-theme" : "text-primary-text"}`} />
    </button>
  );
}