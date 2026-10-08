"use client"
import { useInfiniteScrollObserver } from "@/shared/hooks/useInfiniteScrollObserver"
import { useUserReviews } from "./hooks/useUserReviews";
import { EmptyReviews, PageTitle, ReviewsHeader } from "@/components/ui/Profile";
import FilterTabs from "./FilterTabs";
import SectionLoadingDots from "@/components/ui/Loading/SectionLoadingDots";


export default function UserReviews(){
    const {
        data,
        error,
        fetchNextPage,
        isFetchingNextPage,
        isPending,
        hasNextPage
    } = useUserReviews();

    const sentiel = useInfiniteScrollObserver({
        fetchNextPage,
        isFetchingNextPage,
        hasNextPage,        
    });

    if(isPending) return <SectionLoadingDots containerClass="h-40"/>;
    if(error) throw new Error("خطایی رخ داد"); 

    const reviews = data.pages.flatMap((page)=> page.results) ?? [];

    if(!reviews.length) return <EmptyReviews />;
    
    console.log(reviews)

    return(
        <section className="space-y-5">

            <PageTitle>
                <ReviewsHeader reviews={reviews}/>
            </PageTitle>

            <FilterTabs />


            {/* محل نمایش کامنت ها */}            

            

                
            
            <div ref={sentiel} className="h-px"></div>
        </section>
        
    )
} 