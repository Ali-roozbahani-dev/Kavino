"use client";

import Main from "@/components/ui/Main";
import { Button } from "@/components/ui/button";
import { RotateCcw } from "lucide-react";
import Image from "next/image";

export default function Error({
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <>    
    <Main>
      <div className="max-w-md text-center mx-auto mt-20">
        <Image
          src="/error.png"
          alt="Error"
          width={420}
          height={420}
          priority
          className="mx-auto"
        />

        <h1 className="mt-8 text-3xl font-bold">
          مشکلی پیش آمده است
        </h1>

        <p className="mt-3 text-muted-foreground leading-8">
          متأسفانه هنگام پردازش درخواست شما خطایی رخ داده است.
        </p>

        <Button
          onClick={reset}
          className="mt-8 h-11 rounded-xl px-8 bg-theme-2 text-white"
        >
          <RotateCcw className="size-5"/>
          تلاش مجدد
        </Button>

      </div> 
    </Main>    
    </>
  );
}