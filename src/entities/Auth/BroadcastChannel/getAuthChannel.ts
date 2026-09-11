export const AUTH_CHANNEL_NAME = "auth-sync";

export function getAuthChannel() {
    if (typeof window === "undefined") return null;
    return new BroadcastChannel(AUTH_CHANNEL_NAME);
}