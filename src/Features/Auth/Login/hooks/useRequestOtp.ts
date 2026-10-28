import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { api } from "@/shared/lib/axios_instance";
import { useOtpCountdown } from "./useOtpCountdown";

export function useRequestOtp(){
    const router = useRouter();
    const {startCountdown} = useOtpCountdown();

    const requestOtpMutation = useMutation({
        mutationFn: async ({mobile , callbackUrl}: {mobile: string; callbackUrl?: string})=>{        
        
        await api.post("/auth/request-otp/",{
            phone_number: mobile 
        }) 

        return {mobile , callbackUrl}
        },
        onSuccess: ({ mobile, callbackUrl }) => {
            const params = new URLSearchParams({
                mobileNum: mobile,
            });

            if (callbackUrl) {
                params.set("callbackUrl", callbackUrl);
            }
            
            startCountdown()
            router.push(`/LoginWithOtp?${params.toString()}`);
        },
        onError: (err) => {
            if (!axios.isAxiosError(err)) {
                toast.error("خطای غیرمنتظره‌ای رخ داد");
                return;
            }

            const status = err.response?.status;

            switch (status) {
                case 429:
                    toast.error("درخواست‌های زیادی ارسال شده. لطفاً کمی صبر کنید.");
                    break;

                case 400:
                    toast.error("شماره موبایل نامعتبر است.");
                    break;

                case 500:
                    toast.error("خطایی در سرور رخ داده است.");
                    break;

                default:
                    toast.error("خطا در اتصال به شبکه");
            }
        }
    });
    

    return {
        requestOtpMutation: requestOtpMutation.mutate,
        isSendingRequest: requestOtpMutation.isPending
    };
}