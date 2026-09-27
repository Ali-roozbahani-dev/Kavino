"use client";
import { useEffect, useRef, useState } from "react";
import Description from "./Description";
import Reviews from "../Reviews/Reviews";
import TabsHeader from "./TabsHeader";
import ProductSpecifications from "@/components/Features/Product_Details/ProductTabs/ProductSpecifications";
import ProductPurchase from "../ProductPurchase/ProductPurchase";
import { ProductAttribute, ProductVariant, ReviewsSummary } from "@/entities/Product";

interface Props {
  variants: ProductVariant[];
  attributes: ProductAttribute[];
  description: string;
  reviews_summary: ReviewsSummary;
  productSlug: string;
}
export default function ProductTabs({
  description,
  attributes,
  variants,
  reviews_summary,
  productSlug
}: Props) {
  const [activeTab, setActiveTab] = useState("Description");
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const sections = containerRef.current?.querySelectorAll("section");
    if (!sections || sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting);
        if (visible.length === 0) return;

        const topMost = visible.reduce((closest, entry) =>
          entry.boundingClientRect.top < closest.boundingClientRect.top
            ? entry
            : closest,
        );
        setActiveTab(topMost.target.id);
      },
      { rootMargin: "-40% 0px -55% 0px", threshold: 0 },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={containerRef} className="md:border-x relative">
      <TabsHeader reviews_summary={reviews_summary} activeTab={activeTab} />

      <div className="flex">
        <div className="w-full xl:px-2 xl:w-3/4">
          <section
            id="Description"
            className="py-3 px-2 lg:p-5 scroll-mt-[160px] lg:scroll-mt-[190px]"
          >
            <Description description={description} />
          </section>
          <section
            id="Specifications"
            className="py-3 px-2 lg:p-5 scroll-mt-[160px] lg:scroll-mt-[190px]"
          >
            <ProductSpecifications
              attributes={attributes}              
            />
          </section>
          <section
            id="Reviews"
            className="py-3 px-2 lg:p-5 scroll-mt-[160px] lg:scroll-mt-[190px]"
          >
            <Reviews 
            reviews_summary={reviews_summary}
            productSlug={productSlug}
            />
          </section>
        </div>

        <div className="hidden xl:block w-1/4 py-5 pe-5 relative">
          <div className="sticky top-50 w-full">
            <ProductPurchase             
            variants={variants} 
            PurchaseInTabs={true} 
            />
          </div>
        </div>
      </div>
    </div>
  );
}
