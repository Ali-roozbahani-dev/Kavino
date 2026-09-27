"use client"
import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { GalleryModal } from "./GalleryModal";
import ActivedImage from "./ActivedImage";
import { ProductImage } from "@/entities/Product";
import ImageBar from "./ImageBar";



export default function ProductGallery({images}: {images: ProductImage[]}){    
    const [openModal , setOpenModal] = useState(false);
    const [activeImage , setActiveImage] = useState(images[0]);  
    const activeIndex = images.findIndex((img) => img === activeImage) + 1; 
    
    

    return (
        <>
        <div className="w-full md:order-2 relative md:border md:rounded-lg  md:p-5">
            <Badge className="absolute bg-primary-text right-4 top-4 lg:hidden rounded-sm pt-1.25 z-100">
                <span>{images.length}</span>
                /
                <span>{activeIndex}</span>
            </Badge>            

            <div className="flex justify-between">
                <ImageBar 
                activeImage={activeImage}
                setActiveImage={setActiveImage} 
                images={images} 
                setOpenModal={setOpenModal}
                />

                <ActivedImage 
                images={images}
                activeImage={activeImage} 
                setActiveImage={setActiveImage}
                setOpenModal={setOpenModal}
                />


            </div>
        </div>
        <GalleryModal
        images={images} 
        openModal={openModal} 
        setOpenModal={setOpenModal}
        />
        </>
    )
}


