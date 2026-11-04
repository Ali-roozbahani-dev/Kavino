"use client";

import { Tag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useCheckoutStore } from "@/Features/Checkout/store/checkoutStore";

export default function CouponSection() {
    
    const couponCode = useCheckoutStore(
        (state) => state.coupon_code
    );

    const setCoupon = useCheckoutStore(
        (state) => state.setCoupon
    );

   

    return (
        <section className="rounded-lg md:border md:p-4  mt-10">
            <div className="mb-4 flex items-center gap-2">
                <Tag className="size-3.5 md:size-4" />

                <h3 className="font-medium text-[15px] md:text-lg">
                    کد تخفیف
                </h3>
            </div>

            <div className="flex gap-1.5 md:gap-2">
                <Input
                    disabled={true} // موقت
                    value={couponCode ?? ""}
                    onChange={(e) => setCoupon(e.target.value)}
                    placeholder="کد تخفیف را وارد کنید"
                    className="placeholder:text-[12px] placeholder:md:text-[15px]"
                />

                <Button
                    className="rounded-md text-[13px] md:text-[15px]"
                    type="button"
                    disabled={!couponCode}
                    variant={"Blue1"}
                >
                    اعمال
                </Button>
            </div>
        </section>
    );
}