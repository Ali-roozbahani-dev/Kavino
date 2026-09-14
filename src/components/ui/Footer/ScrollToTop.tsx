"use client"

import { IoChevronUpOutline } from "react-icons/io5"

export default function ScrollToTop(){

    const scrollToTop = ()=>{
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }

    return (
        <button  
        onClick={scrollToTop}                  
        className="bg-amber-50 rounded-t-full w-13 h-7 lg:w-15 lg:h-9
        flex-center absolute -top-7 lg:-top-9 right-[calc(50%-26px)] lg:right-[calc(50%-30px)]">
            <IoChevronUpOutline  className="text-theme-2 text-[25px] md:text-[28px] lg:text-[30px]"/>
        </button>
    )
}