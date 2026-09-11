export interface Province {
  id: number;
  name: string;
}

export interface City {
  id: number;
  name: string;
  province: Province;
}

export type AddressType = "home" | "work" | "other";


export interface AddressDetail {
  id: number;
  title: string;
  address_type: AddressType;
  receiver_name: string;
  receiver_phone: string;
  province: Province;
  city: City;
  address_line: string;
  alley: string;
  plaque: string;
  unit: string;
  postal_code: string;
  description: string;
  latitude: string;
  longitude: string;
  is_default: boolean;
  created_at: string;
  updated_at: string;
}