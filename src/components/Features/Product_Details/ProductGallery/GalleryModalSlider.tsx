import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from 'next/image';
import { ProductImage } from "@/entities/Product";
import { Dispatch, SetStateAction} from 'react';
import { useSyncSwiper } from './hooks/useSyncSwiper';

interface Props{
    images: ProductImage[];
    activeImage: ProductImage;  
    setActiveImage: Dispatch<SetStateAction<ProductImage>>;  
}

export default function GalleryModalSlider({images , activeImage , setActiveImage}: Props){
    const {onSwiper} = useSyncSwiper({images, activeImage});
    
    return(
        <div className='lg:hidden'>
            <Swiper                            
            loop={false}
            pagination={{ clickable: true }}
            spaceBetween={0}
            slidesPerView={5.2} 
            breakpoints={{
            400: { slidesPerView: 5.2 },
            768: { slidesPerView: 6.2 },            
            }}
            onSwiper={onSwiper}            
            className='w-full lg:hidden'                        
            >
            {images.map((image)=>(

            <SwiperSlide key={image.id} className="mx-auto">
                <button
                className={`border-2 ${activeImage === image ? "border-theme-4" : ""}`} 
                onClick={()=> setActiveImage(image)}>
                    <Image 
                    src={image.image}
                    width={1000}
                    height={1500}
                    alt={image.alt_text}
                    />
                </button>
            </SwiperSlide>                          
            ))}
            
            </Swiper>

        </div>
    )
}