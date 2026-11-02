import { getProduct } from "@/Features/Product_Details/api/getProduct";
import Footer from "@/shared/layout/Footer/Footer";
import Header from "@/shared/layout/Header/Header";
import { Metadata } from "next";

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;

  const product = await getProduct(slug);

  const title = `${product.name} | خرید با بهترین قیمت`;
  const description =
    product.description ||
    `خرید ${product.name} با بهترین قیمت، مشخصات فنی کامل، تصاویر باکیفیت، بررسی تخصصی و ارسال سریع.`;

  const image = product.images?.[0]?.image || "/images/default-product.webp";

  return {
    title,
    description,

    keywords: [
      product.name,
      product.brand.name,
      product.category.name,
      "فروشگاه لوازم خانگی",
      "خرید لوازم خانگی",
      "قیمت لوازم خانگی",
    ],

    alternates: {
      canonical: `/product/${product.slug}`,
    },

    openGraph: {
      title,
      description,
      url: `/product/${product.slug}`,
      type: "website",
      locale: "fa_IR",
      siteName: "Kaveh Shop",
      images: [
        {
          url: image,
          width: 1200,
          height: 1200,
          alt: product.name,
        },
      ],
    },

    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },

    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1,
      },
    },

    category: product.category.name,

    authors: [
      {
        name: "kavino",
      },
    ],
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return(
    <div className="pb-12 xl:pb-0">
      <>
      <Header />                          
        {children}
      <Footer />         
      </> 
    </div>
  ) 
}