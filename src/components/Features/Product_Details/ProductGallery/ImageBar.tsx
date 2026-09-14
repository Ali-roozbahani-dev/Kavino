import { ProductImage } from "@/entities/Product/types";
import { Ellipsis, EllipsisVertical, ImagePlus, Images } from "lucide-react";
import Image from "next/image";
import { Dispatch, SetStateAction } from "react";

interface Props {
  activeImage: ProductImage;
  setActiveImage: Dispatch<SetStateAction<ProductImage>>;
  images: ProductImage[];
  setOpenModal: Dispatch<SetStateAction<boolean>>;
}

export default function ImageBar({
activeImage , 
setActiveImage , 
images, 
setOpenModal }: Props) {

  const barImages = images.slice(0, 6);
  const extraImages = Math.max(0, images.length - barImages.length);
  

  return (
    <div
      className="hidden lg:flex w-1/6 flex-col rounded-lg
      shadow-[0_0_5px_2px_#f0f0f0] mt-3 p-1 min-h-[445px]"
    >
      {barImages.map((image, index) => {
        const isLast = index === barImages.length - 1;
        const hasOverlay = isLast && extraImages > 0;

        return (
          <div key={image.id} className="relative w-full p-1.5">
            <button
              type="button"
              onClick={() => {
                if (hasOverlay) {
                    setOpenModal(true);
                    } else {
                    setActiveImage(image);
                    }
                }}
              className={`relative block w-full overflow-hidden rounded-md border-2  p-1 
              ${activeImage.id === image.id ? "border-theme-4" : ""}`}
            >
              <Image
                src={image.image}
                width={1000}
                height={1500}
                alt={image.alt_text}
                className="w-full"
              />

              {hasOverlay && (
                <div                
                className="absolute inset-0 flex-center pt-1
                bg-black/45 backdrop-blur-[1px] text-white">
                  <div>
                    <Images className="mx-auto"/>                  
                    <span className="text-[15px] font-semibold">
                      {extraImages}+
                    </span>
                  </div>
                </div>
              )}
            </button>
          </div>
        );
      })}
    </div>
  );
}