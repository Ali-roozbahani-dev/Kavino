// app/(checkout)/layout.tsx
export const dynamic = "force-dynamic";

export default function CheckoutLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}