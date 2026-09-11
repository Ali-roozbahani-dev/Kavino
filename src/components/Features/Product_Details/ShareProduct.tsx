"use client"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,  
  DialogHeader,  
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import { Copy, Share2 } from "lucide-react"
import { useState } from "react"
import { toast } from "sonner"


export function ShareProduct() {
  const [open, setOpen] = useState(false);
  const [isCopied , setIsCopied] = useState(false);

  const handleCopy = async () => {

    try {
    await navigator.clipboard.writeText(window.location.href);
    setIsCopied(true);

    } catch (error) {
    toast.error("خطا در کپی کردن لینک");
    }
   };
  

  return (
    <Dialog 
    open={open}
    onOpenChange={(value) => {
        setOpen(value);
        if (!value) setIsCopied(false);
    }}>
      <DialogTrigger asChild>
        <button  className="bg-transparent hover:bg-transparent text-primary-text2">
           <Share2 className="size-5.5 md:size-6.5"/>
        </button>
      </DialogTrigger>      
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="font-semibold font-vazir border-b pb-4">اشتراک گذاری محصول</DialogTitle> 
          <DialogDescription className="text-[15px] pt-2">
            این محصول را با دوستان خود به اشتراک بگذارید .
          </DialogDescription>         
        </DialogHeader>
        <div className="flex items-center gap-2">
          <div className="grid flex-1 gap-2">
            <Label htmlFor="link" className="sr-only">
              Link
            </Label>            
            <Button 
            onClick={handleCopy}
            variant={"Blue1"} 
            className="py-5 rounded-sm">
                <Copy />
                {isCopied ?
                <span>کپی شد</span>
                :
                <span>کپی لینک</span>
                }
            </Button>            
          </div>
        </div>        
      </DialogContent>
    </Dialog>
  )
}
