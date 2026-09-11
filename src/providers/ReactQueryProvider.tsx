"use client";

import { AuthSyncListener } from "@/entities/Auth/BroadcastChannel/AuthSyncListener";
import { CartSyncListener } from "@/entities/Cart/BroadcastChannel/CartSyncListener";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { useState } from "react";

export default function ReactQueryProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            staleTime: 1000 * 60,
            refetchOnWindowFocus: false,
          },
        },
      })
  );


  return (
    <QueryClientProvider client={queryClient}>
      <AuthSyncListener />
      <CartSyncListener />
      {children}
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}