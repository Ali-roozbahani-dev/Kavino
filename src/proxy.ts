import { NextRequest, NextResponse } from "next/server";

export async function proxy(request: NextRequest) {
    const pathname = request.nextUrl.pathname;

    if (!pathname.startsWith("/Login")) {
        return NextResponse.next();
    }

    const accessToken = request.cookies.get("access_token")?.value;

    // Access Token وجود دارد
    if (accessToken) {
        return NextResponse.redirect(new URL("/", request.url));
    }

    // Access Token وجود ندارد
    try {
        const refreshResponse = await fetch(
            new URL("/api/auth/refresh", request.url),
            {
                method: "POST",
                headers: {
                    Cookie: request.headers.get("cookie") ?? "",
                },
                cache: "no-store",
            }
        );

        // Refresh موفق نبود
        if (!refreshResponse.ok) {
            return NextResponse.next();
        }

        // Refresh موفق شد
        const response = NextResponse.redirect(
            new URL("/", request.url)
        );

        // Cookieهای جدید Backend/Route Handler را منتقل کن
        const setCookie = refreshResponse.headers.get("set-cookie");

        if (setCookie) {
            response.headers.set("set-cookie", setCookie);
        }

        return response;
    } catch {
        return NextResponse.next();
    }
}

export const config = {
    matcher: [
        "/Login",
        "/LoginWithOtp",
    ],
};