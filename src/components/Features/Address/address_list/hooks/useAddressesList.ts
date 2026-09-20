import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import { getAddresses } from "../api/getAddresses";
import { addressQueryKeys } from "../../../../../entities/Address/addressQueryKeys";


export function useAddressesList() {
    return useInfiniteQuery({
        queryKey: addressQueryKeys.all,

        queryFn: ({pageParam})=> getAddresses(pageParam),

        initialPageParam : 1,

        getNextPageParam : (lastPage)=>{
            if(!lastPage.next) return undefined;

            const url = new URL(lastPage.next);
            return Number(url.searchParams.get("page"));
        } 
    });
}