import type { APIRoute } from 'astro';

export const GET: APIRoute = () => {
  const siteUrl = 'https://profilepic-resizer.github.io';
  const urls = [
    { loc: `${siteUrl}/`, changefreq: 'weekly', priority: '1.0' },
    { loc: `${siteUrl}/es/`, changefreq: 'weekly', priority: '0.9' },
    { loc: `${siteUrl}/fr/`, changefreq: 'weekly', priority: '0.9' },
    { loc: `${siteUrl}/pt/`, changefreq: 'weekly', priority: '0.9' },
    { loc: `${siteUrl}/ja/`, changefreq: 'weekly', priority: '0.9' },
  ];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${urls
  .map(
    (u) => `  <url>
    <loc>${u.loc}</loc>
    <xhtml:link rel="alternate" hreflang="en" href="${siteUrl}/" />
    <xhtml:link rel="alternate" hreflang="es" href="${siteUrl}/es/" />
    <xhtml:link rel="alternate" hreflang="fr" href="${siteUrl}/fr/" />
    <xhtml:link rel="alternate" hreflang="pt" href="${siteUrl}/pt/" />
    <xhtml:link rel="alternate" hreflang="ja" href="${siteUrl}/ja/" />
    <xhtml:link rel="alternate" hreflang="x-default" href="${siteUrl}/" />
    <changefreq>${u.changefreq}</changefreq>
    <priority>${u.priority}</priority>
  </url>`
  )
  .join('\n')}
</urlset>`;

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
    },
  });
};
