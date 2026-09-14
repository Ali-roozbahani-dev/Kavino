"use client";

import { useState } from "react";
import { Tag, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useCheckoutStore } from "@/components/Features/Checkout/store/checkoutStore";

export default function CouponSection() {
    
    const couponCode = useCheckoutStore(
        (state) => state.coupon_code
    );

    const setCoupon = useCheckoutStore(
        (state) => state.setCoupon
    );

   

    return (
        <section className="rounded-lg border p-4  mt-10">
            <div className="mb-4 flex items-center gap-2">
                <Tag className="size-4" />

                <h3 className="font-medium">
                    کد تخفیف
                </h3>
            </div>

            <div className="flex gap-2">
                <Input
                    disabled={true} // موقت
                    value={couponCode ?? ""}
                    onChange={(e) => setCoupon(e.target.value)}
                    placeholder="کد تخفیف را وارد کنید"
                />

                <Button
                    className="rounded-md"
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