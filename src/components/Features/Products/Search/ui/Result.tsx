import { Card, CardContent, CardHeader } from "@/components/ui/card";
import Link from "next/link";
import { MdChevronLeft } from "react-icons/md";
import ResultBody from "./ResultBody";
import { ProductListItem } from "@/entities/Product/types";

interface Tprops {
  results: ProductListItem[] | undefined;
  searchValue: string;
  isPending: boolean;
  openResult: boolean;
}

export function Result({
  results,
  searchValue,
  isPending,
  openResult,
}: Tprops) {
  
  if (searchValue.trim().length === 0 || !openResult) {
    return null;
  }
  

  return (
    <Card className="mx-auto shadow rounded-b-md w-full absolute top-14 right-0 z-100">
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <span className="font-thin">نتیجه برای ...</span>
            <span className="ms-2">{searchValue}</span>
          </div>
          <Link
            href={`/search/${searchValue}`}
            className={`text-theme-4 ${results?.length === 0 ? "pointer-events-none opacity-50" : ""}`}
          >
            <span className="font-bold text-[14px]">مشاهده همه نتایج</span>
            <MdChevronLeft className="inline-block text-[18px] ms-1" />
          </Link>
        </div>
      </CardHeader>
      <CardContent className="-mb-(--card-spacing)">
        <ResultBody results={results} isPending={isPending} />
      </CardContent>
    </Card>
  );
}
