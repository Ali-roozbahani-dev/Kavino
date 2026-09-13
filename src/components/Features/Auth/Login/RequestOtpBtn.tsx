import { Button } from "@/components/ui/button";
import { cn } from "@/shared/lib/utils";
import { Loader, RotateCcw } from "lucide-react";


interface Tprops {
  onClick?: () => void;
  resend?: boolean;
  disabled: boolean;
  isPending: boolean;
  className?: string;
}


export default function RequestOtpBtn({
  disabled ,    
  onClick ,   
  resend, 
  isPending , 
  className, 
}: Tprops) {




  return (
    <Button  
      onClick={resend ? onClick : undefined}    
      disabled={isPending || disabled}
      type={resend ? "button" : "submit"}
      variant={"Blue1"}
      className={cn("w-full py-5 rounded-sm text-[13px] md:text-[14px]" , className)}
    >
      {isPending ? (
        <Loader className="animate-spin size-5" />
      ) : resend ? (
        <>
          ارسال مجدد کد
          <RotateCcw className="size-4.5 md:size-5.5" />
        </>
      ) : (
        "ارسال کد یکبار مصرف"
      )}
    </Button>
  );
}