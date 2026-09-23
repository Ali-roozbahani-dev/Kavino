import { ReviewQueryKeys } from "@/entities/Review";
import { infiniteQueryOptions, useInfiniteQuery } from "@tanstack/react-query";
import { getUserReviews } from "../api/getUserReviews";

export function useUserReviews() {
  const query = useInfiniteQuery(
    infiniteQueryOptions({
      queryKey: ReviewQueryKeys.user(),

      queryFn: ({ pageParam }) => getUserReviews(pageParam),

      initialPageParam: 1,

      getNextPageParam: (lastPage) => {
        if (!lastPage.next) return undefined;

        const url = new URL(lastPage.next);
        return Number(url.searchParams.get("page"));
      },
    })
  );

  return query;
}