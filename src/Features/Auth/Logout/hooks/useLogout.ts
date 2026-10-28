"use client"
import { api } from "@/shared/lib/axios_instance";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import { authChannelActions } from "../../BroadcastChannel/authChannelActions";
import { authQueryKeys } from "../../authQueryKeys";
import { sessionEvents } from "@/shared/lib/sessionEvents";
import { getChannel } from "@/shared/lib/getChannel";
import { AUTH_CHANNEL_NAME } from "../../BroadcastChannel/authChannelName";

export function useLogout() {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: async () => {
            await api.post("/auth/logout/");
        },

        onSuccess: () => {
            queryClient.setQueryData(authQueryKeys.me, null);
            sessionEvents.emit("logout");                       // محلی (همین تب)
            getChannel(AUTH_CHANNEL_NAME)?.postMessage({ type: authChannelActions.logout }); // بین تب‌ها
            toast.success("با موفقیت خارج شدید");
        },

        onError: () => {
            toast.error("خروج از حساب کاربری ناموفق بود");
        },
    });
}