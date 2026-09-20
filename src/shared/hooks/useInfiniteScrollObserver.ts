"use client";
import { useEffect, useRef } from "react";

interface UseInfiniteScrollObserverProps {
  hasNextPage?: boolean;
  isFetchingNextPage: boolean;
  fetchNextPage: () => void;
  rootMargin?: string;
  enabled?: boolean;
}

export function useInfiniteScrollObserver({
  hasNextPage,
  isFetchingNextPage,
  fetchNextPage,
  rootMargin = "50px",
  enabled = true,
}: UseInfiniteScrollObserverProps) {
  const sentinel = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!enabled) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting && hasNextPage && !isFetchingNextPage) {
          fetchNextPage();
        }
      },
      { root: null, rootMargin },
    );

    const el = sentinel.current;
    if (el) observer.observe(el);
    return () => observer.disconnect();
  }, [fetchNextPage, hasNextPage, isFetchingNextPage, rootMargin, enabled]);

  return sentinel;
}