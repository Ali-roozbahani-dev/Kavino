"use client";
import { Loader2, Minus, Plus, Trash2 } from "lucide-react";
import { cn } from "@/shared/lib/utils";
import { useChangeQuantity } from "@/Features/Cart/hooks/useChangeQuantity";
import { useDeleteCartItem } from "@/Features/Cart/hooks/useDeleteCartItem";
import { formatNumberWithoutSeparator } from "@/shared/utils/formatNumber";


interface Props {
  itemId: number;  
  quantity: number;
  stock: number;
  className?: string;
}


export default function QuantitySelector({
itemId , 
quantity , 
stock ,
className}: Props) {

  const {
    changeQuantity,
    isIncreasing,
    isDecreasing,
  } = useChangeQuantity({itemId , currentQuantity: quantity});
  const {deleteCartItem , isDeleting} = useDeleteCartItem();

  const isPending =   isDeleting;

  
  return (
    <div
      className={cn("border w-25 h-7 md:w-30 md:h-8 flex rounded-sm overflow-hidden", className)}
    >
      <button
      disabled={isPending || quantity >= stock}
      onClick={()=> changeQuantity(quantity + 1)}
      className="w-1/3 flex-center bg-gray-100 disabled:opacity-50"
      >
        {
          isIncreasing ?
          <Loader2 className="size-3 lg:size-4 animate-spin" />
          :
          <Plus strokeWidth={1.8} className="size-3.5 md:size-4" />
        }
      </button>
      <span className="font-semibold w-1/3 flex-center text-[14px] md:text-[15px]">
        {formatNumberWithoutSeparator(quantity)}
      </span>

      {quantity > 1 ? (
        <button
        disabled={isPending}
        onClick={()=> changeQuantity(quantity - 1)}
        className="w-1/3 flex-center bg-gray-100 disabled:opacity-100"
        >
          {isDecreasing ?
          <Loader2 className="size-3 lg:size-4 animate-spin" />
          :
          <Minus strokeWidth={1.8} className="size-3.5 md:size-4" />
        }
        </button>
      ) : (
        <button
        disabled={isPending}
        onClick={() => deleteCartItem(itemId)}
        className="w-1/3 flex-center bg-gray-100 disabled:opacity-100"
        >
          {isDeleting ?
          <Loader2 className="size-3 lg:size-4 animate-spin" />
          :
          <Trash2 className="size-4 md:size-4.5" />
          }
        </button>
      )}
    </div>
  );
}
