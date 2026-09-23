

export const ReviewQueryKeys = {
  all: ["reviews"] as const,

  user: () => [...ReviewQueryKeys.all, "user"] as const,
};