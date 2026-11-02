"use client";

import { useCallback, useSyncExternalStore } from "react";

const STORAGE_KEY = "demo-disclaimer-ack";

// subscriberها برای اطلاع‌رسانی تغییر در همین تب
const listeners = new Set<() => void>();

function subscribe(callback: () => void) {
  listeners.add(callback);
  // تغییر از تب‌های دیگر
  window.addEventListener("storage", callback);
  return () => {
    listeners.delete(callback);
    window.removeEventListener("storage", callback);
  };
}

function emitChange() {
  listeners.forEach((l) => l());
}

function readAccepted(): string | null {
  try {
    return localStorage.getItem(STORAGE_KEY);
  } catch {
    return null;
  }
}

/**
 * وضعیت نمایش مودال اطلاعیه را مدیریت می‌کند.
 * @param version با تغییر این مقدار، مودال دوباره برای همه نمایش داده می‌شود.
 */
export function useDemoDisclaimer(version = "v1") {
  const open = useSyncExternalStore(
    subscribe,
    () => readAccepted() !== version, // کلاینت
    () => false // سرور و hydration: مودال رندر نمی‌شود
  );

  const accept = useCallback(() => {
    try {
      localStorage.setItem(STORAGE_KEY, version);
    } catch {
      // نادیده گرفتن خطا
    }
    emitChange();
  }, [version]);

  return { open, accept };
}