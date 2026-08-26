import { useQuery } from "@tanstack/react-query";
import { getMe } from "../api/getMe";
import { authQueryKeys } from "../authQueryKeys";



export function useAuth(){
    return useQuery({
        queryKey: authQueryKeys.me,
        queryFn: getMe,  
        staleTime: 0,      
        gcTime: Infinity,                       
    })
}