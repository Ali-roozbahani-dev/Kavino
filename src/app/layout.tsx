import type { Metadata } from "next";
import "./globals.css";
import { vazir } from "./fonts";
import { Geist } from "next/font/google";
import { cn } from "@/shared/lib/utils";
import { DirectionProvider } from "@radix-ui/react-direction";
import ReactQueryProvider from "@/providers/ReactQueryProvider";
import { Toaster } from "@/components/ui/sonner"
import { AuthBootstrap } from "@/entities/Auth/AuthBootstrap";

export const dynamic = "force-dynamic";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"),
  title: "کاوه شاپ | فروشگاه اینترنتی لوازم خانگی",  
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fa"
      dir="rtl"
      className={cn("h-full", "antialiased", vazir.variable, "font-sans", geist.variable)}
    >
      <body className={`${vazir.className} body-scrollbar-custom`}>
        <DirectionProvider dir="rtl">
          <ReactQueryProvider>   
            <AuthBootstrap />                                    
            {children}                        
          </ReactQueryProvider>
          <Toaster />          
        </DirectionProvider>
      </body>
    </html>
  );
}
