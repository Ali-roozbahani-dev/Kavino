"use client";

import { useEffect, useState } from "react";
import { useAuth } from "@/components/Features/Auth/hooks/useAuth";
import LoginLink from "./LoginLink";
import UserMenu from "./UserMenu/UserMenu";
import { Skeleton } from "@/components/ui/skeleton";

export default function AuthMenu() {
  const [mounted, setMounted] = useState(false);
  const { data: user, isPending } = useAuth();

  useEffect(() => {
    setMounted(true);
  }, []);

  // برای یکسان سازی رندر اولیه کلاینت با رندر سمت سرور
  if (!mounted || isPending) return <Skeleton className="h-full w-[99px] rounded-md" />;

  if (!user) return <LoginLink />;
  return <UserMenu />;
}
