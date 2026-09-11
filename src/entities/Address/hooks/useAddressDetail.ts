import { useQuery } from "@tanstack/react-query";
import { addressQueryKeys } from "../addressQueryKeys";
import { getAddressDetails } from "../api/getAddressDetails";

export function useAddressDetail(id?: number) {
  return useQuery({
    queryKey: addressQueryKeys.detail(id),
    queryFn: () => getAddressDetails(id!),
    enabled: !!id,
  });
}