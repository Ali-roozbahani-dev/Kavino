"use client"
import styles from "./MainBannerSlider.module.css"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from 'next/image';
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { BiChevronLeft, BiChevronRight } from 'react-icons/bi';
import { HeroSliderItem } from "../types/homeDataTypes";
import Link from "next/link";

interface Props{
    sliders: HeroSliderItem[];
}

export default function HeroSlider({sliders}: Props){


  return (
    <div className={`p-0 ${styles.slider}`}>
        <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation={{
            prevEl: ".custom-prev",
            nextEl: ".custom-next"
        }}
        loop={true}
        pagination={{ clickable: true }}
        spaceBetween={0}
        slidesPerView={1}
        autoplay={{
            delay: 3000, 
            disableOnInteraction: false,
        }}
        >
        {sliders.map((slider,i)=>(
            <SwiperSlide key={i} className=''>
                <Link href={`/${slider.button_url}`}>
                    <Image 
                    src={slider.desktop_image} 
                    width={1200} 
                    height={250} 
                    alt='تصویر بند' 
                    className='w-full h-auto hidden lg:block'                
                    />

                    <Image 
                    src={slider.mobile_image} 
                    width={1200} 
                    height={410} 
                    alt='تصویر بند' 
                    className='w-full h-auto lg:hidden'                
                    />
                </Link>
            </SwiperSlide>         
        ))}

        <button 
        className="hidden lg:block custom-next absolute left-4 top-1/2 z-10
        -translate-y-1/2 rounded-full bg-[rgba(255,255,255,0.3)] p-2 shadow">
            <BiChevronLeft size={28} />
        </button>

        <button 
        className="hidden lg:block custom-prev absolute bg-[rgba(255,255,255,0.3)] right-4 top-1/2 z-10
        -translate-y-1/2 rounded-full p-2 shadow">
            <BiChevronRight size={28} />
        </button>
        
        </Swiper>
    </div>
  );
};