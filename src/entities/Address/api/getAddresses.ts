import { api } from "@/api/axios_instance";
import { AddressList } from "../types/AddressList";


export async function getAddresses(): Promise<AddressList>{

    const res = await api.get<AddressList>("/address/"); 

    return res.data;
}