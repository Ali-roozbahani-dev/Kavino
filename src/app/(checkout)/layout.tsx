export const dynamic = "force-dynamic";

export default function CheckoutLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="pb-28 lg:pb-0">
      {children}
    </div>
  );
}