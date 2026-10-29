"use client";

import "./globals.css";
import { useEffect } from "react";
import Image from "next/image";
import { vazir } from "./fonts";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // digest همان شناسه‌ای است که در لاگ سرور هم دیده می‌شود.
    // eslint-disable-next-line no-console
    console.error("Global error:", error);
  }, [error]);

  return (
    <html lang="fa" dir="rtl" className={vazir.variable}>
      <body
        className={`${vazir.className} flex min-h-screen items-center justify-center bg-white px-4`}
      >
        <main className="mx-auto max-w-md text-center">
          <Image
            src="/error.png"
            alt=""
            width={360}
            height={360}
            priority
            className="mx-auto"
          />

          <h1 className="mt-8 text-2xl font-bold">
            سایت موقتاً در دسترس نیست
          </h1>

          <p className="mt-3 leading-8 text-gray-600">
            هنگام بارگذاری صفحه مشکلی پیش آمد. چند لحظه بعد دوباره تلاش کنید؛
            اگر ادامه داشت، با پشتیبانی تماس بگیرید.
          </p>

          <div className="mt-8 flex items-center justify-center gap-3">
            <button
              type="button"
              onClick={reset}
              className="h-11 rounded-xl bg-theme-2 px-8 text-white"
            >
              تلاش مجدد
            </button>

            <a
              href="/"
              className="flex h-11 items-center rounded-xl border border-gray-300 px-8"
            >
              صفحهٔ اصلی
            </a>
          </div>

          {error.digest && (
            <p dir="ltr" className="mt-6 text-xs text-gray-400">
              کد خطا: {error.digest}
            </p>
          )}
        </main>
      </body>
    </html>
  );
}
