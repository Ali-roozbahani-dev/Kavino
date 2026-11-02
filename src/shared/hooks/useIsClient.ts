import { useSyncExternalStore } from "react";

const subscribe = () => () => {};

export function useIsClient() {
  return useSyncExternalStore(
    subscribe,
    () => true,   // مقدار روی کلاینت
    () => false   // مقدار روی سرور و در حین hydration
  );
}