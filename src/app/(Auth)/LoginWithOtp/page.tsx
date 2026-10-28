import OtpForm from "@/Features/Auth/Login/OtpForm";
import { getSafeCallbackUrl } from "@/shared/lib/safeRedirect";
import { ArrowLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";


type PageProps = {
  searchParams: Promise<{
    callbackUrl?: string;
    mobileNum : string;    
  }>;
};

export default async function LoginWithOtpPge({searchParams}: PageProps){
    const { callbackUrl: rawCallbackUrl, mobileNum } = await searchParams;
    const callbackUrl = encodeURIComponent(getSafeCallbackUrl(rawCallbackUrl));

    if (!mobileNum) {
      redirect(`/Login?callbackUrl=${callbackUrl}`);
    }

    

    

    return(
      <div className="h-screen md:bg-[url('/pexels-artbovich-7535073.jpg')] bg-cover bg-center">
        <div className="bg-[rgba(254,254,254,0.5)] h-screen px-10 pt-5 md:pt-25">
          <div className="max-w-110 md:max-w-90 bg-white p-5 mx-auto rounded-lg md:shadow-[0_0_5px_1px_#cccccc]">
            <Link href={`/Login/`} className="block ms-auto w-max">
              <ArrowLeft className="text-primary-text"/>              
            </Link>
            <Link href={"/"} className="mx-auto block w-50 md:w-30">
              <Image 
              src={"/mainLogo.png"} 
              width={1000} 
              height={1000} alt="logo"
              className="w-full" 
              />
            </Link>
            <h1 className="font-bold text-[18px] text-center mt-5 mb-3">کد ارسال شده را وارد کنید</h1> 
            <p className="text-primary-text text-[13px] md:text-[14px] mb-10 text-center">کد 6 رقمی به شماره {mobileNum} ارسال شد .</p>  
                     
            <OtpForm 
            mobile={mobileNum}
            callbackUrl={callbackUrl}
            />                        
          </div> 
        </div>
      </div>      
    )
}