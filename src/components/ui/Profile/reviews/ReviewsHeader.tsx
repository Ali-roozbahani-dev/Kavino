import { Review } from "@/entities/Review";
import { MessageSquare } from "lucide-react";


export  function ReviewsHeader({reviews}: {reviews: Review[]}){

    return (
        <div className="bg-white p-5">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
                <h1 className="text-lg font-bold text-gray-900">
                نظرات من
                </h1>

                <p className="mt-1 text-sm text-gray-500">
                نظراتی که برای محصولات ثبت کرده‌اید
                </p>
            </div>

            <div className="flex items-center gap-2 text-sm text-gray-500">
                <MessageSquare size={18} />
                <span>{reviews.length} نظر</span>
            </div>
            </div>
        </div>
    )
}