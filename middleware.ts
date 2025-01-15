import trackPageView from "lib/snowplow/trackPageView";
import { setUserProperties } from "lib/snowplow/utils/userContext";
import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
    setUserProperties({
        userAgent: request.headers.get("user-agent") || undefined,
    });
    trackPageView({
        pageUrl: request.url,
        referrer: request.headers.get("referer") || undefined,
    });
    return NextResponse.next();
}

export const config = {
    matcher: "/blog/:path*",
};
