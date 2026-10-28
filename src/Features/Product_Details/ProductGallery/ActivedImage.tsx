"use client"
import { Swiper, SwiperSlide } from 'swiper/react';
import {Pagination} from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import styles from "../styles/ProductGallery.module.css";
import Image from 'next/image';
import { Dispatch, SetStateAction, useEffect, useState } from 'react'
import ZoomOutput from './ZoomOutput';
import ZoomLens from './ZoomLens';
import { ProductImage } from "@/entities/Product";
import { useSyncSwiper } from './hooks/useSyncSwiper';

interface Props{
    images:ProductImage[]; 
    activeImage: ProductImage;
    setActiveImage: Dispatch<SetStateAction<ProductImage>>;
    setOpenModal:Dispatch<SetStateAction<boolean>>;
}

const LENS_WIDTH = 160; // معادل w-70
const LENS_HEIGHT = 160; // معادل h-40

export default function ActivedImage({images , activeImage , setActiveImage , setOpenModal}: Props){
    const {onSwiper} = useSyncSwiper({images, activeImage});
    const [isMobile, setIsMobile] = useState(false);
    const [showZoom, setShowZoom] = useState(false);
    const [containerSize, setContainerSize] = useState({ width: 0, height: 0 });
    
    const [lensPosition , setLensPosition] = useState({
        top: 0,
        left: 0
    });

    const maxLeft = containerSize.width - LENS_WIDTH;
    const maxTop = containerSize.height - LENS_HEIGHT;

    const zoomX = maxLeft > 0 ? lensPosition.left / maxLeft : 0;
    const zoomY = maxTop > 0 ? lensPosition.top / maxTop : 0;


    // برای غیر فعال کردن کلیک در حالت دسکتاپ
    useEffect(() => {
        const checkIsMobile = () => {            
            setIsMobile(window.innerWidth < 1024);
        };

        checkIsMobile();
        window.addEventListener("resize", checkIsMobile);

        return () => window.removeEventListener("resize", checkIsMobile);
    }, []);

    const openModalHandler = () => {
        if (isMobile) {
            setOpenModal(true);
        }
    };

    // مشخص کردن موقعیت زوم عکس
    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        const rect = e.currentTarget.getBoundingClientRect();

        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        setContainerSize({ width: rect.width, height: rect.height });

        // مختصات لنز
        const left = Math.min(
            Math.max(x - LENS_WIDTH / 2, 0),
            rect.width - LENS_WIDTH
        );

        const top = Math.min(
            Math.max(y - LENS_HEIGHT / 2, 0),
            rect.height - LENS_HEIGHT
        );

        setLensPosition({
            left,
            top,
        });

    };



    return (
        <div className="w-full lg:w-4/5 relative">
            {showZoom && (
                <>
                <ZoomLens left={lensPosition.left} top={lensPosition.top} />
                <ZoomOutput
                activeImage={activeImage}
                x={zoomX}
                y={zoomY}
                />
                </>
            )}
            <div 
            className='hidden lg:block'>
                <Image 
                src={activeImage.image}
                width={1000}
                height={1500}
                alt={activeImage.alt_text} 
                onMouseMove={handleMouseMove} 
                onMouseEnter={() => setShowZoom(true)}
                onMouseLeave={() => setShowZoom(false)}                      
                />                         
            </div>

            <div 
            onClick={openModalHandler}
            className='lg:hidden w-max mx-auto'            
            >            
                <Swiper
                modules={[Pagination]}                    
                loop={true}
                pagination={{ clickable: true }}
                spaceBetween={0}
                slidesPerView={1}
                className={styles.slider} 
                onSwiper={onSwiper}
                onSlideChange={(swiper) => {
                    setActiveImage(images[swiper.realIndex]);
                }}                
                >
                {images.map((image)=>(

                <SwiperSlide key={image.id}>
                    <div>
                        <Image 
                        src={image.image}
                        width={1000}
                        height={1500}
                        alt={image.alt_text} 
                        onMouseMove={handleMouseMove} 
                        onMouseEnter={() => setShowZoom(true)}
                        onMouseLeave={() => setShowZoom(false)}                      
                        />                         
                    </div>
                </SwiperSlide>               
                ))}                              
                
                </Swiper>
            </div>
        </div>
    )
}