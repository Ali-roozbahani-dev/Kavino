import ProductGallery from "@/components/Features/Product_Details/ProductGallery/ProductGallery";
import ProductSummary from "@/components/Features/Product_Details/ProductSummary/ProductSummary";
import Main from "@/components/Layout/Main/Main";
import ProductBreadcrumb from "@/entities/Product/ui/ProductBreadcrumb";
import ProductPurchase from "@/components/Features/Product_Details/ProductPurchase/ProductPurchase";
import ProductTabs from "@/components/Features/Product_Details/ProductTabs/ProductTabs";
import { getProduct } from "@/entities/Product/api/getProduct";
import ProductStoreInitializer from "@/components/Features/Product_Details/ProductStoreInitializer";
import { createProductJsonLd } from "@/entities/Product/lib/createProductJsonLd";

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function ProductPage({ params }: PageProps) {
  const { slug } = await params;
  const decodedSlug = decodeURIComponent(slug);
  const product = await getProduct(decodedSlug);
  
  const {
    id,
    attributes,
    highlight_attributes,
    brand,
    category,
    description,
    images,
    name,
    slug: productSlug,
    variants,
    reviews: reviews_summary,
  } = product;
  const jsonLd = createProductJsonLd(product);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd),
        }}
      />
      <ProductStoreInitializer defaultVariantId={variants[0].id} />
      <Main className="lg:px-5 2xl:px-10">
        <ProductBreadcrumb name={name} path={category.path} />

        <div className="flex flex-wrap mb-5">
          <div className="w-full lg:w-1/2 xl:w-2/5">
            <ProductGallery images={images} />
          </div>
          <div className="w-full lg:w-1/2 xl:w-1/4 xl:flex-1">
            <ProductSummary
              reviews_summary={reviews_summary}
              variants={variants}
              name={name}
              brand={brand}
              attributes={attributes}
              highlight_attributes={highlight_attributes}
            />
          </div>
          <div
            className="bg-white block w-full xl:w-1/4 xl:ms-auto border-t xl:border-0
              z-100 xl:z-auto fixed bottom-0 right-0 xl:relative"
          >
            <ProductPurchase            
            variants={variants} 
            />
          </div>
        </div>
        <ProductTabs
          description={description}
          attributes={attributes}
          variants={variants}
          reviews_summary={reviews_summary}
          productSlug={productSlug}
        />
      </Main>
    </>
  );
}
