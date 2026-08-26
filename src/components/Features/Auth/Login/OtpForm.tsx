"use client"

import { REGEXP_ONLY_DIGITS } from "input-otp"
import { Field } from "@/components/ui/field"
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp"
import CountDown from "./CountDown"
import EditNumLink from "./EditNumLink"
import {useState } from "react"
import RequestOtpBtn from "./RequestOtpBtn"
import { useRouter } from "next/navigation"
import { useRequestOtp } from "../../../../entities/Auth/hooks/useRequestOtp"
import { useVerifyOtp } from "../../../../entities/Auth/hooks/useVerifyOtp"
import { useOtpCountdown } from "../../../../entities/Auth/hooks/useOtpCountdown"
import { otpSchema } from "../../../../entities/Auth/schema/otpSchema"
import { loginSchema } from "../../../../entities/Auth/schema/loginSchema"




interface Props{
  mobile: string;
  callbackUrl: string;
}


export default function OtpForm({mobile , callbackUrl}: Props) {
 const router = useRouter();
 const {requestOtpMutation , isSendingRequest} = useRequestOtp();
 const {verifyOtpMutation, isVerifyingOtp } = useVerifyOtp({
      phone_number: mobile,
      callbackUrl
  });
 const {secondsLeft} = useOtpCountdown(); 
 const [otp, setOtp] = useState(""); 
 


 const verifyOtpHandler = (otp: string)=>{
  const validation = otpSchema.safeParse({otp});

  if(!validation.success) return;
  verifyOtpMutation(otp);
 } 


  const sendRequestHandler = ({ mobile }: { mobile: string }) => {
    const validation = loginSchema.safeParse({ mobile});

    if (!validation.success) {
      router.push("/Login");
      return;
    }

    requestOtpMutation(
      { mobile },
      {
        onSuccess: () => {
          setOtp("");
        },
      }
    );
  }; 




  return (
    <form>
    <Field className="w-fit ltr mx-auto">      
      <InputOTP 
      id="digits-only" 
      maxLength={6} 
      value={otp}
      disabled={isVerifyingOtp}
      onChange={(value) => {
        setOtp(value);

        if (value.length === 6) {
          verifyOtpHandler(value);
        }
      }}
      pattern={REGEXP_ONLY_DIGITS}>
        <InputOTPGroup>
          <InputOTPSlot index={0} className="data-[active=true]:ring-outline-input data-[active=true]:border-theme-4 mx-1 h-13 w-10 border rounded-md"/>
          <InputOTPSlot index={1} className="data-[active=true]:ring-outline-input data-[active=true]:border-theme-4 mx-1 h-13 w-10 border rounded-md"/>
          <InputOTPSlot index={2} className="data-[active=true]:ring-outline-input data-[active=true]:border-theme-4 mx-1 h-13 w-10 border rounded-md"/>
          <InputOTPSlot index={3} className="data-[active=true]:ring-outline-input data-[active=true]:border-theme-4 mx-1 h-13 w-10 border rounded-md"/>
          <InputOTPSlot index={4} className="data-[active=true]:ring-outline-input data-[active=true]:border-theme-4 mx-1 h-13 w-10 border rounded-md"/>
          <InputOTPSlot index={5} className="data-[active=true]:ring-outline-input data-[active=true]:border-theme-4 mx-1 h-13 w-10 border rounded-md"/>
        </InputOTPGroup>
      </InputOTP>
    </Field>

  

  {secondsLeft <= 0 ?
    <RequestOtpBtn 
    className="my-4"
    onClick={()=> sendRequestHandler({mobile})}
    isPending={isSendingRequest || isVerifyingOtp}
    resend={true}
    disabled={isSendingRequest || secondsLeft > 0 || isVerifyingOtp}
    />
    :    
    <CountDown 
    className="my-5"
    secondsLeft={secondsLeft}     
    />
          
  }

    <EditNumLink />
    </form>
  )
}
