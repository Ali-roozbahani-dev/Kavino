import { DeleteAddressDialog, SetDefaultAddress } from "@/components/Features/Address";
import AddressDialog from "@/components/ui/Address/AddressFormDialog";
import { AddressListItem } from "@/entities/Address/types/AddressList";
import { formatNumberWithoutSeparator } from "@/shared/utils/formatNumber";
import { Edit, MapPin, Trash2 } from "lucide-react";


interface Props{
    address: AddressListItem;
}

export default function AddressItem({address}: Props){

    return (
        <div
            key={address.id}
            className="relative bg-white p-5"
          >
            {/* Card Header */}
            <div className="flex items-start justify-between gap-4 border-b border-gray-100 pb-4">
              <div className="flex items-center gap-3">
                <div className="flex size-10 shrink-0 items-center justify-center rounded-full bg-blue-50 text-blue-600">
                  <MapPin size={20} />
                </div>

                <div>
                  <div className="flex flex-wrap items-center gap-2">
                    <h2 className="font-bold text-gray-900">
                      {address.address_line}
                    </h2>

                    {address.is_default && (
                      <span className="rounded-full bg-green-50 px-2.5 py-1 text-xs font-medium text-green-600">
                        آدرس پیش‌فرض
                      </span>
                    )}
                  </div>
                  
                </div>
              </div>

              {/* Actions */}
              <div className="flex items-center gap-1">
                <AddressDialog trigger={

                <button
                  type="button"
                  aria-label="ویرایش آدرس"
                  className="flex size-9 items-center justify-center rounded-lg text-gray-500 transition 
                  hover:bg-blue-50 hover:text-blue-600"
                >
                  <Edit size={17} />
                </button>
                }/>

                <DeleteAddressDialog 
                addressId={address.id}               
                
                trigger={

                <button
                  type="button"
                  aria-label="حذف آدرس"
                  className="flex size-9 items-center justify-center rounded-lg text-gray-500 transition hover:bg-red-50 hover:text-red-600"
                >
                  <Trash2 size={17} />
                </button>
                }/>

              </div>
            </div>

            {/* Address Info */}
            <div className="pt-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <span className="text-xs text-gray-400">
                    شماره تماس
                  </span>
                  <p className="mt-1 text-sm text-gray-700">
                    {formatNumberWithoutSeparator(Number(address.receiver_phone))}+
                  </p>
                </div>

                <div>
                  <span className="text-xs text-gray-400">
                    استان و شهر
                  </span>
                  <p className="mt-1 text-sm text-gray-700">
                    {address.province}، {address.city}
                  </p>
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="mt-4">
                  <span className="text-xs text-gray-400">
                  گیرنده 
                  </span>

                  <p className="mt-1 text-sm text-gray-700">
                    {address.receiver_name}
                  </p>
                </div>

                {/* <div className="mt-4">
                  <span className="text-xs text-gray-400">
                    کد پستی
                  </span>

                  <p className="mt-1 text-sm text-gray-700">
                    {address.postalCode}
                  </p>
                </div> */}
              </div>

            </div>

            {/* Default Address Action */}
            {!address.is_default && (
              <div className="mt-5 border-t border-gray-100 pt-4">
                <SetDefaultAddress addressId={address.id}/>
              </div>
            )}
          </div>
    )
}