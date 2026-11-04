import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";


export default function ReviewToolbar(){

    return (
        <Select>
            <SelectTrigger className="w-full max-w-48 rounded-md py-3 lg:py-5">
                <span className="text-primary-text text-[13px]">مرتب سازی :</span>
                <SelectValue />
            </SelectTrigger>

            <SelectContent      
            position="popper"           
            sideOffset={2} 
            >
            <SelectGroup>                
                <SelectItem                    
                value={"njkjk"}
                >                    
                </SelectItem>                
            </SelectGroup>  
                  
            </SelectContent>
        </Select>        
    )
}