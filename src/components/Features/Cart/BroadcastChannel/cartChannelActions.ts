export const cartChannelActions = {
    invalidate: "invalidate",
} as const;

export type CartChannelAction =
    (typeof cartChannelActions)[keyof typeof cartChannelActions];

export type CartChannelMessage = { type: CartChannelAction };