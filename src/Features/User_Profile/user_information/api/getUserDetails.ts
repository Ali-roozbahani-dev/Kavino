import { UserDetails } from "@/entities/User";
import { api } from "@/shared/lib/axios_instance";


export async function getUserDetails(Phone_number: string): Promise<UserDetails> {

    const res = await api.get<UserDetails>(`/user/${Phone_number}/`);

    return res.data;    
}