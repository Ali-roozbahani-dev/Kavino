import { HomeData } from "../types/homeDataTypes";
import { getApiBaseUrl } from "@/shared/lib/getApiBaseUrl";

export const getHomeData = async (): Promise<HomeData>=>{
    const res = await fetch(`${getApiBaseUrl()}/home/`,{
        next: {
            revalidate: 60 * 60 * 2
        }
    });

    if (!res.ok) {
        throw new Error("خطایی رخ داد.");
    }

    

    return res.json();
}

