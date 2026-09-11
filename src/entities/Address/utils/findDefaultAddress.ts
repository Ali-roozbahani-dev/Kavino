import { AddressListItem } from "../types/AddressList";

export function findDefaultAddress(addresses: AddressListItem[]){
    return addresses.find((address) => address.is_default === true)    
}