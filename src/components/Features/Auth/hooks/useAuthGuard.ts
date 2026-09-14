// این هوک جهت اعمال روت پروتکشن سمت کلاینت پیاده سازی شده 
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "./useAuth";

interface UseAuthGuardOptions {
  redirectTo?: string;
}

export function useAuthGuard({ redirectTo = "/Login" }: UseAuthGuardOptions = {}) {
  const router = useRouter();
  const { data: user, isLoading: authLoading } = useAuth();

  const isAuthenticated = !authLoading && Boolean(user);
  const shouldRedirect = !authLoading && !user;

  useEffect(() => {
    if (shouldRedirect) {
      router.replace(redirectTo);
    }
  }, [shouldRedirect, redirectTo, router]);

  return {
    isLoading: authLoading,
    isAuthenticated
  };
}