import Header from "@/components/ui/Header/Header";
import Main from "@/components/ui/Main";
import { ProfileNavigation } from "@/components/ui/Profile";



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <>
        <Header />
        <Main className="py-5">
            <div className="flex">
                <div className="w-[250px] relative hidden lg:block">
                    <ProfileNavigation /> 
                </div>

                <div className="flex-1 px-4">
                    {children}               
                </div>
            </div>
        </Main>       
    </>    
      
  );
}