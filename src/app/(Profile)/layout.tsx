import { AuthGuardWrapper } from "@/Features/Auth";
import { ProfileNavigation } from "@/Features/User_Profile";
import Header from "@/shared/layout/Header/Header";
import Main from "@/ui/Main";
import { connection } from "next/server";

export const dynamic = "force-dynamic";


export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  await connection();

  
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