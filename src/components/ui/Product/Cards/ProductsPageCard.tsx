import { Badge } from "@/components/ui/badge";
import { Card, CardFooter, CardTitle } from "@/components/ui/card";
import { ProductListItem } from "@/entities/Product/types";
import { getDiscountPercentage } from "@/shared/utils/getDiscountPercentage";
import { getImageUrl } from "@/shared/lib/getImageUrl";
import Image from "next/image";
import Link from "next/link";
import NoStock from "./NoStock";

export default function ProductsPageCard({
  product,
}: {
  product: ProductListItem;
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
          relative mx-auto w-full pt-0 border overflow-hidden

          /* Mobile */
          flex flex-row-reverse h-[170px]

          /* Desktop */
          md:flex md:flex-col md:p-0 md:h-full
        "
      >        

        {/* Image */}
        <div
          className="
            relative shrink-0 w-[130px] h-full

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
            flex flex-col flex-1 min-w-0 justify-between py-3 px-3

            md:block md:p-0
          "
        >
          <CardTitle
            className="
              text-soft-text font-vazir
              text-[13px] xl:text-[14px]
              line-clamp-3 leading-7

              md:px-3 md:line-clamp-2
            "
          >
            {name}
          </CardTitle>

          <CardFooter
            className="
              font-bold w-full mx-auto py-2 h-[55px] rounded-none
              px-3 border-0 md:bg-transparent
            "
          >
            {/* Discount Badge */}
        {hasDiscount && (
          <Badge
            className="
              md:absolute z-10 bg-[#ee2e2e]
              py-2 right-2 top-2 rounded-sm

              md:py-3 md:rounded-full md:text-[15px]
            "
          >
            {discountPercentage.toLocaleString("fa-IR")}%
          </Badge>
        )}
            <div className="flex flex-col items-end w-full gap-1">
              
              {/* قیمت قبل از تخفیف */}
              {hasDiscount && (
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
              <div className="flex items-center gap-1 text-[15px] xl:text-[17px]">
                <span>
                  {final_price.toLocaleString("fa-IR")}
                </span>

                <span className="text-[11px] xl:text-[12px] font-normal">
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
