import { cn } from "@/shared/lib/utils";
import { ReactNode } from "react";

interface Props{
   children: ReactNode;
   className?: string;
}


export default function Main({className , children}: Props){

    return (
        <main className={cn("container-0 px-3", className)}>
            {children}
        </main>
    )
}