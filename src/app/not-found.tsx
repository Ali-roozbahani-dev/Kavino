import Footer from "@/components/ui/Footer/Footer";
import Header from "@/components/ui/Header/Header";
import Main from "@/components/ui/Main";
import Image from "next/image";
import Link from "next/link";
import { RxHome } from "react-icons/rx";



export default function NotFound() {

  return (
    <>
    <Header />    
    <Main>
      <div className="max-w-md text-center mx-auto">

        <Image
          src="/not-found.png"
          alt="404"
          width={420}
          height={420}
          priority
          className="mx-auto"
        />

        <h1 className="mt-8 text-3xl font-bold">
          صفحه مورد نظر یافت نشد
        </h1>

        <p className="mt-3 text-muted-foreground leading-8">
          ممکن است صفحه حذف شده باشد یا آدرس را اشتباه وارد کرده باشید.
        </p>

        <Link
          href="/"
          className="mt-8 inline-flex h-11 items-center justify-center rounded-xl bg-theme-2 px-8 text-white"
        >
            <RxHome className="size-5 me-2"/>
          بازگشت به صفحه اصلی
        </Link>

      </div>  
    </Main> 
    <Footer />   
    </>
  );
}

