"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Link from "next/link";
import { FaChevronLeft, FaFire } from "react-icons/fa6";
import HomePageProductCard from "@/components/ui/Product/Cards/HomePageProductCard";
import { ProductListItem } from "@/entities/Product/types";
import React from "react";

export default function SpecialOffers({
  products,
}: {
  products: ProductListItem[];
}) {

  const selected_products = products.slice(0,10);

  return (
    <section className="my-10 overflow-hidden md:rounded-2xl
    bg-linear-to-r from-theme-4/15 via-theme-4/7 to-transparent p-4 sm:p-5 md:p-6">

      {/* Header */}
      <div className="mb-5 flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-theme-4/10 text-theme-4">
            <FaFire className="text-lg" />
          </div>

          <h2 className="font-bold text-[15px] lg:text-[18px]">
            پیشنهادهای ویژه
          </h2>
        </div>

        <Link
          href="/"
          className="flex items-center text-theme-4 text-[13px] lg:text-[15px]"
        >
          <span className="font-bold">مشاهده همه</span>
          <FaChevronLeft className="ms-2 text-xs" />
        </Link>
      </div>

      {/* Slider */}
      <Swiper
        slidesPerView={6.2}
        spaceBetween={12}
        breakpoints={{
          500: { slidesPerView: 2.1, spaceBetween: 12 },
          768: { slidesPerView: 3.2, spaceBetween: 16 },
          1024: { slidesPerView: 4.2, spaceBetween: 18 },
          1280: { slidesPerView: 5.2, spaceBetween: 20 },
        }}
        className="overflow-visible!"
      >
        {selected_products.map((pro) => (
          <React.Fragment key={pro.id}>
            {pro.has_stock &&
            <SwiperSlide className="h-auto">
              <HomePageProductCard product={pro} />
            </SwiperSlide>
            }
          </React.Fragment>
        ))}
      </Swiper>
    </section>
  );
}
