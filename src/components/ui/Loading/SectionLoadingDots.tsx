import { cn } from "@/shared/lib/utils";
import { Dots } from "@/components/ui/Loading/dots";


interface Props{
    containerClass?: string;
    dotsClass?: string;

}

export default function SectionLoadingDots({containerClass , dotsClass}: Props){

    return (
        <div className={cn("h-full w-full" , containerClass)}>
            <div className="h-full w-full flex-center">                
                <Dots className={cn("w-10 md:w-13 ltr" , dotsClass)}/>
            </div>
        </div>
    )
}