import {
  Dialog,  
  DialogContent,  
  DialogOverlay,    
} from "@/components/ui/dialog"
import { Dispatch, SetStateAction, useState } from "react"

import ModalGalleryGrid from "./GalleryModalGrid";
import GalleryModalSlider from "./GalleryModalSlider";
import ModalActivedImage from "./ModalActivedImage";
import { ProductImage } from "@/entities/Product";


interface Props{
  images: ProductImage[]; 
  openModal : boolean; 
  setOpenModal: Dispatch<SetStateAction<boolean>>;
}

export function GalleryModal({images , openModal , setOpenModal}: Props) {
    const [activeImage , setActiveImage] = useState(images[0]);


  return (
    <Dialog open={openModal} onOpenChange={setOpenModal}>
        <DialogOverlay className="bg-black/50 z-100" />
              
        <DialogContent 
        className="max-w-[1350px] sm:max-w-[1250px] 2xl:max-w-[1350px] rounded-none xl:rounded-lg block 
        p-3.5 lg:p-7 h-screen xl:h-160 overflow-y-auto mx-auto z-101">

          <h1 className="text-[18px] md:text-[22px] py-1 lg:py-5 h-max">گالری تصاویر</h1> 
          <div className="flex flex-wrap justify-between items-center mt-3">
            <ModalActivedImage
            activeImage={activeImage}
            setActiveImage={setActiveImage}  
            images={images}
            />
                      
            <ModalGalleryGrid 
            images={images}
            activeImage={activeImage}
            setActiveImage={setActiveImage}
             />

          </div> 
          <GalleryModalSlider
          images={images}
          activeImage={activeImage}
          setActiveImage={setActiveImage} 
          />        
        </DialogContent>      
    </Dialog>
  )
}
