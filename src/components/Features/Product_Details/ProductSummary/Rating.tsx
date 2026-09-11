import { Star } from "lucide-react";
import { ReviewsSummary } from "../../../../entities/Product/types";

export default function Rating({
  reviews_summary,
}: {
  reviews_summary: ReviewsSummary;
}) {
  const { average_rate, total_count } = reviews_summary;

  return (
    <div className="w-max flex items-start">
      <div>
        <Star className="size-4.5 mx-px fill-golden-star text-golden-star" />
      </div>
      {total_count > 0 ?
      <>
      <span className="text-[14px] md:text-[15px] ms-2 me-1">
        {average_rate}
      </span>
      <span className="text-[14px] md:text-[15px] text-primary-text">
        (امتیاز {total_count} نفر)
      </span>
      </>
      :
      <span className="text-[14px] md:text-[15px] text-primary-text ms-2">( امتیازی ثبت نشده )</span>
      }
    </div>
  );
}
