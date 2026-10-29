import { stripHtmlTags } from "@/shared/utils/stripHtmlTags";
import { ProductDetails } from "../models";


export function createProductJsonLd(product: ProductDetails) {

  if(!product?.variants[0]) return;

  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    image: product.images.map((img) => img.image),
    description: stripHtmlTags(product.description),
    brand: {
        "@type": "Brand",
        name: product.brand.name,
    },
    sku: product.variants[0].sku,
    offers: {
        "@type": "Offer",
        priceCurrency: "IRR",
        price: product.variants[0].price,
        availability:
        product.variants[0].stock > 0
            ? "https://schema.org/InStock"
            : "https://schema.org/OutOfStock",
    },
    };
}