import { Brand } from "@/entities/Product/types";
import Image from "next/image";
import Link from "next/link";

export default function BrandItem({ brand }: { brand: Brand }) {
  return (
    <Link
      href={`/brand/${brand.slug}`}
      className="block h-[110px] w-[115px] md:w-[120px] rounded-lg p-2
      overflow-hidden flex-center bg-white"
      style={{
        boxShadow:
          "rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px",
      }}
    >      
        <Image
          src={brand.logo}
          width={120}
          height={120}
          alt={`${brand.name} logo`}
          className="w-full max-h-[110px]"
        />      
    </Link>
  );
}