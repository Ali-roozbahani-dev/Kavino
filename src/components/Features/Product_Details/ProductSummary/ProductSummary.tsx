import Colors from "./Colors";
import Brand from "./Brand";
import Rating from "./Rating";
import MainProperties from "./MainProperties";
import {
  ProductAttribute,
  ProductVariant,
  ReviewsSummary,
  Brand as Tbrand,
} from "../../../../entities/Product/types";
import FavoriteToggle from "@/components/Features/Favorites/ui/FavoriteToggle";
import { ShareProduct } from "@/components/Features/Product_Details/ShareProduct";

interface Props {
  reviews_summary: ReviewsSummary;
  variants: ProductVariant[];
  name: string;
  brand: Tbrand;
  attributes: ProductAttribute[];
  highlight_attributes: ProductAttribute[];
}

export default function ProductSummary({
  reviews_summary,
  variants,
  name,
  brand,
  attributes,
  highlight_attributes
}: Props) {

  return (
    <div className="w-full mt-5 md:mt-0 md:p-3 lg:p-5">
      <div className="mb-4 flex justify-end items-center xl:hidden">
        <div className="flex-center text-primary-text2">
          {/* <FavoriteToggle /> */}
          <ShareProduct />
        </div>
      </div>
      <h1 className="font-semibold text-[16px] md:text-[17px] lg:text-[20px] lg:border-b lg:pb-5">
        {name}
      </h1>
      <Brand brand={brand} />
      <Rating reviews_summary={reviews_summary} />
      <Colors variants={variants} />
      <MainProperties 
      highlight_attributes={highlight_attributes}
      attributes={attributes}
      />
    </div>
  );
}
