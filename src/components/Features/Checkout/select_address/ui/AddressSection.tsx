"use client"
import { useAddressesList } from "@/components/Features/Address/address_list/hooks/useAddressesList";
import AddressSelector from "./AddressSelector";
import SectionLoadingDots from "@/components/ui/Loading/SectionLoadingDots";


export default function AddressSection(){
    const {
        data: addresses,
        isPending: addressesPending,
        error: addressesError,
    } = useAddressesList();
    

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