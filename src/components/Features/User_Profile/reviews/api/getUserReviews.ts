import { ReviewsResponse } from "@/entities/Review";
import { api } from "@/shared/lib/axios_instance";


export const getUserReviews = async (
  page = 1
): Promise<ReviewsResponse> => {
  const { data } = await api.get("/user/reviews/", {
    params: {
      page,
    },
  });

  return data;
};