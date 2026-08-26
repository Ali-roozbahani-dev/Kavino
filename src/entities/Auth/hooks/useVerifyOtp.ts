import { api } from "@/api/axios_instance";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { authQueryKeys } from "../authQueryKeys";
import { cartQueryKey } from "@/entities/Cart/queryKeys";
interface VerifyOtpParams {
    phone_number: string;
    callbackUrl?: string;
}

export function useVerifyOtp({ phone_number , callbackUrl}: VerifyOtpParams) {
    const router = useRouter();
    const queryClient = useQueryClient();
    
    const verifyOtpMutation = useMutation({
        mutationFn: async (otp: string) => {        

        const res = await api.post("/auth/verify-otp/",
                {
                    phone_number,
                    otp,
                }
            );

            console.log(res)
        },

        onSuccess: async () => {
            await Promise.all([
                queryClient.invalidateQueries({
                    queryKey: authQueryKeys.me,
                }),
                queryClient.invalidateQueries({
                    queryKey: cartQueryKey,
                }),
            ]);
                
            toast.success("ورود با موفقیت");
            router.push(callbackUrl ?? "/");
        },

        onError: (error) => {
            if (axios.isAxiosError(error)) {
                toast.error(
                    error.response?.data?.detail ?? "کد وارد شده صحیح نیست"
                );
            } else {
                toast.error("خطایی رخ داد");
            }
        },
    });

    return {
        verifyOtpMutation: verifyOtpMutation.mutate,
        isVerifyingOtp: verifyOtpMutation.isPending,
    };
}