"use client"
import { useState } from "react"
import { InputGroup,InputGroupInput } from "@/components/ui/input-group";
import { Label } from "@/components/ui/label";
import RequestOtpBtn from "./RequestOtpBtn";
import FieldError from "@/components/ui/Error/FieldError";
import { useRequestOtp } from "./hooks/useRequestOtp";
import { loginSchema } from "./schema/loginSchema";


interface Tprops{
  callbackUrl: string;  
}

export function LoginForm({callbackUrl}: Tprops) {
  const [mobile , setMobile] = useState("");
  const [validationError , setValidationError] = useState("");
  const {requestOtpMutation , isSendingRequest} = useRequestOtp();

  
  
  
  const onSubmitHandler = ({mobile}: {mobile: string})=>{
    const validation = loginSchema.safeParse({
        mobile,
      });
      
      if (!validation.success) {        
        setValidationError(validation.error.issues[0]?.message);
        return;
      }
    requestOtpMutation({mobile , callbackUrl})              
  }

  return (
    <form onSubmit={(e)=>{
      e.preventDefault()
      onSubmitHandler({mobile})
      }}>
        <Label 
        htmlFor="mobile" 
        className="my-2 text-[12px] md:text-[13px] text-primary-text">
          شماره موبایل خود را وارد کنید 
        </Label>
        <InputGroup className={`ltr h-max mb-3 rounded-sm 
        has-[[data-slot=input-group-control]:focus-visible]:ring-outline-input
        has-[[data-slot=input-group-control]:focus-visible]:border-theme-4
        has-[[data-slot=input-group-control]:focus-visible]:ring-offset-0
        focus-within:ring-0
        ${validationError.length > 0 ? "border-red-600" : ""}`}>
          <InputGroupInput 
          value={mobile}
          onChange={(e)=>{ 
            setValidationError("")
            setMobile(e.target.value)
          }}
          id="mobile" 
          type="text" 
          className="focus-within:outline-0 py-5 rounded-sm text-[13px] md:text-[14px]"        
            
          />                    
        </InputGroup>
        
        {validationError.length > 0 && <FieldError className="mb-4" message={validationError}/>}
        <RequestOtpBtn         
        disabled={isSendingRequest}
        isPending={isSendingRequest}
        />
    </form>
  )
}
