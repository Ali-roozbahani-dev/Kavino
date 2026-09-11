import { formatPersianDate } from "@/utils/date";
import AverageStars from "../ReviewSummary/AverageStars";

interface Props{
  rating: number;
  user: string;
  created_at: string;
}

export default function ReviewHeader({created_at , rating , user}: Props) {
  


  return (
    <div className="flex justify-between items-center">
      <div>
        <span className="font-bold text-[14px] md:text-[15px]">{user}</span>
      </div>

      <div className="flex items-center">
        <span className="me-4 text-primary-text2 text-[12px] lg:text-[13px]">
          {formatPersianDate(created_at)}
        </span>   

        <AverageStars 
        average={rating} 
        StarclassName="size-3 lg:size-3.5"
        />        
      </div>
    </div>
  );
}
