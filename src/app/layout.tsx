import type { Metadata } from "next";
import "./globals.css";
import { vazir } from "./fonts";
import { Geist } from "next/font/google";
import { cn } from "@/lib/utils";
import { DirectionProvider } from "@radix-ui/react-direction";
import ReactQueryProvider from "@/providers/ReactQueryProvider";
import { Toaster } from "@/components/ui/sonner"
import { AuthBootstrap } from "@/entities/Auth/AuthBootstrap";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

export const metadata: Metadata = {
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
