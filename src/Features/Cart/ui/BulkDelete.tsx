import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { Button } from "@/components/ui/button";
import { Trash2 } from "lucide-react";

interface Props {
    isClearing: boolean;
    clearCart: ()=> void;
}

export default function BulkDelete({isClearing , clearCart}: Props){
    

    return (        
        <AlertDialog>
            <AlertDialogTrigger asChild>
                <Button                 
                variant={"destructive"} 
                className="rounded-sm text-[13px] md:text-[14px] h-8 md:h-10 border px-1 md:px-2">
                    <Trash2 className="size-4.5"/>
                    <span className="hidden md:block">
                     خالی کردن سبد خرید
                    </span>
                </Button>                
            </AlertDialogTrigger>
            <AlertDialogContent size="sm" className="rounded-sm w-[260px] sm:w-max md:max-w-lg!">
                <AlertDialogHeader>
                    
                <AlertDialogTitle 
                className="font-vazir text-[13px] md:text-[15px] lg:text-[15px]"
                >تمام محصولات از سبد خریدتان حذف شود ؟
                </AlertDialogTitle>

                </AlertDialogHeader>
                <AlertDialogFooter>
                <AlertDialogCancel className="rounded-sm">انصراف</AlertDialogCancel>
                <AlertDialogAction 
                variant={"Blue1"}
                disabled={isClearing}
                className="rounded-sm"
                onClick={clearCart} >
                   بله                   
                </AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>

    )
}
