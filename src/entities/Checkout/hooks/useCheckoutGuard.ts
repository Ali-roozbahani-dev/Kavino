"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useCart } from "@/entities/Cart/hooks/useCart";
import { useAuthGuard } from "@/entities/Auth/hooks/useAuthGuard";

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

  const [isCheckingPermission, setIsCheckingPermission] = useState(true);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    if (authLoading) return;

    // useAuthGuard خودش redirect به login را انجام می‌دهد
    if (!isAuthenticated) return;

    if (cartLoading || cart === undefined) return;

    if (cartError) {
      setHasError(true);
      setIsCheckingPermission(false);
      return;
    }

    const cartItems = cart.items ?? [];

    if (cartItems.length === 0) {
      router.replace("/checkout/cart");
      return;
    }

    setHasError(false);
    setIsCheckingPermission(false);
  }, [    
    authLoading,
    isAuthenticated,
    cartLoading,
    cart,
    cartError,
    router,
  ]);

  return {
    isCheckingPermission,
    hasError,
  };
}