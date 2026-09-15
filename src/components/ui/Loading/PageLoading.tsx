import { Dots } from "@/components/ui/Loading/dots"
import { cn } from "@/shared/lib/utils"
import Image from "next/image"


export default function PageLoading({containerclassName = ""}:{containerclassName?: string}) {
  return (
    <div className={cn("h-screen flex flex-col items-center" , containerclassName)}>
      <Image 
      src={"/loadingLogo.png"} 
      alt="Logo"
      width={907} 
      height={1008}
      className="w-40  h-auto mb-3 mt-55"
      />
      <Dots className="w-13 ltr "/>
    </div>
  )
}