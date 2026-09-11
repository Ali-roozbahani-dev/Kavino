import { GridBannerItem } from "@/components/Features/Home/types/homeDataTypes";
import Image from "next/image";
import Link from "next/link";

export default function FourBanner({
  banners,
}: {
  banners: GridBannerItem[];
}) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 my-8">
      {banners.map((banner) => (
        <Link
          key={banner.id}
          href={banner.url}
          className="block w-full"
        >
          {/* Mobile */}
          <Image
            src={banner.mobile_image}
            width={1000}
            height={308}
            alt="banner"
            className="rounded-md w-full md:hidden"
          />

          {/* Tablet & Desktop */}
          <Image
            src={banner.desktop_image}
            width={1000}
            height={308}
            alt="banner"
            className="rounded-md w-full hidden md:block"
          />
        </Link>
      ))}
    </div>
  );
}