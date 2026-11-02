"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Link from "next/link";
import { FaChevronLeft, FaFire } from "react-icons/fa6";
import HomePageProductCard from "@/Features/Home/ui/HomePageProductCard";
import { ProductListItem } from "@/entities/Product";

export default function SpecialOffers({
  products,
}: {
  products: ProductListItem[];
}) {

  const selected_products = products
    .filter((pro) => pro.has_stock)
    .slice(0, 10);

  return (
    <section className="my-10 overflow-hidden md:rounded-2xl
    bg-linear-to-r from-theme-4/15 via-theme-4/7 to-transparent p-4 sm:p-5 md:p-6">

      {/* Header */}
      <div className="mb-5 flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-theme-4/10 text-theme-4">
            <FaFire className="text-lg" />
          </div>

          <h2 className="font-bold text-[14px] md:text-[15px] lg:text-[18px]">
            پیشنهادهای ویژه
          </h2>
        </div>

        <Link
          href="/"
          className="flex items-center text-theme-4 text-[13px] lg:text-[15px]"
        >
          <span className="font-bold">مشاهده همه</span>
          <FaChevronLeft className="ms-1 md:ms-2 text-xs" />
        </Link>
      </div>

      {/* Slider */}
      <Swiper
        slidesPerView={6.2}
        spaceBetween={0}
        breakpoints={{
          0: { slidesPerView: 1},
          260: { slidesPerView: 1.3},
          340: { slidesPerView: 1.5},
          400: { slidesPerView: 1.8},
          500: { slidesPerView: 2.2},
          600: { slidesPerView: 2.6},
          768: { slidesPerView: 3.2},
          1024: { slidesPerView: 5.2},
          1280: { slidesPerView: 6.2},
        }}
        className="overflow-visible!"
      >
        {selected_products.map((pro) => (         
            
          <SwiperSlide key={pro.id} className="h-auto">
            <HomePageProductCard product={pro} />
          </SwiperSlide>
          
        ))}
      </Swiper>
    </section>
  );
}
