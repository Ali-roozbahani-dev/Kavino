import { NextRequest, NextResponse } from "next/server";

const authPaths = ["/Login", "/LoginWithOtp"];
const checkoutPaths = ["/checkout/address", "/checkout/shipping"];

export async function proxy(request: NextRequest) {
    const pathname = request.nextUrl.pathname;
    const accessToken = request.cookies.get("access_token")?.value;
    const refreshToken = request.cookies.get("refresh_token")?.value;
    
    const hasSession = Boolean(accessToken) || Boolean(refreshToken);

    const isAuthPath = authPaths.some((p) => pathname.startsWith(p));
    const isCheckoutPath = checkoutPaths.some((p) => pathname.startsWith(p));

    // مسیرهای احراز هویت: اگه لاگینه، نیازی به این صفحه نداره
    if (isAuthPath && hasSession) {
        return NextResponse.redirect(new URL("/", request.url));
    }

    // اگه لاگین نیست، اجازه‌ی ورود نده : checkout مسیرهای
    if (isCheckoutPath && !hasSession) {
        return NextResponse.redirect(new URL("/Login", request.url));
    }

    return NextResponse.next();
}

export const config = {
    matcher: [
        "/Login",
        "/LoginWithOtp",
        "/checkout/address",
        "/checkout/shipping"
    ],
};