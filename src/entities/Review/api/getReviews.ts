import { api } from "@/shared/lib/axios_instance";
import { ReviewsResponse } from "../types/review";

interface Params{
  pageParam: number ; 
  slug: string;  
}


export async function gethReviews({ pageParam , slug}: Params): Promise<ReviewsResponse> {  
  const response = await api.get<ReviewsResponse>(
    `/products/${slug}/reviews/`,
    {
      params: {
        pageParam,
      },
    }
  );

  return response.data;
}