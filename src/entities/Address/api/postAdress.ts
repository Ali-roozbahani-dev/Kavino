import { api } from "@/api/axios_instance";
import { AddressDetail } from "../types/AddressDetail";
import { CreateAddressInput } from "../schemas/AddressSchema";


export async function postAddress(data: CreateAddressInput): Promise<AddressDetail>{

    const res = await api.post<AddressDetail>(`/address/`, data); 

    return res.data;
}