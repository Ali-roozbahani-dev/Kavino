"use client"
import LoginSkeleton from "@/components/Features/Auth/ui/LoginSkeleton";
import { useGuestOnly } from "@/components/Features/Auth/hooks/useGuestOnly";



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
