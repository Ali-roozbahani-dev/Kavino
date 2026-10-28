import { Star } from "lucide-react";

export default function Rating(){

    return (
        <div className="flex">
            <span className="text-[12px] block me-1 pt-px">{"4.5"}</span>
            <Star className="fill-golden-star text-golden-star size-4"/>
        </div>        
    )
}