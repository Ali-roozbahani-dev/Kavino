import { MessageCircle } from "lucide-react";
import styles from "../styles/ProductTabs.module.css"
import ReviewForm from "./ReviewForm/ReviewForm";
import ReviewSummary from "./ReviewSummary/ReviewSummary";
import { ReviewsSummary } from "@/entities/Product";
import ReviewListSection from "./ReviewListSection/ReviewListSection";

interface Props {
    reviews_summary: ReviewsSummary; 
    productSlug: string
}

export default function Reviews({reviews_summary , productSlug}: Props){

    
return (
    <div>
        <div className={styles.tabTitle}>
            <MessageCircle className="size-4 md:size-6 me-2"/>
            <h1>دیدگاه کاربران</h1>                
        </div>        

        <div className="flex flex-wrap justify-center py-4">
            <div className="w-full lg:w-1/2 mb-4 lg:mb-0">
                <ReviewSummary reviews_summary={reviews_summary}/>
            </div>

            <div className="lg:order-first w-full lg:w-1/2">
                <ReviewForm productSlug={productSlug}/>
            </div>
        </div>
        <ReviewListSection productSlug={productSlug}/>
    </div>        
)
} 