import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateCheckout } from "../api/updateCheckout";
import { UpdateCheckoutRequest } from "../types/UpdateCheckoutRequest";
import { toast } from "sonner";

export function useUpdateCheckout() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: UpdateCheckoutRequest) => updateCheckout(data),

    onSuccess: (data) => {
      queryClient.setQueryData(["checkout"], data);
    },

    onError: (error) => {      
      toast.error("خطا در اتصال به شبکه");
    },
  });
}