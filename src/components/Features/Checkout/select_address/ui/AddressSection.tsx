"use client"
import { useAddresses } from "@/entities/Address/hooks/useAddresses";
import AddressSelector from "./AddressSelector";
import SectionLoadingDots from "@/components/ui/Loading/SectionLoadingDots";


export default function AddressSection(){
    const {
        data: addresses,
        isPending: addressesPending,
        error: addressesError,
    } = useAddresses();
    

    if (addressesPending) {
        return <SectionLoadingDots containerClass="h-40"/>;
    }

    if (addressesError) {
        throw new Error("خطا در دریافت اطلاعات");
    }
    

    return (        
        <div>  
            <AddressSelector addresses={addresses.results}/>                 
        </div>            
                
    )
}