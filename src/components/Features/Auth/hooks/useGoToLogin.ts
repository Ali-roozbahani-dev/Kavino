"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";

export function useGoToLogin() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const goToLogin = () => {
    const queryString = searchParams.toString();

    const currentUrl = queryString
      ? `${pathname}?${queryString}`
      : pathname;

    const loginUrl = `/Login?callbackUrl=${encodeURIComponent(currentUrl)}`;

    router.push(loginUrl);
  };

  return {
    goToLogin,
  };
}