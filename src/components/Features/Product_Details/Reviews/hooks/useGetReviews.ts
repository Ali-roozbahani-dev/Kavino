import { useInfiniteQuery } from "@tanstack/react-query";
import { gethReviews } from "../api/getReviews";




export function useGetReviews(slug: string) {
  return useInfiniteQuery({
    queryKey: ["reviews", slug],

    queryFn: ({ pageParam }) =>
      gethReviews({
        pageParam,
        slug,
      }),

    initialPageParam: 1,

    getNextPageParam: (lastPage) => {
      if (!lastPage.next) return undefined;

      const url = new URL(lastPage.next);

      return Number(url.searchParams.get("page"));
    },
    staleTime: Infinity,
  });
}