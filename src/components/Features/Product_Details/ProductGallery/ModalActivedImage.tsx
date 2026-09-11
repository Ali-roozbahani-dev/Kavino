import { Swiper, SwiperSlide } from 'swiper/react';
import {Navigation} from "swiper/modules";
import Image from "next/image"
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { BiChevronLeft, BiChevronRight } from 'react-icons/bi';
import { ProductImage } from '@/entities/Product/types';
import { Dispatch, SetStateAction } from 'react';
import { useSyncSwiper } from './hooks/useSyncSwiper';

interface Props{
    images: ProductImage[];
    activeImage: ProductImage;  
    setActiveImage: Dispatch<SetStateAction<ProductImage>>;  
}

export default function ModalActivedImage({images , activeImage , setActiveImage}: Props){
    const {onSwiper} = useSyncSwiper({images, activeImage});
    

    return(
        <div className="w-full lg:w-2/5 relative lg:order-1 mb-5 lg:mb-0">
            <Swiper
            modules={[Navigation]} 
            navigation={{
                prevEl: ".custom-prev",
                nextEl: ".custom-next"
            }}                   
            loop={true}            
            spaceBetween={0}
            slidesPerView={1}
            onSwiper={onSwiper}
            onSlideChange={(swiper) => {
                setActiveImage(images[swiper.realIndex]);
            }}
            className="w-90 lg:w-100 2xl:w-110"                 
            >
            {images.map((image)=>(

            <SwiperSlide key={image.id} className="mx-auto">
                <div className='p-px'>
                    <Image 
                    src={image.image}
                    width={1000}
                    height={1500}
                    alt={image.alt_text}
                    />
                </div>
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
    )
}