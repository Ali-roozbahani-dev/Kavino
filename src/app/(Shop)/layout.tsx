import type { Metadata } from "next";
import Footer from "@/components/ui/Footer/Footer";
import Header from "@/components/ui/Header/Header";




export const metadata: Metadata = {
  title: "کاوه شاپ | فروشگاه اینترنتی لوازم خانگی",
  description:
    "کاوه شاپ، فروشگاه اینترنتی لوازم خانگی با تنوعی از محصولات آشپزخانه، لوازم برقی، صوتی و تصویری و کالاهای خانگی از برندهای معتبر با قیمت مناسب و ارسال سریع.",

  keywords: [
    "کاوه شاپ",
    "فروشگاه لوازم خانگی",
    "خرید لوازم خانگی",
    "لوازم آشپزخانه",
    "لوازم برقی",
    "تلویزیون",
    "یخچال",
    "ماشین لباسشویی",
    "جاروبرقی",
    "قیمت لوازم خانگی",
  ],

   openGraph: {
    title: "کاوه شاپ | فروشگاه اینترنتی لوازم خانگی",
    description:
      "خرید آنلاین انواع لوازم خانگی از برندهای معتبر با قیمت مناسب، ضمانت اصالت کالا و ارسال سریع.",
    type: "website",
    locale: "fa_IR",
    siteName: "کاوه شاپ",
    url: "https://kavehshop.ir",
    images: [
      {
        url: "/mainLogo.png",
        width: 1200,
        height: 630,
        alt: "کاوه شاپ - فروشگاه اینترنتی لوازم خانگی",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "کاوه شاپ",
    description: "خرید آنلاین لوازم خانگی",
    images: ["/images/og-home.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
      <>
      <Header />                          
        {children}
      <Footer />         
      </>          
      
  );
}
