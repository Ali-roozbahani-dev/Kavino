import { AddressListItem } from "@/entities/Address";


export function findDefaultAddress(addresses: AddressListItem[]){
    return addresses.find((address) => address.is_default === true)    
}