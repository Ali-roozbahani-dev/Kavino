import { useQuery } from "@tanstack/react-query";
import { getAddresses } from "../api/getAddresses";
import { addressQueryKeys } from "../addressQueryKeys";


export function useAddresses() {
    return useQuery({
        queryKey: addressQueryKeys.all,
        queryFn: getAddresses,
    });
}