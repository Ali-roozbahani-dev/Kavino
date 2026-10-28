import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateCheckout } from "../api/updateCheckout";
import { PostCheckoutRequest } from "../types/PostCheckoutRequest.types";
import { toast } from "sonner";

export function useUpdateCheckout() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: PostCheckoutRequest) => updateCheckout(data),

    onSuccess: (data) => {
      queryClient.setQueryData(["checkout"], data);
    },

    onError: () => {      
      toast.error("خطا در اتصال به شبکه");
    },
  });
}