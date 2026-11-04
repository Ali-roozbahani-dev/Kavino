import Main from "@/components/ui/Main";
import Image from "next/image";
import Link from "next/link";
import { RxHome } from "react-icons/rx";




export default function NotFoundContent() {
  

  return (
       
    <Main>
      <div className="max-w-md text-center mx-auto mt-10">
        <Image
          src="/not-found.png"
          alt="404"
          width={420}
          height={420}
          priority
          className="mx-auto"
          unoptimized
        />

        <h1 className="mt-8 text-xl md:text-3xl font-bold">
          صفحه مورد نظر یافت نشد
        </h1>

        <p className="mt-3 text-muted-foreground leading-8 text-sm md:text-md">
          ممکن است صفحه حذف شده باشد یا آدرس را اشتباه وارد کرده باشید.
        </p>

        <Link
          href="/"
          className="mt-8 inline-flex h-9 md:h-11 items-center justify-center 
          rounded-md md:rounded-xl text-sm md:text-md bg-theme-2 px-5 md:px-8 text-white"
        >
            <RxHome className="size-5 me-2"/>
          بازگشت به صفحه اصلی
        </Link>

      </div>  
    </Main>
  );
}