import { UserDetails } from "@/entities/User";
import { api } from "@/shared/lib/axios_instance";
import { isAxiosError } from "axios";


export async function getMe(): Promise<UserDetails | null> {
  try {
    const res = await api.get<UserDetails>("/user/me/");
    return res.data;
  } catch (error) {
    if (isAxiosError(error) && error.response?.status === 401) {
      return null; // کاربر لاگین نیست 
    }
    throw error; // خطای ارتباطی
  }
}