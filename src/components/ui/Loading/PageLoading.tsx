import { Dots } from "@/components/ui/Loading/dots"
import Image from "next/image"


export default function PageLoading() {
  return (
    <div className="h-screen flex flex-col items-center">
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