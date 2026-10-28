import { Button } from "@/ui/button";
import { RefreshCcw } from "lucide-react";
import { useFormContext } from "react-hook-form";
import { FormInput } from "../schema/filterProductsSchema";

export default function FormResetBtn({defaultValues}: {defaultValues: FormInput}){
    const {reset} = useFormContext()

    return (
        <Button 
        onClick={()=> reset(defaultValues)}
        variant={"Light"}
        type="button" 
        className="w-full  rounded-sm py-5">
            <RefreshCcw />
            <span>پاک کردن فیلتر ها</span>
        </Button>    
       
    )
}