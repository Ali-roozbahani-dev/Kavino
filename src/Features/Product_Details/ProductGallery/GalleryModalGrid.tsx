import { ProductImage } from "@/entities/Product";
import Image from "next/image";
import { Dispatch, SetStateAction } from "react";

interface Props{
    images: ProductImage[];
    activeImage: ProductImage;  
    setActiveImage: Dispatch<SetStateAction<ProductImage>>;  
}
export default function ModalGalleryGrid({images , activeImage , setActiveImage}: Props){

    return (
        <div className="hidden lg:block ltr w-full lg:w-2/5 h-full overflow-y-auto shadow-[0_0_5px_2px_#f0f0f0]"> 
            <div className="rtl  mt-3 p-1  flex flex-wrap items-start 
            content-start rounded-lg">

            {images.map((image)=>(

            <div key={image.id} className="w-1/4 p-1.5">
                <div
                onClick={()=> setActiveImage(image)} 
                className={`${activeImage === image ? "border-2 border-theme-4" : "border"} 
                p-1 rounded-md overflow-hidden cursor-pointer`}>
                    <Image 
                    src={image.image}
                    width={1000}
                    height={1500}
                    alt={image.alt_text}
                    />
                </div>
            </div>                         
            ))}
            </div>                             

                    
        </div>
    )
}