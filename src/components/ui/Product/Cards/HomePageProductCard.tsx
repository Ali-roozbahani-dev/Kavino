import { Badge } from "@/components/ui/badge"
import {
  Card,  
  CardFooter,  
  CardTitle,
} from "@/components/ui/card"
import { ProductListItem } from "@/entities/Product/types"
import { getDiscountPercentage } from "@/utils/getDiscountPercentage"
import Image from "next/image"
import Link from "next/link"

export default function HomePageProductCard({product}: {product: ProductListItem}) {
  
  const discountPercentage = getDiscountPercentage(product.price , product.final_price);
  


  return (
    <Link 
    href={`/product/${product.slug}`} 
    target="_blank" 
    className="block w-[197px]"
    >
      <Card className="relative mx-auto w-full pt-0 border rounded-lg">       
          <Badge className="absolute bg-[#ee2e2e] top-2 py-3 right-2 rounded-full md:text-[15px]">
            {discountPercentage.toLocaleString("fa-IR")}
            %
          </Badge>          
          <Image
          src={`${process.env.NEXT_PUBLIC_API_URL}${product.image}`}
          width={196}
          height={2000}
          alt={product.name}
          className="w-full h-auto"          
        />        
          
        <CardTitle className="font-normal font-vazir px-3 text-[14px] md:text-[15px] lg:text-[16px] line-clamp-2">
          {product.name}          
        </CardTitle>
        <CardFooter className="font-bold w-full mx-auto px-3 border-0 py-2 bg-transparent">
          <div className="flex flex-col items-end w-full gap-1">
            {/* قیمت قبل از تخفیف */}
            <div className="flex items-center gap-1 text-primary-text text-[11px] xl:text-[12px] font-normal">
              <span className="line-through">
                {product.price.toLocaleString("fa-IR")}
              </span>
              <span>تومان</span>
            </div>
            
            {/* قیمت اصلی */}
            <div className="flex items-center gap-1 text-[15px] xl:text-[17px]">
              <span>{product.final_price.toLocaleString("fa-IR")}</span>
              <span className="text-[11px] xl:text-[12px] font-normal">
                تومان
              </span>
            </div>


          </div>
        </CardFooter>
              
      </Card>
    </Link>
  )
}