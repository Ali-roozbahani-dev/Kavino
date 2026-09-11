export const CART_CHANNEL_NAME = "cart-sync";

export function getCartChannel() {
    if (typeof window === "undefined") return null;
    return new BroadcastChannel(CART_CHANNEL_NAME);
}

