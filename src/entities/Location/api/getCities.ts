import { api } from "@/api/axios_instance";
import { City} from "../types/locations";


export async function getCities(): Promise<City[]> {  
  const res = await api.get<City[]>('/address/cities/')

  return res.data;
}