import { api } from "@/shared/lib/axios_instance";
import { CreateAddressInput } from "../../schemas/AddressSchema";
import { AddressDetail } from "@/entities/Address";


export async function putAddress(id: number , data: CreateAddressInput): Promise<AddressDetail>{

    const res = await api.put<AddressDetail>(`/address/${id}/`, data); 

    return res.data;
}