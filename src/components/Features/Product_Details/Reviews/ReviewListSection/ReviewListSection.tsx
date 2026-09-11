import { useGetReviews } from "@/entities/Review/hooks/useGetReviews";
import ReviewToolbar from "../ReviewToolbar/ReviewToolbar";
import ReviewList from "./ReviewList";
import LoadMoreReviews from "../LoadMoreReviews";
import ReviewListSkeleton from "@/entities/Review/ui/ReviewListSkeleton";
import EmptyReviews from "../EmptyReviews";

export default function ReviewListSection({productSlug}: {productSlug: string}) {
    const {
        data,
        isPending,
        isFetchingNextPage,
        hasNextPage,
        fetchNextPage,
    } = useGetReviews(productSlug);

    if(isPending) return <ReviewListSkeleton />;

    const reviews = data?.pages.flatMap((page) => page.results) ?? [];
    
    if(reviews.length <= 0) return <EmptyReviews />


    return (
        <>        
        {/* <ReviewToolbar /> */}

        <ReviewList reviews={reviews} />

        <LoadMoreReviews
            fetchNextPage={fetchNextPage}
            hasNextPage={hasNextPage}
            isFetchingNextPage={isFetchingNextPage}
        />
        </>
    );
}