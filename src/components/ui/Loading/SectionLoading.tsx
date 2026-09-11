import { cn } from "@/lib/utils";
import { Dots } from "@/components/dots";


interface Props{
    containerClass?: string;
    dotsClass?: string;

}

export default function SectionSpinner({containerClass , dotsClass}: Props){

    return (
        <div className={cn("h-full w-full" , containerClass)}>
            <div className="h-full w-full flex-center">                
                <Dots className={cn("w-13 ltr" , dotsClass)}/>
            </div>
        </div>
    )
}