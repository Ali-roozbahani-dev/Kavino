import { api } from "@/api/axios_instance";
import { Province } from "../types/locations";


export async function getProvinces(): Promise<Province[]> {  
  const res = await api.get<Province[]>('/address/provinces/')

  return res.data;
}