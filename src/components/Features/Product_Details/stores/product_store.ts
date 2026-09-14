import { create } from "zustand";


type ProductStore = {
  selectedVariantId: number | null;
  setVariant: (variantId: number) => void;
  reset: () => void;
};

export const useProductStore = create<ProductStore>((set) => ({
  selectedVariantId: null,

  setVariant: (variantId) => {  
    set({
      selectedVariantId: variantId,
    });
  },

  reset: () =>
    set({      
      selectedVariantId: null,
    }),
}));