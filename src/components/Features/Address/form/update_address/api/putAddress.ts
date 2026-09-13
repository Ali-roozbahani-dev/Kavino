import { api } from "@/shared/lib/axios_instance";
import { AddressDetail } from "../../../../../../entities/Address/types/AddressDetail";
import { CreateAddressInput } from "../../schemas/AddressSchema";


export async function putAddress(id: number , data: CreateAddressInput): Promise<AddressDetail>{

    const res = await api.put<AddressDetail>(`/address/${id}/`, data); 

    return res.data;
}