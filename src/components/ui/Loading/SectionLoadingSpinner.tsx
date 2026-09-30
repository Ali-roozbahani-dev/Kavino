import { cn } from "@/shared/lib/utils";
import Spinner from "./Spinner";


interface Props{
    containerClass?: string;
    spinnerClass?: string;

}

export default function SectionLoadingSpinner({containerClass , spinnerClass}: Props){

    return (
        <div className={cn("h-full w-full" , containerClass)}>
            <div className="h-full w-full flex-center">                
                <Spinner className={cn("w-10 md:w-13 ltr" , spinnerClass)}/>
            </div>
        </div>
    )
}