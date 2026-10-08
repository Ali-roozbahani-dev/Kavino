import { useQuery } from "@tanstack/react-query";
import { getUserDetails } from "../api/getUserDetails";
import { user_query_keys } from "../user_query_keys";

export const useUserDetails = (Phone_number: string)=>(
    useQuery({
        queryKey: user_query_keys.details(),
        queryFn: ()=> getUserDetails(Phone_number),
    })
)