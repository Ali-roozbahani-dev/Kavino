import Image from "next/image";


export default function EmptyCart(){

    return (
        <div className="mx-auto max-w-150 pt-5 pb-7">
            <Image src={"/Empty-Cart.png"} width={1920} height={1663} alt="empty cart"/>
            <p className="font-bold text-center text-[18px] md:text-[20px] text-[#506a77]">سبد خرید شما خالی است.</p>
        </div>
    )
}