import { Review } from "@/entities/Review/models/review.types";
import ReviewCard from "./ReviewCard";

interface Props{
    reviews: Review[];
}

export default function ReviewList({reviews}: Props){
    

    return (
        <div className="my-4">
            {reviews.map((review)=>(
                <ReviewCard key={review.id} review={review}/>
            ))}
            
        </div>        
    )
}