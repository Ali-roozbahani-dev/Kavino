import { AuthGuardWrapper } from "@/components/Features/Auth";
import Header from "@/components/ui/Header/Header";
import Main from "@/components/ui/Main";
import { ProfileNavigation } from "@/components/ui/Profile";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <AuthGuardWrapper header={<Header />}>
      <Main className="lg:py-5">
        <div className="flex flex-wrap">          
          <ProfileNavigation />
          
          <div className="w-full lg:flex-1 lg:px-4">{children}</div>
        </div>
      </Main>
    </AuthGuardWrapper>
  );
}