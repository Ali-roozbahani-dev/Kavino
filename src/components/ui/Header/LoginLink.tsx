"use client"

import { useLoginUrl } from "@/components/Features/Auth/hooks/useLoginUrl";
import { LogIn} from "lucide-react";
import Link from "next/link";

export default function LoginLink(){
    const loginUrl = useLoginUrl();

    return (
        <Link 
        href={loginUrl} 
        className="shadow rounded-md py-2 px-1.5 lg:px-2.5
            hover:text-theme-hover flex-center h-full">
            <LogIn className="size-6 inline-block lg:hidden"/>            
            <span className="hidden lg:inline-block font-bold text-[14px]">ورود / ثبت نام</span>
        </Link>
    )
}