import { Skeleton } from "@/components/ui/skeleton";


export default function LoginSkeleton(){

    return(
        <div className="h-screen md:bg-[url('/pexels-artbovich-7535073.jpg')] bg-cover bg-center">
            <div className="bg-[rgba(254,254,254,0.5)] h-screen px-10 pt-10 md:pt-30">
            <div className="max-w-110 md:max-w-90 bg-white mx-auto rounded-lg md:shadow-[0_0_5px_1px_#cccccc]">
                <Skeleton className="h-[382px] w-full" />                
            </div> 
            </div>
        </div>
    )
}