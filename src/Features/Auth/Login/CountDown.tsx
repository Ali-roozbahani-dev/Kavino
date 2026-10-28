import { cn } from "@/shared/lib/utils";

interface Tprops{
    secondsLeft: number;   
    className?: string;         
}

export default function CountDown({secondsLeft , className}: Tprops) {
    

const minutes = Math.floor(secondsLeft / 60)
const seconds = secondsLeft % 60
const formattedTime = `${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`

return (
    <div className={cn("flex-center", className)}>
        <p className="text-primary-text text-[12px] md:text-[13px]"> ارسال مجدد کد تا </p>
        <span className="block ms-1.5 font-bold text-theme-4 text-[13px] md:text-[14px]">
            {formattedTime}
        </span>
    </div>
)
}