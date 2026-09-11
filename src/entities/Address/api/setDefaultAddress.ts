import { api } from "@/api/axios_instance";
import { AddressDetail } from "../types/AddressDetail";


export async function setDefaultAddress(id: number): Promise<AddressDetail>{

    const res = await api.post<AddressDetail>(`/address/${id}/set_default/`); 

    return res.data;
}