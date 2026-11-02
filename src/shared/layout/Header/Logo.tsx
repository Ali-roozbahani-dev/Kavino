import Image from "next/image";
import Link from "next/link";

export default function Logo(){


    return (
        <Link href={"/"}>
            <Image 
            src={"/mainLogo.webp"} 
            alt="Logo"
            width={907} 
            height={1008}
            className="w-full  h-auto"
            />                    
        </Link>
    )
}