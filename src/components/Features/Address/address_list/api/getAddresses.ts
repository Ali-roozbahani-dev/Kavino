import { api } from "@/shared/lib/axios_instance";
import { AddressList } from "../../../../../entities/Address/types/AddressList";


export async function getAddresses(page : number): Promise<AddressList>{

    const res = await api.get<AddressList>(`/address?page=${page}`); 

    return res.data;
}