import { notFound } from "next/navigation";

export function safeDecode(value: string): string {
  try {
    return decodeURIComponent(value);
  } catch {
    notFound();
  }
}