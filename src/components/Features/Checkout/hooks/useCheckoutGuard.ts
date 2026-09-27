"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useCart } from "@/entities/Cart/hooks/useCart";
import { useAuthGuard } from "@/components/Features/Auth/hooks/useAuthGuard";

export function useCheckoutGuard() {
  const router = useRouter();

  const {
    data: cart,
    isLoading: cartLoading,
    isError: cartError,
  } = useCart();

  const {
    isLoading: authLoading,
    isAuthenticated,
  } = useAuthGuard();

  const isCheckingPermission =
    authLoading ||
    !isAuthenticated ||
    cartLoading ||
    cart === undefined;

  useEffect(() => {
    if (isCheckingPermission) return;

    if (cartError) return;

    const cartItems = cart.items ?? [];

    if (cartItems.length === 0) {
      router.replace("/checkout/cart");
    }
  }, [
    isCheckingPermission,
    cartError,
    cart,
    router,
  ]);

  return {
    isCheckingPermission,
    hasError: cartError,
  };
}