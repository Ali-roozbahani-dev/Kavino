import Image from "next/image";
import { socialLinks } from "./footerLists";
import Link from "next/link";

export default function SocialMedia(){

    return (
        <>
        <div className="flex-1">
            <div>
                <p className="font-bold mb-4 text-center">ما را در شبکه های اجتماعی دنبال کنید.</p>
                <div className="flex-center">
                    {socialLinks.map((link,i)=>(
                        <div key={i} className="mx-4">
                            <Link href={link.href}>
                                <link.icon size={25}/>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
            <div className="mt-10 flex-center">
                <Link href={"/"} className="inline-block w-30 mx-auto">
                    <Image 
                    src={"/e-namad.png"} 
                    width={100} 
                    height={100} 
                    alt="e-namad-logo" 
                    className="w-full h-auto"                        
                    />
                </Link>
            </div>
        </div>
        </>
    )
}