import Image from "next/image";
import { CategorySliderItem } from "../types/homeDataTypes";
import Link from "next/link";

interface Props{
    category: CategorySliderItem ;    
}

export default function CategoryItem({category}: Props){


    return (
        <Link 
        href={`/category/${category.slug}`} 
        className="flex flex-col items-center justify-center 
         w-[120px]  xl:w-[140px]"
        >
            <div className="rounded-full overflow-hidden">
                <Image 
                src={category.image ?? "/"}
                width={140}
                height={140}
                alt="category image"
                className="h-[120px] xl:h-[140px] w-full mx-auto"
                />
            </div>
            <p className="text-center font-semibold text-[12px] lg:text-[14px] pt-4">{category.name}</p>
        </Link>
    )
}