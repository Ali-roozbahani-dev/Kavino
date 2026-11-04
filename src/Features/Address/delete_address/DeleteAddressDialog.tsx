"use client";

import { ReactNode } from "react";
import {
  AlertTriangle,
  Loader2,
  Trash2,
} from "lucide-react";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { useDeleteAddress } from "./hook/useDeleteAddress";

interface Props {
  addressId: number;
  trigger: ReactNode;
}

export default function DeleteAddressDialog({
  addressId,
  trigger,
}: Props) {
  const { mutate: deleteAddress, isPending } = useDeleteAddress();

  const handleDelete = () => {
    deleteAddress(addressId);
  };

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        {trigger}
      </AlertDialogTrigger>

      <AlertDialogContent dir="rtl" className="md:max-w-lg!">
        <AlertDialogHeader>         

          <AlertDialogTitle className="font-vazir">
            <div className="flex-center">
              <div className="mb-3 me-2 flex size-11 items-center justify-center rounded-full bg-red-50 text-red-500">
                <AlertTriangle className="size-5" />
              </div>
              <span>
                حذف آدرس
              </span>
            </div>
          </AlertDialogTitle>

          <AlertDialogDescription>
            آیا از حذف این آدرس مطمئن هستید؟
            
            این عملیات قابل بازگشت نیست.
          </AlertDialogDescription>
        </AlertDialogHeader>

        <AlertDialogFooter>
          <AlertDialogCancel disabled={isPending}>
            انصراف
          </AlertDialogCancel>

          <AlertDialogAction
            onClick={handleDelete}
            disabled={isPending}
            className="bg-red-500 hover:bg-red-600"
          >
            {isPending ? (
              <>
                <Loader2 className="size-4 animate-spin" />
                در حال حذف...
              </>
            ) : (
              <>
                <Trash2 className="size-4" />
                حذف آدرس
              </>
            )}
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}