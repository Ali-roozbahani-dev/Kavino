import { ApiPaginatedResponse } from "@/shared/types/ApiPaginatedResponse";

export interface OrderListItem {
  id: number;
  order_number: string;
  status: "pending" | "paid" | "cancelled";
  status_display: string;
  total_amount: string;
  items_count: number;
  created_at: string;
}


export interface OrdersList extends ApiPaginatedResponse{
    results: OrderListItem[];    
}