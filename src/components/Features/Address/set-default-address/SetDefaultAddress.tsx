"use client";

import { ReactNode } from "react";
import { useSetDefaultAddress } from "./hooks/useSetDefaultAddress";

interface SetDefaultAddressProps {
  addressId: number;
  trigger?: ReactNode;
}

export default function SetDefaultAddress({
  addressId,
  trigger,
}: SetDefaultAddressProps) {
  const { mutate, isPending } = useSetDefaultAddress();

  const handleClick = () => {
    if (isPending) return;

    mutate(addressId);
  };

  // اگر trigger پاس داده شده باشد
  if (trigger) {
    return (
      <div
        onClick={handleClick}
        aria-disabled={isPending}
        className={isPending ? "pointer-events-none opacity-50" : ""}
      >
        {trigger}
      </div>
    );
  }

  // Fallback
  return (
    <button
      disabled={isPending}
      onClick={handleClick}
      type="button"
      className="text-sm font-medium text-blue-600 transition hover:text-blue-700 disabled:cursor-not-allowed disabled:opacity-50"
    >
      {isPending
        ? "در حال تغییر..."
        : "انتخاب به‌عنوان آدرس پیش‌فرض"}
    </button>
  );
}