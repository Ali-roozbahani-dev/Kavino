import { api } from "@/shared/lib/axios_instance";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { authQueryKeys } from "../../authQueryKeys";
import { authChannelActions } from "../../BroadcastChannel/authChannelActions";
import { getSafeCallbackUrl } from "@/shared/lib/getSafeCallbackUrl";
import { sessionEvents } from "@/shared/lib/sessionEvents";
import { getChannel } from "@/shared/lib/getChannel";
import { AUTH_CHANNEL_NAME } from "../../BroadcastChannel/authChannelName";
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
            queryClient.removeQueries({
                queryKey: authQueryKeys.me,
            })

            sessionEvents.emit("login");  // محلی (همین تب)

            getChannel(AUTH_CHANNEL_NAME)?.postMessage({ type: authChannelActions.login }); // بین تب‌ها
                
            toast.success("ورود با موفقیت");
            router.push(getSafeCallbackUrl(callbackUrl));
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