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
                className="rounded-sm h-10 border bg-white">
                    <Trash2 className="size-4.5"/>
                    خالی کردن سبد خرید
                </Button>                
            </AlertDialogTrigger>
            <AlertDialogContent size="sm" className="rounded-sm">
                <AlertDialogHeader>
                <AlertDialogTitle className="font-vazir">تمام محصولات از سبد خریدتان حذف شود ؟</AlertDialogTitle>
                </AlertDialogHeader>
                <AlertDialogFooter>
                <AlertDialogCancel className="rounded-sm">انصراف</AlertDialogCancel>
                <AlertDialogAction 
                disabled={isClearing}
                className="text-red-600 bg-white hover:bg-red-100 border! border-red-600! rounded-sm" 
                onClick={clearCart} >
                    خالی کردن سبد خرید                    
                </AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>

    )
}
