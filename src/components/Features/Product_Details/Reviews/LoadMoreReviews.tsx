import { Button } from "@/components/ui/button";
import { useGetReviews } from "@/components/Features/Product_Details/Reviews/hooks/useGetReviews";
import { ChevronDown, LoaderCircle } from "lucide-react";

interface Props{
    fetchNextPage: ReturnType<typeof useGetReviews>["fetchNextPage"];  
    hasNextPage: boolean;
    isFetchingNextPage: boolean;    
}

export default function LoadMoreReviews({fetchNextPage , hasNextPage , isFetchingNextPage}: Props){

    if(!hasNextPage) return null;

    return (
        <Button 
        disabled={isFetchingNextPage}
        onClick={()=> fetchNextPage()}
        variant={"secondary"} 
        className="rounded-sm flex mx-auto">
            مشاهده بیشتر نظرات
            {isFetchingNextPage ?
            <LoaderCircle className="animate-spin" />
            :
            <ChevronDown />
            }
        </Button>
    )
}