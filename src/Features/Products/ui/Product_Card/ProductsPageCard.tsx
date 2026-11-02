import { Badge } from "@/ui/badge";
import { Card, CardFooter, CardTitle } from "@/ui/card";
import { getDiscountPercentage } from "@/shared/utils/getDiscountPercentage";
import { getImageUrl } from "@/shared/lib/getImageUrl";
import Image from "next/image";
import Link from "next/link";
import NoStock from "./NoStock";
import { ProductListItem } from "@/entities/Product";

export default function ProductsPageCard({
  product,
}: {
  product: ProductListItem ;
}) {
  const { name, image, price, final_price, has_stock } = product;


  const discountPercentage = getDiscountPercentage(product.price , product.final_price);

  const hasDiscount = discountPercentage > 0;

  return (
    <Link
      target="_blank"
      href={`/product/${product.slug}`}
      className="block relative hover:shadow-[0px_0px_5px_1px_#e3e2e2]"
    >
      <Card
        className="
          relative mx-auto w-full pt-0 md:border overflow-hidden p-1

          /* Mobile */
          flex flex-row-reverse h-[170px]

          /* Desktop */
          md:flex md:flex-col md:p-0 md:h-full
        "
      >        

        {/* Image */}
        <div
          className="
            relative shrink-0 w-[115px] h-full

            md:w-full md:h-auto
          "
        >
          {!has_stock && <NoStock />}

          <Image
            src={getImageUrl(image)}
            width={2000}
            height={2000}
            alt={name}
            className={`
              w-full h-full object-contain

              md:h-auto
              ${has_stock ? "" : "opacity-60"}
            `}
          />
        </div>

        {/* Content */}
        <div
          className="
            flex flex-col flex-1 min-w-0 justify-between py-3 md:px-1

            md:block md:p-0
          "
        >
          <CardTitle
            className="
              text-soft-text font-vazir
              text-[10px] md:text-[13px] xl:text-[14px]
              line-clamp-3 leading-5.5

              md:px-3 md:leading-7 md:line-clamp-2
            "
          >
            {name}
          </CardTitle>

          <CardFooter
            className="
              font-bold w-full mx-auto py-2  md:h-[55px] rounded-none
              px-1.5 md:px-3 border-0 md:bg-transparent relative
            "
          >
            {/* Discount Badge */}
        {(hasDiscount && has_stock) && (
          <Badge
            className="
              absolute z-10 bg-[#ee2e2e]
              py-1.5 px-1 right-1 top-1 rounded-xs

              md:py-3 md:px-2 md:rounded-full text-[11px] md:text-[15px]
            "
          >
            {discountPercentage.toLocaleString("fa-IR")}%
          </Badge>
        )}
            <div className="flex flex-col items-end w-full gap-1">
              
              {/* قیمت قبل از تخفیف */}
              {(hasDiscount && has_stock) && (
                <div
                  className="
                    flex items-center gap-1
                    text-primary-text
                    text-[11px] xl:text-[12px]
                    font-normal
                  "
                >
                  <span className="line-through">
                    {price.toLocaleString("fa-IR")}
                  </span>

                  <span>تومان</span>
                </div>
              )}

              {/* قیمت نهایی */}
              <div className="flex items-center gap-1 text-[14px] md:text-[15px] xl:text-[17px]">
                <span>
                  {final_price.toLocaleString("fa-IR")}
                </span>

                <span className="text-[10px] xl:text-[11px] font-normal">
                  تومان
                </span>
              </div>

            </div>
          </CardFooter>
        </div>
      </Card>
    </Link>
  );
}
