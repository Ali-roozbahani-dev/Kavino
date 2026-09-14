import { Skeleton } from "@/components/ui/skeleton";


export default function ReviewListSkeleton(){

    return (
        <div className="w-full">
            <Skeleton className="w-[191px] lg:w-[190px] h-[32px] lg:h-[42px] rounded-md my-4" />
            <Skeleton className="h-[92px] rounded-md my-4" />
            <Skeleton className="h-[92px] rounded-md my-4" />
            <Skeleton className="h-[92px] rounded-md my-4" />            
        </div>
    )
}