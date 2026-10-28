import { CardFooter } from "../card";


export default function FooterWithoutDiscount({price}: {price : number}){

    return (
        <CardFooter className="font-bold justify-center w-full mx-auto px-3 border-0"> 
            <div className="ms-auto">
                <span className="text-[15px] xl:text-[17px]">{price.toLocaleString("FA")}</span>
                <span className="ms-2 text-[11px] lg:text-[12px]">تومان</span>
            </div>         
        </CardFooter>
    )
}