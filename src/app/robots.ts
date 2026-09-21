import type { MetadataRoute } from "next";
import { URL_SITE } from "./site";

export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: `${URL_SITE}/sitemap.xml`,
    host: URL_SITE,
  };
}
