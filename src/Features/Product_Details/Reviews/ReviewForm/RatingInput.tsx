"use client"
import FieldError from "@/components/ui/Error/FieldError";
import { Star } from "lucide-react";
import { useState } from "react";

interface Props{
    disabled: boolean;
    value: number;
    onChange: (value: number) => void;
    error?: string;
}

const STARS = [1,2,3,4,5];

export default function RatingInput({disabled , value , onChange , error}: Props){
    const [hovered, setHovered] = useState(0);
    


    return (
        <div className="mt-4">
            <p className="text-primary-text text-[14px] lg:text-[15px]">
                امتیاز شما به این محصول چیست ؟
            </p>
            <div className="flex justify-center mt-2.5">
                {STARS.map((star)=>(
                    <button 
                    disabled={disabled}
                    aria-label={`امتیاز ${star} از ۵`}
                    className="mx-px"
                    key={star}
                    type="button"
                    onClick={()=> onChange(star)}
                    onMouseEnter={()=> setHovered(star)}
                    onMouseLeave={()=> setHovered(0)}
                    >
                        <Star 
                        strokeWidth={1}                                      
                        className={`md:size-8
                        ${star <= (hovered || value) ? "fill-golden-star text-golden-star" : "text-primary-text2"}`}                     
                        />
                    </button>
                ))}
            </div>    

            {error && (
                <FieldError 
                className="mt-2"
                message={error} />
            )}    

        </div>
    )
}