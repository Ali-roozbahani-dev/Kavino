import Link from "next/link";
import { Brand as Tbrand } from "../../../../entities/Product/types";
import Image from "next/image";

export default function Brand({ brand }: { brand: Tbrand }) {
  const { name, logo, slug } = brand;

  return (
    <div className="relative my-1 flex items-center justify-between py-5">
      <Link
        href={`/brand/${slug}`}
        className="text-blue-500 font-semibold text-[18px]"
      >
        <span className="text-[15px]">{name}</span>
      </Link>
      {logo.length && (
        <Image
          src={logo}
          width={500}
          height={500}
          alt={`${name} image`}
          className="w-30 absolute left-0 top-0"
        />
      )}
    </div>
  );
}
