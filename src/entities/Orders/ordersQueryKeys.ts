
export const ordersQueryKeys = {
  all: ["orders"] as const,

  list: () => [...ordersQueryKeys.all, "list"] as const,

  detail: (order_number: number) =>
    [...ordersQueryKeys.all, "detail", order_number] as const,
};