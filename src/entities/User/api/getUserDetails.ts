import { api } from "@/shared/lib/axios_instance";
import { UserDetails } from "..";


export async function getUserDetails(Phone_number: string): Promise<UserDetails> {

    const res = await api.get<UserDetails>(`/user/${Phone_number}/`);

    return res.data;    
}