"use client"
import { Input } from "@/components/ui/input";
import {
  Field,
  FieldContent,
  FieldLabel,
} from "@/components/ui/field";
import { useFormContext } from "react-hook-form";
import FieldError from "@/components/ui/Error/FieldError";
import { InputGroup, InputGroupAddon, InputGroupInput } from "@/components/ui/input-group";


export default function AddressReceiverForm(){
    const {register , formState: {errors}} = useFormContext();

    const nameError = errors?.receiver_name;
    const phoneError = errors?.receiver_phone;
    

    return (
        <>
        <Field>
            <FieldLabel htmlFor="firstName">نام و نام خانوادگی گیرنده</FieldLabel>

            <FieldContent>
                <Input 
                {...register("receiver_name")}
                id="firstName" 
                className="py-5 rounded-md placeholder:text-[12px] placeholder:md:text-[13px] placeholder:lg:text-[15px]
                text-[13px] md:text-[14px] lg:text-[15px]" 
                placeholder="نام خود را وارد کنید" 
                />
            </FieldContent>
            {typeof nameError?.message === "string" && (
            <FieldError message={nameError.message} />
            )}       
        </Field>

        <Field>
            <FieldLabel htmlFor="phone">شماره موبایل گیرنده</FieldLabel>

            <FieldContent>
                <InputGroup className="py-5 rounded-md ltr">
                <InputGroupAddon className="text-[13px] md:text-[14px] lg:text-[15px] mt-px">
                    +98
                </InputGroupAddon>

                <InputGroupInput
                    {...register("receiver_phone")}
                    id="phone"
                    dir="ltr"
                    maxLength={10}
                    placeholder="912*******"
                    className="placeholder:text-[12px] placeholder:md:text-[13px] placeholder:lg:text-[15px]
                    text-[13px] md:text-[14px] lg:text-[15px]"
                />
                </InputGroup>
            </FieldContent>
            {typeof phoneError?.message === "string" && (
            <FieldError message={phoneError.message} />
            )}
        </Field>
        </>
    )
}