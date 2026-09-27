import { ReviewsSummary } from "@/entities/Product";
import RatingDistribution from "./RatingDistribution";
import ReviewScore from "./ReviewScore";


export default function ReviewSummary({reviews_summary}: {reviews_summary: ReviewsSummary}){
    const {average_rate , counts , total_count} = reviews_summary;

    return (
        <div className="flex flex-col justify-center items-center xl:pe-5">
            <div className="w-full lg:w-max py-2">
                <ReviewScore 
                total_count={total_count}                
                average_rate={average_rate}
                />
            </div>
            

            <div className="w-full">
                <RatingDistribution total_count={total_count} counts={counts}/>
            </div>
        </div>        
    )
}