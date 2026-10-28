import { CardFooter } from "../card";


export default function FooterWithDiscount(){

    return (
        <CardFooter className="font-bold justify-between w-full mx-auto px-3 border-0">
          <span className="text-primary-text line-through pe-1 text-[13px] xl:text-[14px]">
            {"7,300,000"}
          </span>

          <div className="text-[15px] xl:text-[17px]">
            <span>{}</span>
            <span className="ms-2 text-[11px] lg:text-[12px]">تومان</span>
          </div>
        </CardFooter>
    )
}