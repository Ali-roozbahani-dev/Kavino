"use client"
import { useInfiniteScrollObserver } from "@/shared/hooks/useInfiniteScrollObserver"
import { useUserReviews } from "./hooks/useUserReviews";
import { ReviewsHeader } from "@/components/ui/Profile";
import FilterTabs from "./FilterTabs";


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

    if(isPending) return <div>loading...</div>;
    if(error) throw new Error("خطایی رخ داد"); 

    const reviews = data.pages.flatMap((page)=> page.results) ?? [];

    console.log(reviews)
    

    return(
        <section className="space-y-5">
            <ReviewsHeader reviews={reviews}/>

            <FilterTabs />

            

            {/* Reviews */}
            <div className="space-y-4">
                {reviews.map((review) => {

                return (
                    <article
                    key={review.id}
                    className="bg-white p-5"
                    >
                    {/* Product Header */}
                    <div className="flex items-start justify-between gap-4">
                        <div className="flex min-w-0 items-center gap-3">
                        <div className="size-16 shrink-0 overflow-hidden rounded-lg border border-gray-100 bg-gray-50">
                            <img
                            src={review.image}
                            alt={review.product}
                            className="size-full object-contain"
                            />
                        </div>

                        <div className="min-w-0">
                            <p className="truncate text-sm font-bold text-gray-900">
                            {review.product}
                            </p>

                            <p className="mt-1 text-xs text-gray-400">
                            ثبت شده در {review.date}
                            </p>
                        </div>
                        </div>

                        {/* Actions */}
                        <div className="flex shrink-0 items-center gap-1">
                        <button
                            type="button"
                            aria-label="ویرایش نظر"
                            className="flex size-9 items-center justify-center rounded-lg text-gray-500 transition hover:bg-blue-50 hover:text-blue-600"
                        >
                            <Edit size={17} />
                        </button>

                        <button
                            type="button"
                            aria-label="حذف نظر"
                            className="flex size-9 items-center justify-center rounded-lg text-gray-500 transition hover:bg-red-50 hover:text-red-600"
                        >
                            <Trash2 size={17} />
                        </button>

                        <button
                            type="button"
                            aria-label="گزینه‌های بیشتر"
                            className="flex size-9 items-center justify-center rounded-lg text-gray-500 transition hover:bg-gray-100"
                        >
                            <MoreVertical size={18} />
                        </button>
                        </div>
                    </div>

                    {/* Rating & Status */}
                    <div className="mt-5 flex flex-wrap items-center gap-4">
                        <div className="flex items-center gap-1">
                        {[1, 2, 3, 4, 5].map((star) => (
                            <Star
                            key={star}
                            size={17}
                            className={
                                star <= review.rating
                                ? "fill-yellow-400 text-yellow-400"
                                : "text-gray-200"
                            }
                            />
                        ))}

                        <span className="mr-1 text-sm font-medium text-gray-700">
                            {review.rating}
                        </span>
                        </div>

                        <span
                        className={`flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-medium ${status.className}`}
                        >
                        <StatusIcon size={14} />
                        {review.status}
                        </span>
                    </div>

                    {/* Review Text */}
                    <div className="mt-4 border-t border-gray-100 pt-4">
                        <p className="text-sm leading-7 text-gray-600">
                        {review.text}
                        </p>
                    </div>

                    {/* Rejected Message */}
                    {review.statusType === "rejected" && (
                        <div className="mt-4 rounded-lg bg-red-50 px-4 py-3">
                        <p className="text-xs leading-6 text-red-600">
                            این نظر مطابق قوانین بررسی نظرات تأیید نشده است.
                            می‌توانید نظر خود را ویرایش و مجدداً ارسال کنید.
                        </p>
                        </div>
                    )}

                    {/* Pending Message */}
                    {review.statusType === "pending" && (
                        <div className="mt-4 rounded-lg bg-orange-50 px-4 py-3">
                        <p className="text-xs leading-6 text-orange-600">
                            نظر شما ثبت شده و پس از بررسی منتشر خواهد شد.
                        </p>
                        </div>
                    )}
                    </article>
                );
                })}
            </div>

            {/* Empty State */}
            {/*
            <div className="flex flex-col items-center justify-center bg-white px-5 py-16 text-center">
                <div className="flex size-16 items-center justify-center rounded-full bg-gray-100 text-gray-400">
                <MessageSquare size={28} />
                </div>

                <h2 className="mt-4 font-bold text-gray-900">
                هنوز نظری ثبت نکرده‌اید
                </h2>

                <p className="mt-2 text-sm text-gray-500">
                بعد از خرید محصولات می‌توانید نظر خود را ثبت کنید.
                </p>
            </div>
            */}
                <div ref={sentiel} className="h-px"></div>
            </section>
        
    )
} 