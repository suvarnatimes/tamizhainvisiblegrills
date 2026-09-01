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
    keywords: `${post.category}, invisible grills Chennai, ${post.title.toLowerCase()}, balcony safety Chennai, child safety grills Tamil Nadu`,
    alternates: {
      canonical: `https://www.chennaiinvisiblegrills.in/blog/${post.slug}`,
    },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: `https://www.chennaiinvisiblegrills.in/blog/${post.slug}`,
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

// Helper to format inline markdown bold and italic text
function renderFormattedText(text) {
  if (!text) return '';
  const parts = text.split(/(\*\*.*?\*\*|\*.*?\*)/g);
  return parts.map((part, i) => {
    if (part.startsWith('**') && part.endsWith('**')) {
      return <strong key={i} className="font-semibold text-brandDark">{part.slice(2, -2)}</strong>;
    }
    if (part.startsWith('*') && part.endsWith('*')) {
      return <em key={i} className="italic text-brandDark/90">{part.slice(1, -1)}</em>;
    }
    return part;
  });
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
        image: `https://www.chennaiinvisiblegrills.in${post.img}`,
        datePublished: new Date(post.date).toISOString(),
        dateModified: new Date(post.date).toISOString(),
        author: { 
          '@type': 'Organization', 
          name: 'Tamizha Invisible Grills', 
          url: 'https://www.chennaiinvisiblegrills.in' 
        },
        publisher: { 
          '@type': 'Organization', 
          name: 'Tamizha Invisible Grills', 
          url: 'https://www.chennaiinvisiblegrills.in', 
          logo: { '@type': 'ImageObject', url: 'https://www.chennaiinvisiblegrills.in/images/hero-bg.png' } 
        },
        mainEntityOfPage: { '@type': 'WebPage', '@id': `https://www.chennaiinvisiblegrills.in/blog/${post.slug}` },
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
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.chennaiinvisiblegrills.in' },
          { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://www.chennaiinvisiblegrills.in/blog' },
          { '@type': 'ListItem', position: 3, name: post.title, item: `https://www.chennaiinvisiblegrills.in/blog/${post.slug}` },
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
          <div className="flex items-center justify-center gap-4 text-white/70 text-xs sm:text-sm">
            <span>Published: {post.date}</span>
            <span>•</span>
            <span>Authored by Safety Engineering Team</span>
            <span>•</span>
            <span>ISO 9001:2015 Verified</span>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="bg-brandBg py-12">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          {/* Main Article */}
          <article className="lg:col-span-2 bg-white border border-brandDark/10 p-8 sm:p-12 rounded-lg shadow-sm">
            
            {/* Featured Image */}
            <div className="mb-8 rounded-lg overflow-hidden border border-brandDark/10 shadow-sm max-h-96">
              <img src={post.img} alt={post.title} className="w-full h-full object-cover" />
            </div>

            <div className="prose prose-sm sm:prose max-w-none text-brandText/80 leading-relaxed text-sm sm:text-base flex flex-col gap-6">
              
              {/* Parse article content paragraphs */}
              {post.content.split('\n\n').map((paragraph, index) => {
                if (paragraph.startsWith('###')) {
                  return (
                    <h3 key={index} className="font-heading text-xl sm:text-2xl font-bold text-brandDark mt-6 mb-1">
                      {paragraph.replace('###', '').trim()}
                    </h3>
                  );
                }
                if (paragraph.startsWith('##')) {
                  return (
                    <h2 key={index} className="font-heading text-2xl sm:text-3xl font-bold text-brandDark mt-8 mb-2 border-b border-brandDark/10 pb-2">
                      {paragraph.replace('##', '').trim()}
                    </h2>
                  );
                }
                if (paragraph.startsWith('-')) {
                  return (
                    <ul key={index} className="list-disc pl-6 flex flex-col gap-2.5 my-2">
                      {paragraph.split('\n').map((item, idx) => (
                        <li key={idx} className="leading-relaxed">
                          {renderFormattedText(item.replace(/^-\s*/, '').trim())}
                        </li>
                      ))}
                    </ul>
                  );
                }
                if (paragraph.match(/^\d\./)) {
                  return (
                    <div key={index} className="mt-4 flex flex-col gap-2">
                      <h4 className="font-heading text-lg sm:text-xl font-bold text-brandDark">
                        {renderFormattedText(paragraph.split('\n')[0].trim())}
                      </h4>
                      {paragraph.split('\n').slice(1).length > 0 && (
                        <p className="leading-relaxed">
                          {renderFormattedText(paragraph.split('\n').slice(1).join(' ').trim())}
                        </p>
                      )}
                    </div>
                  );
                }
                return (
                  <p key={index} className="leading-relaxed">
                    {renderFormattedText(paragraph.trim())}
                  </p>
                );
              })}

              {/* Optional Comparison Table */}
              {post.table && (
                <div className="my-8">
                  <div className="overflow-x-auto border border-brandDark/15 rounded-lg shadow-sm">
                    <table className="min-w-full text-left text-sm">
                      <thead>
                        <tr className="bg-brandDark text-brandBg font-accent text-[11px] uppercase tracking-wider">
                          {post.table.headers.map((th, i) => (
                            <th key={i} className="p-4 border-b border-brandDark/10 font-bold">{th}</th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {post.table.rows.map((row, rowIdx) => (
                          <tr key={rowIdx} className={rowIdx % 2 === 0 ? 'bg-brandBg/25' : 'bg-white'}>
                            {row.map((cell, cellIdx) => (
                              <td key={cellIdx} className={`p-4 border-b border-brandDark/10 text-brandText/85 text-xs sm:text-sm ${cellIdx === 0 ? 'font-semibold text-brandDark' : ''}`}>
                                {cell}
                              </td>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              )}

              {/* Optional Pullquote */}
              {post.pullquote && (
                <blockquote className="font-heading text-lg sm:text-xl italic border-l-4 border-brandGold pl-6 my-8 text-brandDark bg-brandBg/40 py-4 pr-4 rounded-r-lg">
                  "{post.pullquote}"
                </blockquote>
              )}

              {/* Dynamic Article FAQs (Optimized for AEO / AI Search Engines) */}
              {post.faqs && (
                <div className="bg-brandBg/70 border border-brandDark/15 p-6 sm:p-8 rounded-xl my-8">
                  <span className="font-accent text-[10px] font-bold uppercase tracking-widest text-brandGold block mb-1">
                    Direct Answers & FAQ
                  </span>
                  <h3 className="font-heading text-2xl font-bold text-brandDark mb-6">
                    Frequently Asked Questions
                  </h3>
                  <div className="flex flex-col gap-5">
                    {post.faqs.map((faq, idx) => (
                      <div key={idx} className="bg-white p-5 rounded-lg border border-brandDark/10 shadow-xs">
                        <strong className="block text-brandDark font-semibold text-base mb-2">
                          Q: {faq.q}
                        </strong>
                        <p className="text-brandText/75 text-sm leading-relaxed">
                          {faq.a}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* CTA Panel */}
              <div className="bg-brandDark text-brandBg p-8 sm:p-10 rounded-xl text-center mt-8 shadow-md">
                <span className="font-accent text-[10px] font-bold uppercase tracking-widest text-brandGold block mb-2">
                  Free Site Measurement & Consultation
                </span>
                <h3 className="font-heading text-2xl sm:text-3xl font-bold mb-3 text-brandBg">
                  Book Your Free Balcony Safety Inspection
                </h3>
                <p className="text-brandBg/80 text-sm mb-6 max-w-lg mx-auto">
                  Our certified structural engineers provide free on-site laser measurements, sample kit demonstrations, and exact price quotes across Chennai and Tamil Nadu.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <Link href="/contact#inspection-form" className="px-6 py-3 bg-brandGold text-brandDark font-accent text-xs font-bold uppercase tracking-wider rounded hover:bg-transparent hover:text-brandGold hover:border hover:border-brandGold transition-all duration-300">
                    Request Free Inspection
                  </Link>
                  <a href="tel:+919944200664" className="px-6 py-3 bg-transparent text-brandBg border border-brandBg/40 font-accent text-xs font-bold uppercase tracking-wider rounded hover:bg-brandBg hover:text-brandDark transition-all duration-300">
                    Call: +91 99442 00664
                  </a>
                </div>
              </div>

            </div>
          </article>

          {/* Sidebar Widgets */}
          <div className="flex flex-col gap-8">
            
            {/* Quick Estimate Card */}
            <div className="bg-brandDark text-brandBg border border-brandDark/10 p-8 rounded-xl shadow-sm text-center">
              <span className="font-accent text-[10px] font-bold uppercase tracking-widest text-brandGold block mb-2">Free Quote</span>
              <h3 className="font-heading text-xl font-bold mb-2 text-brandBg">Need Invisible Grills?</h3>
              <p className="text-brandBg/80 text-xs leading-relaxed mb-6">
                Get free on-site laser measurement and sample checkouts across all Chennai localities and Tamil Nadu cities.
              </p>
              <Link href="/contact#inspection-form" className="block w-full py-3 bg-brandGold text-brandDark font-accent text-xs font-bold uppercase tracking-widest rounded hover:bg-transparent hover:text-brandGold hover:border hover:border-brandGold transition-all duration-300">
                Book Free Visit
              </Link>
            </div>

            {/* Safety Categories */}
            <div className="bg-white border border-brandDark/10 p-8 rounded-xl shadow-sm">
              <h3 className="font-accent text-[11px] font-bold uppercase tracking-widest text-brandDark mb-4 border-b-2 border-brandGold pb-2">Safety Categories</h3>
              <ul className="flex flex-col gap-3">
                <li><Link href="/blog" className="text-brandText/75 hover:text-brandGold text-sm transition-all hover:pl-1 font-medium">All Safety Resources</Link></li>
                <li><Link href="/gallery?filter=balcony" className="text-brandText/75 hover:text-brandGold text-sm transition-all hover:pl-1 font-medium">Balcony Invisible Grills</Link></li>
                <li><Link href="/gallery?filter=child-safety" className="text-brandText/75 hover:text-brandGold text-sm transition-all hover:pl-1 font-medium">Child & Pet Safety Grills</Link></li>
                <li><Link href="/gallery?filter=anti-bird" className="text-brandText/75 hover:text-brandGold text-sm transition-all hover:pl-1 font-medium">Anti Bird / Pigeon Grills</Link></li>
                <li><Link href="/gallery?filter=window" className="text-brandText/75 hover:text-brandGold text-sm transition-all hover:pl-1 font-medium">Window Safety Fixtures</Link></li>
                <li><Link href="/gallery?filter=staircase" className="text-brandText/75 hover:text-brandGold text-sm transition-all hover:pl-1 font-medium">Staircase Invisible Wire Nets</Link></li>
                <li><Link href="/gallery?filter=terrace" className="text-brandText/75 hover:text-brandGold text-sm transition-all hover:pl-1 font-medium">Terrace & Rooftop Grills</Link></li>
              </ul>
            </div>

            {/* Recent Articles */}
            <div className="bg-white border border-brandDark/10 p-8 rounded-xl shadow-sm">
              <h3 className="font-accent text-[11px] font-bold uppercase tracking-widest text-brandDark mb-4 border-b-2 border-brandGold pb-2">Related Articles</h3>
              <ul className="flex flex-col gap-4">
                {blogPosts.filter(p => p.slug !== post.slug).slice(0, 5).map((p) => (
                  <li key={p.slug} className="border-b border-brandDark/5 pb-3 last:border-b-0 last:pb-0">
                    <span className="font-accent text-[9px] font-bold uppercase text-brandGold block mb-1">{p.category}</span>
                    <Link href={`/blog/${p.slug}`} className="text-brandText/85 hover:text-brandGold text-xs sm:text-sm font-semibold transition-all line-clamp-2">
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
