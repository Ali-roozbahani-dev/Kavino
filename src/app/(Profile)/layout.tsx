import { AuthGuardWrapper } from "@/components/Features/Auth";
import Header from "@/components/ui/Header/Header";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <AuthGuardWrapper header={<Header />}>
      {children}
    </AuthGuardWrapper>
  );
}