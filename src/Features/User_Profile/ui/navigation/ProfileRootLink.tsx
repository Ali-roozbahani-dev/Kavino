import { CircleArrowRight } from "lucide-react";
import Link from "next/link";


export function ProfileRootLink(){


    return(
        <Link  href={"/profile"}>
            <CircleArrowRight strokeWidth={1.6} className="size-8"/>                        
        </Link>
    )

}