"use client"
import { Scan } from "lucide-react";

interface Props {
    left: number;
    top: number;
}


export default function ZoomLens({left , top}: Props){
    
      

    return (        
        <div 
        className="hidden lg:flex justify-center items-center absolute z-1000 pointer-events-none
        border border-blue-500 rounded-sm bg-[rgba(11,11,11,0.4)] h-40 w-40"
        style={{ left: left, top: top }}
        >
            <Scan strokeWidth={2} className="text-blue-500 size-6"/>                                    
        </div>
    )
}