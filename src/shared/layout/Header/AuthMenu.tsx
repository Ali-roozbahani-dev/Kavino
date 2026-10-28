"use client";

import { useEffect, useState } from "react";
import { useMe } from "@/Features/Auth/hooks/useMe";
import LoginLink from "./LoginLink";
import UserMenu from "./UserMenu/UserMenu";
import { Skeleton } from "@/ui/skeleton";

export default function AuthMenu() {
  const [mounted, setMounted] = useState(false);
  const { data: user, isPending } = useMe();

  useEffect(() => {
    // Required to prevent hydration mismatch.
    // eslint-disable-next-line 
    setMounted(true);
  }, []);

  // برای یکسان سازی رندر اولیه کلاینت با رندر سمت سرور
  if (!mounted || isPending) return <Skeleton className="h-full w-[99px] rounded-md" />;

  if (!user) return <LoginLink />;
  return <UserMenu />;
}
