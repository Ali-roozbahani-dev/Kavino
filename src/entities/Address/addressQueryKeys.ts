export const addressQueryKeys = {
    all: ["addresses"] as const,
    selected: ["addresses", "selected"] as const,
    detail: (id?: number) => ["addresses", "detail", id] as const,
};