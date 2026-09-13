import { api } from "@/shared/lib/axios_instance";
import { AddressDetail } from "@/entities/Address/types/AddressDetail";


export async function setDefaultAddress(id: number): Promise<AddressDetail>{

    const res = await api.post<AddressDetail>(`/address/${id}/set_default/`); 

    return res.data;
}