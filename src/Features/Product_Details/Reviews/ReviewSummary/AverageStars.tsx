import { cn } from "@/shared/lib/utils";
import { Star } from "lucide-react";

interface Props {
  StarclassName?: string;
  average: number;
}

export default function AverageStars({
  StarclassName = "",
  average,
}: Props) {
  const percentage = (Math.max(0, Math.min(average, 5)) / 5) * 100;
  

  return (
    <div className={"relative inline-flex"}>
      {/* Stars Background */}
      <div className="flex">
        {Array.from({ length: 5 }).map((_, index) => (
          <Star
            key={index}
            strokeWidth={1.5}
            className={cn("mx-px size-6 fill-transparent text-gray-300 lg:size-7" , StarclassName)}
          />
        ))}
      </div>

      {/* Filled Stars */}
      <div
        className="absolute inset-0 overflow-hidden"
        style={{ width: `${percentage}%` }}
      >
        <div className="flex w-max">
          {Array.from({ length: 5 }).map((_, index) => (
            <Star
              key={index}
              strokeWidth={1.5}
              className={cn("mx-px size-6 fill-golden-star text-golden-star lg:size-7" , StarclassName)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}