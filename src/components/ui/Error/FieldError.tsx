import { cn } from "@/shared/lib/utils";

interface Props {
    message: string ; 
    className?: string;
}

export default function FieldError({message , className= ""}: Props){

    return(
        <div className={
        cn("bg-red-100 py-2 px-3 text-[12px] md:text-[13px] rounded-sm text-red-600" , className)}>
            <p>{message}</p>
        </div>
    )
}