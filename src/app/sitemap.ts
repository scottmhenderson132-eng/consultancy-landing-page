import type { MetadataRoute } from "next";

const BASE_URL = "https://sh-advisory.ca";

// The /apps/qbo/* routes are deliberately excluded. They carry a noindex,
// nofollow directive instead, and are not public marketing surface.
export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return [
    {
      url: `${BASE_URL}/`,
      lastModified,
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${BASE_URL}/legal/qbo-integration-terms`,
      lastModified,
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${BASE_URL}/legal/qbo-integration-privacy`,
      lastModified,
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];
}
