export default function robots() {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/_next/static/', '/_next/image/'],
      },
    ],
    sitemap: 'https://www.tamizhainvisiblegrills.com/sitemap.xml',
  };
}
