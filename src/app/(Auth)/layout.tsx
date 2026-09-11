"use client"
import LoginSkeleton from "@/entities/Auth/ui/LoginSkeleton";
import { useGuestOnly } from "@/entities/Auth/hooks/useGuestOnly";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

    const { isCheckingAuth } = useGuestOnly();

    if (isCheckingAuth) return <LoginSkeleton />;    

  return (
      <>                                
        {children}               
      </>          
      
  );
}
