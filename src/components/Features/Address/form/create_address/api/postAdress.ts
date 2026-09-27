import { api } from "@/shared/lib/axios_instance";
import { CreateAddressInput } from "../../schemas/AddressSchema";
import { AddressDetail } from "@/entities/Address";


export async function postAddress(data: CreateAddressInput): Promise<AddressDetail>{

    const res = await api.post<AddressDetail>(`/address/`, data); 

    return res.data;
}