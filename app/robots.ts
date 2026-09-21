import type { MetadataRoute } from "next";
import { SITE } from "@/lib/constants";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      // Legal pages already use `robots: { index: false }` in their metadata.
      // Blocking them here in robots.txt is redundant and prevents crawlers from
      // following the link to confirm noindex, so we leave disallow empty.
    },
    sitemap: `${SITE.url}/sitemap.xml`,
  };
}
