import { DistributionCount } from "@/entities/Product";
import RatingBar from "./RatingBar";

interface Props {
    counts: DistributionCount;
    total_count: number;
}
type Rating = keyof DistributionCount;

const ratings: Rating[] = ["5", "4", "3", "2", "1"];

export default function RatingDistribution({ total_count, counts }: Props) {

  // محاسبه درصد توزیع کامنت ها
  const getPercent = (rating: string) => {
    if (!total_count) return 0;

    return ((counts[rating as keyof DistributionCount] ?? 0) / total_count) * 100;
  };

  return (
    <div className="w-max mx-auto ltr">
      {ratings.map((rating) => (
        <RatingBar
          key={rating}
          percent={getPercent(rating)}
          rating={rating}
          count={counts[rating as keyof DistributionCount] ?? 0}
        />
      ))}
    </div>
  );
}