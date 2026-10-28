import { AddressDetail } from "@/entities/Address";
import { api } from "@/shared/lib/axios_instance";


export async function getAddressDetails(id: number): Promise<AddressDetail>{

    const res = await api.get<AddressDetail>(`/address/${id}`); 

    return res.data;
}