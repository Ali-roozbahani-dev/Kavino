import { useRouter } from "next/navigation";
import { Checkout } from "../types/Checkout";

export type StepContext = {
  router: ReturnType<typeof useRouter>;
  address_id?: number | null;
  shipping_method_id?: number | null;
  coupon_code?: string | null;
  submitCheckout: () => Promise<Checkout>;
  resetCheckout?: () => void;
};

type StepConfig = {
  label: string;
  getDisabledReason?: (ctx: StepContext) => string | null;
  // خروجی می‌تونه Checkout باشه (برای مرحله shipping) یا هیچی
  onNext: (ctx: StepContext) => void | Promise<void | Checkout>;
};

export const checkoutStepsConfig: Record<string, StepConfig> = {
  "/checkout/cart": {
    label: "ادامه سفارش",
    onNext: ({ router }) => {
      router.push("/checkout/shipping");
    },
  },

  "/checkout/shipping": {
    label: "نهایی کردن و پرداخت",

    getDisabledReason: ({ address_id, shipping_method_id }) => {
      if (!address_id) return "لطفاً ابتدا آدرس را مشخص کنید";
      if (!shipping_method_id) return "لطفاً روش ارسال را انتخاب کنید";
      return null;
    },

    onNext: async ({ submitCheckout }) => {
      const result = await submitCheckout();
      return result; // <-- این خط جدیده
    },
  },
};

export const defaultStepConfig: StepConfig = {
  label: "ادامه سفارش",
  onNext: ({ router }) => {
    router.push("/checkout/shipping");
  },
};