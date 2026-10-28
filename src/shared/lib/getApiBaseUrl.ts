
export function getApiBaseUrl(): string {
  const isServer = typeof window === "undefined";
  return isServer
    ? `${process.env.BACKEND_INTERNAL_URL ?? "http://django:8000"}/api`
    : "/api";
}
