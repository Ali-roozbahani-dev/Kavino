import { LoginForm } from "@/Features/Auth/Login/LoginForm";
import Image from "next/image";
import Link from "next/link";



type PageProps = {
  searchParams: Promise<{
    callbackUrl?: string;   
  }>;
};

export default async function LoginPge({searchParams}: PageProps){
    const {callbackUrl = "/"} = await searchParams; 

    return(      
      <div className="h-screen md:bg-[url('/pexels-artbovich-7535073.jpg')] bg-cover bg-center">
        <div className="bg-[rgba(254,254,254,0.5)] h-screen px-10 pt-10 md:pt-30">
          <div className="max-w-110 md:max-w-90 bg-white p-5 mx-auto rounded-lg md:shadow-[0_0_5px_1px_#cccccc]">
            <Link href={"/"} className="block w-50 md:w-30 mx-auto">
              <Image 
              src={"/mainLogo.png"} 
              width={1000} 
              height={1000} alt="logo"
              className="w-full" 
              />
            </Link>
            <h1 className="font-bold text-[18px] text-center mt-5 mb-20">ورود / ثبت نام</h1>             
            <LoginForm callbackUrl={callbackUrl}/>
          </div> 
        </div>
      </div>      
      
    )
}