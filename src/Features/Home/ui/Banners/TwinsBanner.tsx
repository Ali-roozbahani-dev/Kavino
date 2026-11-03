import { GridBannerItem } from "@/Features/Home/types/homeDataTypes";
import Image from "next/image";
import Link from "next/link";


export default function TwinsBanner({banners}: {banners: GridBannerItem[]}){


    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-3 my-5 md:my-8">
        {banners.map((banner) => (
            <Link
            key={banner.id}
            href={banner.url}
            className="block min-w-0"
            >
            <Image
                src={banner.mobile_image}
                width={1000}
                height={308}
                alt="banner"
                className="rounded-md w-full h-auto md:hidden"
                unoptimized
            />

            <Image
                src={banner.desktop_image}
                width={1000}
                height={308}
                alt="banner"
                className="rounded-md hidden md:block w-full h-auto"
                unoptimized
            />
            </Link>
        ))}
        </div>
    )
}