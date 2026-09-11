import { api } from "@/api/axios_instance";
import { AddressDetail } from "../types/AddressDetail";


export async function getAddressDetails(id: number): Promise<AddressDetail>{

    const res = await api.get<AddressDetail>(`/address/${id}`); 

    return res.data;
}