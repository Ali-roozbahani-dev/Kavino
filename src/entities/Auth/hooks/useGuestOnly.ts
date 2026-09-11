// این هوک برای ریدایرکت کاربر احراز هویت شده پیاده سازی شده 
"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/entities/Auth/hooks/useAuth";


interface UseGuestOnlyOptions {
  redirectTo?: string;
}

export function useGuestOnly({ redirectTo = "/" }: UseGuestOnlyOptions = {}) {
  const router = useRouter();
  const { data: user, isPending, isSuccess } = useAuth();

  useEffect(() => {
    if (isSuccess && user) {
      router.replace(redirectTo);
    }
  }, [isSuccess, user, redirectTo, router]);

  return {
    isPending,
    isCheckingAuth: isPending || (isSuccess && !!user),
  };
}