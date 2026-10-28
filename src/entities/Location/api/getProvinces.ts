import { api } from "@/shared/lib/axios_instance";
import { Province } from "../models/locations.types";


export async function getProvinces(): Promise<Province[]> {  
  const res = await api.get<Province[]>('/address/provinces/')

  return res.data;
}