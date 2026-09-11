import { GridBannerItem } from "@/components/Features/Home/types/homeDataTypes";
import Image from "next/image";
import Link from "next/link";


export default function TwinsBanner({banners}: {banners: GridBannerItem[]}){


    return (
        <div className="flex flex-wrap lg:flex-nowrap items-center justify-between my-8">

            {banners.map((banner)=>(
                <Link 
                key={banner.id} 
                href={banner.url} 
                className="block w-full md:w-1/2 lg:pe-2 mb-3 lg:mb-0">
                    <Image 
                    src={banner.mobile_image} 
                    width={1000} 
                    height={308} 
                    alt="banner"
                    className="rounded-md md:hidden"
                    />

                    <Image 
                    src={banner.desktop_image} 
                    width={1000} 
                    height={308} 
                    alt="banner"
                    className="rounded-md hidden md:block"
                    />
                </Link>           

            ))}
        </div>
    )
}