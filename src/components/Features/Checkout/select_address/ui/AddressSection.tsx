"use client"
import { useAddresses } from "@/entities/Address/hooks/useAddresses";
import AddressSelector from "./AddressSelector";
import SectionSpinner from "@/components/ui/Loading/SectionLoading";


export default function AddressSection(){
    const {
        data: addresses,
        isPending: addressesPending,
        error: addressesError,
    } = useAddresses();
    

    if (addressesPending) {
        return <SectionSpinner containerClass="h-40"/>;
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