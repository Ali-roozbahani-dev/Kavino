import Link from "next/link";
import { footerLists } from "./footerLists";
import SocialMedia from "./SocialMedia";



export default function DesktopLists(){


    return (
        <div className="flex flex-wrap justify-between xl:px-5 xl:py-6">
            {footerLists.map((list, i)=>(
                <div key={i} className="py-5 xl:py-0 xl:border-e border-dashed w-1/3 xl:flex-1 flex">
                    <ul className="ps-7 xl:ps-4">
                        <li className="font-bold text-[18px] mb-4">{list.title}</li>
                        {list.links.map((link, i)=>(
                            <li key={i} className="font-light mb-2.5 text-[15px]">
                                {link?.icon && <link.icon size={20} className="inline-block me-2"/>}
                                <Link href={link.href} className="text-[14px]">
                                 {link.label}
                                </Link>
                            </li> 
                        ))}
                    </ul>
                </div>
            ))}
            <SocialMedia />
        </div>
    )
}