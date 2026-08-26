import { api } from "@/api/axios_instance";
import { User } from "@/entities/User/types/User";
import { isAxiosError } from "axios";


export async function getMe(): Promise<User | null> {
  try {
    const res = await api.get<User>("/user/me/");
    return res.data;
  } catch (error) {
    if (isAxiosError(error) && error.response?.status === 401) {
      return null; // کاربر لاگین نیست 
    }
    throw error; // خطای ارتباطی
  }
}