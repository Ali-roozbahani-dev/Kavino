import { Plus } from "lucide-react";

export default function ColorsBar(){

    return(
        <div className="flex flex-col items-center gap-y-1.5">
            <div className="w-2 h-2 rounded-full bg-amber-700"></div>
            <div className="w-2 h-2 rounded-full bg-amber-500"></div>
            <div className="w-2 h-2 rounded-full bg-amber-300"></div>
            <Plus className="size-2"/>            
        </div>
    )
}