"use client"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import CategoryItem from './CategoryItem';
import { CategorySliderItem } from '../types/homeDataTypes';

interface Props {
    categories: CategorySliderItem[];
}


export default function CategorySlider({categories}: Props) {
  return (
    <div className='my-10 px-3'>
        <Swiper
        spaceBetween={0}        
        breakpoints={{
        400: { slidesPerView: 3.2 },
        640: { slidesPerView: 4.2 },
        800: { slidesPerView: 5.2 },
        1000: { slidesPerView: 6.2 },
        1280: { slidesPerView: 7.4 },
        }} 
            
        >
        {categories.map((cat)=>(

        <SwiperSlide key={cat.slug}>
            <CategoryItem category={cat}/>
        </SwiperSlide>

        )) }

        </Swiper>
    </div>
  );
};