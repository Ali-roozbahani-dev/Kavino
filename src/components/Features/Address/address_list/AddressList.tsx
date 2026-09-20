"use client"
import { AddressItem, AddressItemSkeleton, EmptyAddress } from "@/components/ui/Profile";
import { useAddressesList } from "@/components/Features/Address/address_list/hooks/useAddressesList"
import { useInfiniteScrollObserver } from "@/shared/hooks/useInfiniteScrollObserver";
import SectionLoadingDots from "@/components/ui/Loading/SectionLoadingDots";

export default function AddressList(){
    const {
    data,
    isPending,
    hasNextPage,
    isFetchingNextPage,
    isError,
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