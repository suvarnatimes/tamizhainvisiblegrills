import Link from 'next/link';
import { notFound } from 'next/navigation';
import { blogPosts } from '../blogData';
import JsonLd from '@/components/JsonLd';

// Generate static parameters for static site generation (SSG)
export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

// Generate dynamic metadata for search engines
export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = blogPosts.find(p => p.slug === slug);
  if (!post) return { title: 'Post Not Found' };
  return {
    title: `${post.title} | Tamizha Invisible Grills Chennai`,
    description: post.excerpt,
    keywords: `${post.category}, invisible grills Chennai, ${post.title.toLowerCase()}, balcony safety Chennai`,
    alternates: {
      canonical: `https://www.tamizhainvisiblegrills.com/blog/${post.slug}`,
    },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: `https://www.tamizhainvisiblegrills.com/blog/${post.slug}`,
      type: 'article',
      publishedTime: new Date(post.date).toISOString(),
      authors: ['Tamizha Invisible Grills'],
      images: [{ url: post.img, width: 1200, height: 630, alt: post.title }],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.excerpt,
      images: [post.img],
    },
  };
}

export default async function BlogPostDetailPage({ params }) {
  const { slug } = await params;
  const post = blogPosts.find(p => p.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <>
      <JsonLd data={{
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: post.title,
        description: post.excerpt,
        image: `https://www.tamizhainvisiblegrills.com${post.img}`,
        datePublished: new Date(post.date).toISOString(),
        dateModified: new Date(post.date).toISOString(),
        author: { '@type': 'Organization', name: 'Tamizha Invisible Grills', url: 'https://www.tamizhainvisiblegrills.com' },
        publisher: { '@type': 'Organization', name: 'Tamizha Invisible Grills', url: 'https://www.tamizhainvisiblegrills.com', logo: { '@type': 'ImageObject', url: 'https://www.tamizhainvisiblegrills.com/images/hero-bg.png' } },
        mainEntityOfPage: { '@type': 'WebPage', '@id': `https://www.tamizhainvisiblegrills.com/blog/${post.slug}` },
      }} />
      {post.faqs && post.faqs.length > 0 && (
        <JsonLd data={{
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: post.faqs.map(faq => ({
            '@type': 'Question',
            name: faq.q,
            acceptedAnswer: { '@type': 'Answer', text: faq.a },
          })),
        }} />
      )}
      <JsonLd data={{
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.tamizhainvisiblegrills.com' },
          { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://www.tamizhainvisiblegrills.com/blog' },
          { '@type': 'ListItem', position: 3, name: post.title, item: `https://www.tamizhainvisiblegrills.com/blog/${post.slug}` },
        ],
      }} />
      {/* Blog Detail Hero */}
      <section className="bg-brandDark text-brandBg pt-40 pb-16 text-center relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <span className="font-accent text-xs font-bold uppercase tracking-[0.2em] text-brandGold mb-3 block">
            {post.category}
          </span>
          <h1 className="font-heading text-3xl sm:text-5xl font-bold mb-4 text-brandGold leading-tight">
            {post.title}
          </h1>
          <p className="text-white/70 text-xs sm:text-sm">
            Published on {post.date} | Written by Safety Engineering Team
          </p>
        </div>
      </section>

      {/* Main Content */}
      <div className="bg-brandBg py-12">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          {/* Main Article */}
          <article className="lg:col-span-2 bg-white border border-brandDark/10 p-8 sm:p-12 rounded-lg shadow-sm">

          <div className="prose prose-sm sm:prose max-w-none text-brandText/80 leading-relaxed text-sm sm:text-base flex flex-col gap-6">
            {/* Split content by double newlines for paragraph tags */}
            {post.content.split('\n\n').map((paragraph, index) => {
              if (paragraph.startsWith('###')) {
                return (
                  <h3 key={index} className="font-heading text-xl sm:text-2xl font-bold text-brandDark mt-6 mb-2">
                    {paragraph.replace('###', '').trim()}
                  </h3>
                );
              }
              if (paragraph.startsWith('-')) {
                return (
                  <ul key={index} className="list-disc pl-6 flex flex-col gap-2">
                    {paragraph.split('\n').map((item, idx) => (
                      <li key={idx}>{item.replace('-', '').trim()}</li>
                    ))}
                  </ul>
                );
              }
              if (paragraph.match(/^\d\./)) {
                return (
                  <div key={index} className="mt-4">
                    <h3 className="font-heading text-lg sm:text-xl font-bold text-brandDark mb-2">{paragraph.split('\n')[0]}</h3>
                    <p>{paragraph.split('\n').slice(1).join(' ')}</p>
                  </div>
                );
              }
              return <p key={index}>{paragraph}</p>;
            })}

            {/* Optional Comparison Table */}
            {post.table && (
              <div className="overflow-x-auto my-8 border border-brandDark/10 rounded-lg">
                <table className="min-w-full text-left text-sm">
                  <thead>
                    <tr className="bg-brandDark text-brandBg font-accent text-[10px] uppercase tracking-wider">
                      {post.table.headers.map((th) => (
                        <th key={th} className="p-4 border-b border-brandDark/10">{th}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {post.table.rows.map((row, rowIdx) => (
                      <tr key={rowIdx} className={rowIdx % 2 === 0 ? 'bg-brandBg/20' : 'bg-white'}>
                        {row.map((cell, cellIdx) => (
                          <td key={cellIdx} className="p-4 border-b border-brandDark/10 text-brandText/80">{cell}</td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}

            {/* Optional Pullquote */}
            {post.pullquote && (
              <div className="font-heading text-xl italic border-l-4 border-brandGold pl-6 my-8 text-brandDark">
                "{post.pullquote}"
              </div>
            )}

            {/* Dynamic Article FAQs */}
            {post.faqs && (
              <div className="bg-brandBg border border-brandDark/10 p-6 sm:p-8 rounded-lg my-8">
                <h3 className="font-heading text-xl font-bold text-brandDark mb-4">Frequently Answered Questions</h3>
                <div className="flex flex-col gap-4">
                  {post.faqs.map((faq, idx) => (
                    <div key={idx} className="text-sm">
                      <strong className="block text-brandDark font-semibold mb-1">Q: {faq.q}</strong>
                      <p className="text-brandText/70">{faq.a}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* CTA Panel */}
            <div className="bg-brandDark text-brandBg p-8 rounded-lg text-center mt-8">
              <h3 className="font-heading text-2xl font-bold mb-2 text-brandBg">Evaluate Your Space Today</h3>
              <p className="text-brandBg/80 text-sm mb-6">Schedule a free home visit from our structural engineers. We provide sample checkouts and precise quotes across Chennai neighborhoods.</p>
              <Link href="/contact#inspection-form" className="inline-block px-6 py-3 bg-brandGold text-brandDark font-accent text-xs font-bold uppercase tracking-wider rounded hover:bg-transparent hover:text-brandGold hover:border hover:border-brandGold transition-all duration-300">
                Get Free Site Measurement
              </Link>
            </div>

          </div>
        </article>

        {/* Sidebar Widgets */}
        <div className="flex flex-col gap-8">
          
          <div className="bg-white border border-brandDark/10 p-8 rounded-lg shadow-sm">
            <h3 className="font-accent text-[11px] font-bold uppercase tracking-widest text-brandDark mb-4 border-b-2 border-brandGold pb-2">Safety Categories</h3>
            <ul className="flex flex-col gap-3">
              <li><Link href="/blog" className="text-brandText/70 hover:text-brandGold text-sm transition-all hover:pl-1">All Resources</Link></li>
              <li><Link href="/gallery?filter=anti-bird" className="text-brandText/70 hover:text-brandGold text-sm transition-all hover:pl-1">Anti Bird Grills</Link></li>
              <li><Link href="/gallery?filter=child-safety" className="text-brandText/70 hover:text-brandGold text-sm transition-all hover:pl-1">Child Safety Grills</Link></li>
              <li><Link href="/gallery?filter=balcony" className="text-brandText/70 hover:text-brandGold text-sm transition-all hover:pl-1">Balcony Safety</Link></li>
              <li><Link href="/gallery?filter=window" className="text-brandText/70 hover:text-brandGold text-sm transition-all hover:pl-1">Window Fixtures</Link></li>
              <li><Link href="/gallery?filter=staircase" className="text-brandText/70 hover:text-brandGold text-sm transition-all hover:pl-1">Stairwells Protection</Link></li>
            </ul>
          </div>

          <div className="bg-white border border-brandDark/10 p-8 rounded-lg shadow-sm">
            <h3 className="font-accent text-[11px] font-bold uppercase tracking-widest text-brandDark mb-4 border-b-2 border-brandGold pb-2">Recent Reads</h3>
            <ul className="flex flex-col gap-3">
              {blogPosts.filter(p => p.slug !== post.slug).slice(0, 3).map((p) => (
                <li key={p.slug} className="border-b border-brandDark/5 pb-2 last:border-b-0 last:pb-0">
                  <Link href={`/blog/${p.slug}`} className="text-brandText/75 hover:text-brandGold text-xs sm:text-sm font-semibold transition-all">
                    {p.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

        </div>

      </div>
    </div>
  </>
  );
}
