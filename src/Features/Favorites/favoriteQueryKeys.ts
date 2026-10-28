export const favoriteQueryKeys = {
  all: ["favorites"] as const,

  list: () => [...favoriteQueryKeys.all, "list"] as const,

  ids: () => [...favoriteQueryKeys.all, "ids"] as const,
};