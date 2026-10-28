// این هوک برای ریدایرکت کاربر احراز هویت شده پیاده سازی شده 
"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useMe } from "@/Features/Auth/hooks/useMe";


interface UseGuestOnlyOptions {
  redirectTo?: string;
}

export function useGuestOnly({ redirectTo = "/" }: UseGuestOnlyOptions = {}) {
  const router = useRouter();
  const { data: user, isPending, isSuccess } = useMe();

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