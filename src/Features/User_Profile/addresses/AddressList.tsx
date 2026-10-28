"use client"
import { useAddressesList } from "@/Features/Address/hooks/useAddressesList";
import { useInfiniteScrollObserver } from "@/shared/hooks/useInfiniteScrollObserver";
import SectionLoadingDots from "@/ui/Loading/SectionLoadingDots";
import AddressItemSkeleton from "../ui/addresses/AddressItemSkeleton";
import EmptyAddress from "../ui/addresses/EmptyAddress";
import AddressItem from "../ui/addresses/AddressItem";

export default function AddressList(){
    const {
    data,
    isPending,
    hasNextPage,
    isFetchingNextPage,
    error,
    fetchNextPage,
  } = useAddressesList();
  

  const sentiel = useInfiniteScrollObserver({fetchNextPage , isFetchingNextPage , hasNextPage });
    
    if(isPending) return <AddressItemSkeleton />;
    if(error) throw new Error("خطا در اتصال");

    const addresses = data ? data.pages.flatMap((page) => page.results) : []; 

    if(addresses.length <= 0) return <EmptyAddress />

    return(
        <>
        <div className="space-y-4">
            {addresses.map((address) => (
            <AddressItem key={address.id} address={address}/>
            ))}
        </div>

        <div ref={sentiel} className="h-px"></div>

        {isFetchingNextPage &&
        <SectionLoadingDots containerClass="h-20"/>
        }
        </>
    )
}