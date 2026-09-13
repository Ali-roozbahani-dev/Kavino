import { ProductListItem} from "@/entities/Product/types";
import { getImageUrl } from "@/shared/lib/getImageUrl";
import Image from "next/image";
import Link from "next/link";

export default function ResultItem({ product }: { product: ProductListItem }) {
  return (
    <li className="bg-[#eef7ff] mb-2">
      <Link target="blank" href={`/product/${product.slug}`} className="flex items-center">
        <Image
          src={getImageUrl(product.image)}
          alt="تصویر نتایج"
          width={1200}
          height={1200}
          className="w-20"
          unoptimized
        />
        <h2 className="text-[13px] ms-3">{product.name}</h2>
      </Link>
    </li>
  );
}
