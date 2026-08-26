// app/api/auth/refresh/route.ts

import { NextRequest, NextResponse } from "next/server";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export async function POST(request: NextRequest) {
    
    const response = await fetch(`${API_URL}/api/auth/refresh/`, {
        method: "POST",
        headers: {
            Cookie: request.headers.get("cookie") ?? "",
        },
        cache: "no-store",
    });

    const data = await response.json();

    const nextResponse = NextResponse.json(data, {
        status: response.status,
    });

    const setCookie = response.headers.get("set-cookie");

    if (setCookie) {
        nextResponse.headers.set("set-cookie", setCookie);
    }

    return nextResponse;
}