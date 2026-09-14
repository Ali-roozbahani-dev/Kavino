export const authChannelActions = {
    login: "login",
    logout: "logout",
} as const;

export type AuthChannelAction =
    (typeof authChannelActions)[keyof typeof authChannelActions];

export type AuthChannelMessage = { type: AuthChannelAction };