import { useQuery } from "@tanstack/react-query";
import { getMe } from "../api/getMe";
import { authQueryKeys } from "../authQueryKeys";



export function useAuth(){
    return useQuery({
        queryKey: authQueryKeys.me,
        queryFn: getMe,  
        staleTime: 1000 * 60 * 5,      
        gcTime: Infinity,   
        retry: false,          
        refetchOnWindowFocus: false,                          
    })
}