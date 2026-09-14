import Logo from "@/components/ui/Header/Logo";
import { CircleArrowRight } from "lucide-react";
import Link from "next/link";


export default function CheckoutHeader(){

    return (
        <div className="mt-5 flex items-center">
            <div className="flex">
                <Link href={"/checkout/cart"} className="font-bold text-[22px]">
                <CircleArrowRight strokeWidth={1.5} className="lg:size-8"/>
                </Link>
                <h2 className="mb-6 text-lg font-semibold ms-2 lg:text-[22px]">
                    تکمیل سفارش
                </h2>
            </div>
            <div className="hidden lg:block w-40 ms-auto">
                <Logo />                
            </div>
        </div>
        
    )
}