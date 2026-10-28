import {
  Truck,
  ShieldCheck,
  Headset,
  CreditCard,
} from "lucide-react";


const storeFeatures = [  
  {
    icon: ShieldCheck,
    title: "ضمانت اصالت",
    description: "کالای اورجینال",
  },
  {
    icon: Headset,
    title: "پشتیبانی ۲۴ ساعته",
    description: "همیشه کنار شما",
  },
  {
    icon: CreditCard,
    title: "پرداخت امن",
    description: "درگاه بانکی معتبر",
  },
  {
    icon: Truck,
    title: "ارسال سریع",
    description: "ارسال به سراسر کشور",
  }
];

export default function FeaturesSection(){

    return (
        <div className="flex flex-wrap justify-between border items-center mt-6 mb-3 bg-[#f1f1f1]">
            {storeFeatures.map((item, i)=>(
                <div key={i} className="w-full md:w-1/4 text-center p-4 
                border-b md:border-b-0 md:border-e md:last:border-0 last:border-0 font-semibold">
                    <item.icon strokeWidth={1.5} className="mx-auto w-9 h-9 lg:w-10 lg:h-10"/>
                    <h2 className="mt-2 text-[15px] lg:text-[16px]">{item.title}</h2>
                    <p className="text-[13px] lg:text-[14px] text-primary-text">{item.description}</p>
                </div>  
            ))}
        </div>
    )
}