import { Review } from "@/components/Features/Product_Details/Reviews/types/review";
import ReviewContent from "./ReviewContent";
import ReviewHeader from "./ReviewHeader";

interface Props{
    review: Review;
}

export default function ReviewCard({review}: Props){
    const {comment , created_at , rating , user} = review;

    return (
        <div className="rounded-md border p-4 mb-3">
            <ReviewHeader 
            created_at={created_at}
            rating={rating}
            user={user.length ? user : "کاربر ناشناس"}
            />
            <ReviewContent comment={comment}/>
        </div>        
    )
}