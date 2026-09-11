import { ApiPaginatedResponse } from "@/types/ApiPaginatedResponse";

export interface AddressListItem {
  id: number;
  title: string;
  receiver_name: string;
  receiver_phone: string;
  province: string;
  city: string;
  address_line: string;
  is_default: boolean;
}

export interface AddressList extends ApiPaginatedResponse {  
  results: AddressListItem[];
}