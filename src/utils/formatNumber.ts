
// با جداکننده سه‌رقمی
export function formatNumber(value: number): string {
  return value.toLocaleString("fa-IR");
}

// بدون جداکننده سه‌رقمی
export function formatNumberWithoutSeparator(value: number): string {
  return value.toLocaleString("fa-IR", {
    useGrouping: false,
  });
}