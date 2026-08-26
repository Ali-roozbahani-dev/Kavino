import { api } from "@/api/axios_instance";
import { authQueryKeys } from "@/entities/Auth/authQueryKeys";
import { cartQueryKey } from "@/entities/Cart/queryKeys";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

export function useLogout() {
    const router = useRouter();
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: async () => {
            await api.post("/auth/logout/");
        },

        onSuccess: () => {            
            queryClient.removeQueries({
                queryKey: authQueryKeys.me,
            });

            queryClient.invalidateQueries({
                queryKey: cartQueryKey,
            })

            toast.success("با موفقیت خارج شدید");

            router.push("/");
        },

        onError: () => {
            toast.error("خروج از حساب کاربری ناموفق بود");
        },
    });
}