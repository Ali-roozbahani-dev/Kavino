"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import BrandItem from "./BrandItem";
import { Brand } from "@/entities/Product/types";
import { Tags } from "lucide-react";

interface Props {
  brands: Brand[];
}

export default function BrandSlider({ brands }: Props) {
  return (
    <section className="my-10">
      <div className="overflow-hidden md:rounded-2xl px-2 md:px-0
      bg-linear-to-r from-theme-4/15 via-theme-4/7 to-transparent border-gray-200 bg-white">
        {/* Header */}
        <div className="flex items-center gap-3 pt-3.5 px-3.5">
          <div className="flex size-9 items-center justify-center rounded-lg bg-theme text-primary">
            <Tags className="size-5 text-white" />
          </div>

          <div>
            <h2 className="text-base font-bold text-gray-900 text-[18px] md:text-[22px]">
              برندهای منتخب
            </h2>
          </div>
        </div>

        {/* Slider */}
        <div className="px-2 py-5 sm:px-4">
          <Swiper
          className="overflow-visible!"
            spaceBetween={0}
            breakpoints={{
              400: { slidesPerView: 3.2 },
              640: { slidesPerView: 4.2 },
              740: { slidesPerView: 5.2 },
              1000: { slidesPerView: 7.2 },
              1280: { slidesPerView: 9.3 },
            }}
          >
            {brands.map((brand) => (
              <SwiperSlide 
              key={brand.slug}
              >
                <BrandItem brand={brand} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}