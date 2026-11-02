
export function getApiBaseUrl(): string {
  const isServer = typeof window === "undefined";
  return isServer
    ? `${process.env.BACKEND_INTERNAL_URL ?? process.env.NEXT_PUBLIC_API_URL}/api`
    : "/api";
}
