import Link from 'next/link';
import { blogPosts } from './blogData';
import JsonLd from '@/components/JsonLd';

export const metadata = {
  title: 'Invisible Grills Blog | Safety Tips, Price Guides & Technical Insights | Chennai',
  description: 'Comprehensive guides on invisible grill installation, high-rise balcony childproofing, anti-bird solutions, price breakdowns, and SS 316 marine-grade materials across Chennai and Tamil Nadu.',
  keywords: 'invisible grills blog Chennai, invisible grill installation guide, child safety grills tips, balcony safety Chennai, invisible grill price Chennai, SS 316 invisible grills',
  alternates: {
    canonical: 'https://www.chennaiinvisiblegrills.in/blog',
  },
  openGraph: {
    title: 'Safety Resources & Technical Blog | Tamizha Invisible Grills Chennai',
    description: 'Expert articles on invisible grill installation, pricing, childproofing high-rises, pigeon prevention, and SS 316 marine metallurgy across Chennai.',
    url: 'https://www.chennaiinvisiblegrills.in/blog',
    type: 'website',
  },
};

export default function BlogListingPage() {
  return (
    <>
      <JsonLd data={{
        '@context': 'https://schema.org',
        '@type': 'CollectionPage',
        name: 'Invisible Grills Blog - Safety Tips, Price Guides & Technical Insights',
        description: 'Comprehensive guides on invisible grill installation, high-rise balcony childproofing, anti-bird solutions, price breakdowns, and SS 316 marine-grade materials.',
        url: 'https://www.chennaiinvisiblegrills.in/blog',
        publisher: { '@type': 'Organization', name: 'Tamizha Invisible Grills', url: 'https://www.chennaiinvisiblegrills.in' },
      }} />
      <JsonLd data={{
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.chennaiinvisiblegrills.in' },
          { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://www.chennaiinvisiblegrills.in/blog' },
        ],
      }} />

      {/* Blog Hero */}
      <section className="bg-brandDark text-brandBg pt-40 pb-16 text-center">
        <div className="max-w-7xl mx-auto px-6">
          <span className="font-accent text-xs font-bold uppercase tracking-[0.2em] text-brandGold mb-3 block">
            Safety & Engineering Knowledge Base
          </span>
          <h1 className="font-heading text-4xl sm:text-6xl font-bold mb-4 text-brandGold">
            Home Safety & Architecture Insights
          </h1>
          <p className="text-base sm:text-lg text-white/90 max-w-3xl mx-auto font-light leading-relaxed">
            In-depth guides on high-rise balcony childproofing, coastal SS 316 rust prevention, anti-pigeon protection, price calculations, and RWA bylaws across Chennai and Tamil Nadu.
          </p>
        </div>
      </section>

      {/* Blog Listing Grid */}
      <section className="py-14 bg-brandBg">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          {/* Post Items */}
          <div className="lg:col-span-2 flex flex-col gap-8">
            {blogPosts.map((post) => (
              <article key={post.slug} className="bg-white border border-brandDark/10 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 flex flex-col md:flex-row">
                <div className="md:w-2/5 h-60 md:h-auto relative overflow-hidden bg-brandDark/5">
                  <img src={post.img} alt={post.title} className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" />
                </div>
                <div className="p-6 sm:p-8 md:w-3/5 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <span className="font-accent text-[10px] font-bold uppercase tracking-wider text-brandGold bg-brandGold/10 px-2.5 py-1 rounded">
                        {post.category}
                      </span>
                      <span className="text-[11px] text-brandText/60">{post.date}</span>
                    </div>
                    <h2 className="font-heading text-xl sm:text-2xl font-bold text-brandDark mb-3 hover:text-brandGold transition-colors leading-snug">
                      <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                    </h2>
                    <p className="text-brandText/65 text-sm leading-relaxed mb-6 line-clamp-3">
                      {post.excerpt}
                    </p>
                  </div>
                  <div>
                    <Link href={`/blog/${post.slug}`} className="inline-flex items-center gap-2 px-5 py-2.5 border border-brandDark font-accent text-xs font-bold uppercase tracking-wider rounded hover:bg-brandDark hover:text-brandBg transition-all duration-300">
                      Read Full Guide
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <line x1="5" y1="12" x2="19" y2="12"></line>
                        <polyline points="12 5 19 12 12 19"></polyline>
                      </svg>
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Sidebar */}
          <div className="flex flex-col gap-8">
            
            {/* Quick Consultation Callout */}
            <div className="bg-brandDark text-brandBg border border-brandDark/10 p-8 rounded-xl shadow-sm text-center">
              <span className="font-accent text-[10px] font-bold uppercase tracking-widest text-brandGold mb-2 block">Site Inspection</span>
              <h3 className="font-heading text-xl font-bold mb-2 text-brandBg">Book Free Measurement</h3>
              <p className="text-brandBg/80 text-xs leading-relaxed mb-6">
                Schedule a site visit from our certified structural safety engineers across Chennai and surrounding Tamil Nadu districts.
              </p>
              <Link href="/contact#inspection-form" className="block w-full py-3 bg-brandGold text-brandDark font-accent text-xs font-bold uppercase tracking-widest rounded hover:bg-transparent hover:text-brandGold hover:border hover:border-brandGold transition-all duration-300">
                Request Free Quote
              </Link>
            </div>

            {/* Categories Widget */}
            <div className="bg-white border border-brandDark/10 p-8 rounded-xl shadow-sm">
              <h3 className="font-accent text-[11px] font-bold uppercase tracking-widest text-brandDark mb-4 border-b-2 border-brandGold pb-2">Safety Specializations</h3>
              <ul className="flex flex-col gap-3">
                <li><Link href="/blog" className="text-brandText/75 hover:text-brandGold text-sm transition-all hover:pl-1 font-medium">All 10 Safety Resources</Link></li>
                <li><Link href="/gallery?filter=balcony" className="text-brandText/75 hover:text-brandGold text-sm transition-all hover:pl-1 font-medium">High-Rise Balcony Grills</Link></li>
                <li><Link href="/gallery?filter=child-safety" className="text-brandText/75 hover:text-brandGold text-sm transition-all hover:pl-1 font-medium">Child & Pet Safety Solutions</Link></li>
                <li><Link href="/gallery?filter=anti-bird" className="text-brandText/75 hover:text-brandGold text-sm transition-all hover:pl-1 font-medium">Anti-Bird & Pigeon Grills</Link></li>
                <li><Link href="/gallery?filter=window" className="text-brandText/75 hover:text-brandGold text-sm transition-all hover:pl-1 font-medium">Window Safety Fixtures</Link></li>
                <li><Link href="/gallery?filter=staircase" className="text-brandText/75 hover:text-brandGold text-sm transition-all hover:pl-1 font-medium">Staircase & Duplex Wire Nets</Link></li>
                <li><Link href="/gallery?filter=terrace" className="text-brandText/75 hover:text-brandGold text-sm transition-all hover:pl-1 font-medium">Terrace & Rooftop Enclosures</Link></li>
              </ul>
            </div>

            {/* Quick Reads Widget */}
            <div className="bg-white border border-brandDark/10 p-8 rounded-xl shadow-sm">
              <h3 className="font-accent text-[11px] font-bold uppercase tracking-widest text-brandDark mb-4 border-b-2 border-brandGold pb-2">Popular Articles</h3>
              <ul className="flex flex-col gap-4">
                {blogPosts.slice(0, 5).map((p) => (
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
      </section>
    </>
  );
}
