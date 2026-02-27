import type { MetadataRoute } from "next";
import { NEWS } from "@/lib/data";

const BASE = "https://www.iserlohn-roosters.de";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = [
    "",
    "/news",
    "/spielplan",
    "/tabelle",
    "/statistik",
    "/team/kader",
    "/team/staff",
    "/team/organisation",
    "/verein/historie",
    "/verein/mitgliedschaft",
    "/verein/kids-club",
    "/verein/gastronomie",
    "/verein/jobs",
    "/verein/geschaeftsstelle",
    "/verein/presse",
    "/sponsoring",
    "/sponsoring/partner",
    "/fanzone/newsletter",
    "/fanzone/fanclubs",
    "/fanzone/ehrenamt",
    "/tickets",
    "/fanshop",
    "/kontakt",
    "/impressum",
    "/datenschutz",
  ];

  const pages: MetadataRoute.Sitemap = staticPages.map((path) => ({
    url: `${BASE}${path}`,
    lastModified: new Date(),
    changeFrequency: path === "" ? "daily" : "weekly",
    priority: path === "" ? 1.0 : path.startsWith("/news") ? 0.8 : 0.6,
  }));

  // Dynamic news pages (dates are DD.MM.YYYY format)
  const newsPages: MetadataRoute.Sitemap = NEWS.map((article) => {
    const [d, m, y] = article.date.split(".");
    return {
      url: `${BASE}/news/${article.id}`,
      lastModified: new Date(`${y}-${m}-${d}`),
      changeFrequency: "monthly",
      priority: 0.7,
    };
  });

  return [...pages, ...newsPages];
}
