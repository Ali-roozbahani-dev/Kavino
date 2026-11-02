"use client"
import { ReviewsSummary } from "@/entities/Product";
import styles from "../styles/ProductTabs.module.css"

const headerItems = [
  {id: "Description" , label: "توضیحات"},
  {id: "Specifications" , label: "مشخصات محصول"},
  {id: "Reviews" , label: "دیدگاه کاربران"},
];

interface Props{
    reviews_summary: ReviewsSummary;
    activeTab: string;
}

export default function TabsHeader({reviews_summary , activeTab}: Props){

    const scrollToSection = (id: string) => {
        document.getElementById(id)?.scrollIntoView({
            behavior: "smooth",
            block: "start",
        });
    };
    
    
    return(
        <div
        className="border-y bg-primary-text3 px-3 md:px-3.5 max-w-350 mx-auto
        sticky top-(--navbar-height)
        transition-[top] duration-200
        right-0 w-full z-40"
        >
            <ul className="flex  items-center font-semibold text-primary-text">

                {headerItems.map((item)=>(

                <li 
                key={item.id}
                onClick={()=> scrollToSection(item.id)}
                className={`${activeTab === item.id ? `${styles.active}` : ""} 
                text-[12px] md:text-[14px] lg:text-[16px] px-1.5 lg:px-2 py-3 md:py-4 me-1 sm:me-5 
                md:me-6 lg:me-8 cursor-pointer flex items-center`}>                    
                    <p>{item.label}</p>
                    {item.id === "Reviews" &&
                    <span className="ms-1.5 text-[13px] lg:text-[14px]">({reviews_summary.total_count})</span>
                    }
                </li>
                ))}

            </ul>
        </div>
    )
}