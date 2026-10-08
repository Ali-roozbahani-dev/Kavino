
export function getApiBaseUrl(): string {
  const isServer = typeof window === "undefined";
  return isServer
    ? `${process.env.BACKEND_INTERNAL_URL ?? "http://127.0.0.1:8000"}/api`
    : "/api";
}
