import trackPageView from "lib/snowplow/trackPageView";
import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
    trackPageView({
        pageUrl: request.url,
        referrer: request.headers.get("referer") || undefined,
    });
    return NextResponse.next();
}

export const config = {
    matcher: "/blog/:path*",
};
