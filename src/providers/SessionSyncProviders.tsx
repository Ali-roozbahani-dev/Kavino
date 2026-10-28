import { AuthSyncListener } from "@/Features/Auth";
import { CartSessionSync, CartSyncListener } from "@/Features/Cart";
import { FavoritesSessionSync, FavoriteSyncListener } from "@/Features/Favorites";


export function SessionSyncProviders() {
  return (
    <>
      <AuthSyncListener />
      <CartSyncListener />
      <FavoriteSyncListener />
      <CartSessionSync />
      <FavoritesSessionSync />
    </>
  );
}