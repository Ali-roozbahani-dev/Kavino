import { api } from "@/shared/lib/axios_instance";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { authQueryKeys } from "../authQueryKeys";
import { cartQueryKey } from "@/entities/Cart/queryKeys";
import { getAuthChannel } from "../BroadcastChannel/getAuthChannel";
import { authChannelActions } from "../BroadcastChannel/authChannelActions";
import { cartChannelActions, getCartChannel } from "../../Cart";
interface VerifyOtpParams {
    phone_number: string;
    callbackUrl?: string;
}

export function useVerifyOtp({ phone_number , callbackUrl}: VerifyOtpParams) {
    const router = useRouter();
    const queryClient = useQueryClient();
    
    const verifyOtpMutation = useMutation({
        mutationFn: async (otp: string) => {        

        await api.post("/auth/verify-otp/",
                {
                    phone_number,
                    otp,
                }
            );
        },

        onSuccess: async () => {
            await Promise.all([
                queryClient.removeQueries({
                    queryKey: authQueryKeys.me,
                }),
                queryClient.invalidateQueries({
                    queryKey: cartQueryKey,
                }),
            ]);

            getAuthChannel()?.postMessage({ type: authChannelActions.login });
            getCartChannel()?.postMessage({type: cartChannelActions.invalidate});
                
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