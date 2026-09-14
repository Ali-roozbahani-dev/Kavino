"use client";

import { usePathname, useSearchParams } from "next/navigation";

export function useLoginUrl() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const queryString = searchParams.toString();

  const currentUrl = queryString
    ? `${pathname}?${queryString}`
    : pathname;

  const loginUrl = `/Login?callbackUrl=${encodeURIComponent(currentUrl)}`;

  return loginUrl;
}