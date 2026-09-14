import { useCallback, useEffect, useState } from "react";

const STORAGE_KEY = "otp-resend-expires-at";

export function useOtpCountdown(duration = 60) {
  const [secondsLeft, setSecondsLeft] = useState(0);

  const updateRemaining = useCallback(() => {
    const stored = localStorage.getItem(STORAGE_KEY);

    if (!stored) {
      setSecondsLeft(0);
      return;
    }

    const expiresAt = Number(stored);
    const remaining = Math.max(
      0,
      Math.ceil((expiresAt - Date.now()) / 1000)
    );

    setSecondsLeft(remaining);

    if (remaining === 0) {
      localStorage.removeItem(STORAGE_KEY);
    }
  }, []);

  const startCountdown = useCallback(() => {
    const expiresAt = Date.now() + duration * 1000;

    localStorage.setItem(
      STORAGE_KEY,
      expiresAt.toString()
    );

    updateRemaining();
  }, [duration, updateRemaining]);

  useEffect(() => {
    updateRemaining();

    const interval = setInterval(() => {
      updateRemaining();
    }, 1000);

    return () => clearInterval(interval);
  }, [updateRemaining]);

  return {
    secondsLeft,
    startCountdown,
  };
}