import {
  Truck,  
  Headset,
  CreditCard,
} from "lucide-react";

const storeFeatures = [    
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

export default function StoreFeatures(){

    return (
      storeFeatures.map((item , i)=>(
        <div key={i} className="flex items-center p-2 not-last:mb-1 rounded-sm bg-[#f4f4f4]">
            <item.icon strokeWidth={1.8} className="me-3 text-primary-text"/>
            <div>
                <h3 className="text-[15px]">{item.title}</h3>
                <p className="text-primary-text text-[13px]">{item.description}</p>
            </div>
        </div>
      ))        
    )
}