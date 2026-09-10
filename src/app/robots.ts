import type { MetadataRoute } from "next";

// No Disallow rule for /apps/qbo. Those pages are kept out of the index by a
// noindex, nofollow meta directive, which a crawler can only honour if it is
// allowed to fetch the page in the first place. Blocking them here instead
// would hide that directive.
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://sh-advisory.ca/sitemap.xml",
  };
}
