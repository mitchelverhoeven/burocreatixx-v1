// src/app/robots.txt/route.ts
import { NextResponse } from "next/server";

export function GET() {
  const robotsTxt = `
    User-agent: *
    Allow: /
    Sitemap: https://www.burocreatixx.nl/sitemap.xml
  `;

  return new NextResponse(robotsTxt, {
    headers: {
      "Content-Type": "text/plain",
    },
  });
}
