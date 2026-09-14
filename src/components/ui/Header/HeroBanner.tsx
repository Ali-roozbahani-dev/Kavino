import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";




export default function HeroBanner(){

    return (
        <div className="w-full py-2 bg-theme-2 text-white">
            <div className="container-0 flex-between">
                <div>
                    <p className="text-[13px] px-2">فروشگاهی برای تمام سلیقه ها</p>
                </div>
                <div className="flex-center">
                    <div>
                        <ul className="flex-center px-3">
                            <li className="mx-1">
                                <Link href="/">
                                    <FaWhatsapp size={"20px"} className="hover:text-[#e5e5e5]"/>                                                                        
                                </Link>
                            </li>
                            <li className="mx-1">
                                <Link href="/">
                                    <FaTelegram size={"20px"} className="hover:text-[#e5e5e5]"/>                                    
                                </Link>
                            </li>                            
                        </ul>
                    </div>
                    <div className="font-extralight px-2 border-x text-[14px]">
                        <Link href={"/"} className="hover:text-[#e5e5e5]">تماس با ما</Link>
                    </div>
                    <div className="font-extralight px-2 text-[14px]">
                        <Link href={"/"} className="hover:text-[#e5e5e5]">سوالات متداول</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}