import { ReviewsResponse } from "@/entities/Review";
import { api } from "@/shared/lib/axios_instance";


export const getUserReviews = async (
  page = 1
): Promise<ReviewsResponse> => {
  const { data } = await api.get("/review/me/", {
    params: {
      page,
    },
  });

  return data;
};