import { ApiPaginatedResponse } from "@/types/ApiPaginatedResponse";

export interface Review {
  id: number;
  user: string;
  rating: number;
  comment: string;
  created_at: string;
}

export interface ReviewsResponse extends ApiPaginatedResponse{
  results: Review[];
}