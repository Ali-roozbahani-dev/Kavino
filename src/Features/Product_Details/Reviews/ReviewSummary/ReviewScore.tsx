import AverageStars from "./AverageStars";

interface Props{
    total_count: number;                
    average_rate: number;
}

export default function ReviewScore({total_count , average_rate}: Props){

    return (
        <div className="flex flex-col items-center justify-center">
            <div className="font-bold text-[24px] lg:text-[28px]">{average_rate}</div>
            <div className="mb-2 lg:mb-3">
                <AverageStars average={average_rate}/>
            </div>
            <span className="text-[13px] lg:text-[14px]">({total_count}) نظر</span>            
        </div>
    )
}