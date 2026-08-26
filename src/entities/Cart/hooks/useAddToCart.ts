import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import { Cart as Tcart } from "@/entities/Cart/types/Cart";
import { cartQueryKey } from "../queryKeys";
import { api } from "../../../api/axios_instance";

interface Params {
    variant: number;
    quantity: number;
}

export function useAddToCart() {
    const queryClient = useQueryClient();

    const mutation = useMutation({
        mutationFn: async ({
            variant,
            quantity,
        }: Params): Promise<Tcart> => {
            const res = await api.post<Tcart>("/cart/items/",
                {
                    variant,
                    quantity,
                }
            );

            return res.data;
        },

        onSuccess: (newCart) => {
            queryClient.setQueryData(cartQueryKey, newCart);
            toast.success("محصول به سبد خرید اضافه شد");
        },

        onError: (err) => {
            toast.error(err.message);
        },
    });

    return {
        addToCart: mutation.mutate,
        isAddingToCart: mutation.isPending,
    };
}