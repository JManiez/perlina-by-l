const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://perlina-by-l.vercel.app";

export default function sitemap() {
  const routes = ["", "/a-propos", "/soins", "/contact", "/reservation"];
  return routes.map((path) => ({
    url: `${siteUrl}${path}`,
    lastModified: new Date(),
    changeFrequency: path === "" || path === "/soins" ? "weekly" : "monthly",
    priority: path === "" ? 1 : 0.8,
  }));
}
