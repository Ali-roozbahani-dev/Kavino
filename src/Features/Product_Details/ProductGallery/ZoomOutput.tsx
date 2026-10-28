"use client"

import { ProductImage } from "@/entities/Product";

interface Props{
    activeImage: ProductImage;
    x: number;
    y: number;
    
}

export default function ZoomOutput({activeImage,x , y}: Props){

    return (
        <div
        style={{
            backgroundImage: `url(${activeImage.image})`,
            backgroundPosition: `${x * 100}% ${y * 100}%`,
            backgroundSize: "250%",
        }} 
        className="hidden lg:block absolute left-[-117%] bg-white z-100 top-[-5%] h-[110%] w-[117%]
        shadow-[0_0_3px_3px_#f0f0f0]">
            
        </div>
    )
}