import { useInfiniteQuery } from "@tanstack/react-query";
import axios from "axios";
import { ReviewsResponse } from "../types/review";

interface Params{
  pageParam: number ; 
  slug: string;  
}


async function fetchReviews({ pageParam , slug}: Params): Promise<ReviewsResponse> {  
  const response = await axios.get<ReviewsResponse>(
    `${process.env.NEXT_PUBLIC_API_URL}/api/products/${slug}/reviews/`,
    {
      params: {
        pageParam,
      },
    }
  );

  return response.data;
}

export function useGetReviews(slug: string) {
  return useInfiniteQuery({
    queryKey: ["reviews", slug],

    queryFn: ({ pageParam }) =>
      fetchReviews({
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