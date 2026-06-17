import Link from 'next/link';
import { blogPosts } from './blogData';

export const metadata = {
  title: 'Safety Resources & Blog | Tamizha Invisible Grills',
  description: 'Read expert articles on home safety, childproofing high-rises, invisible grill pricing in Chennai, maintenance advice, and comparisons.',
};

export default function BlogListingPage() {
  return (
    <>
      {/* Blog Hero */}
      <section className="bg-brandDark text-brandBg pt-40 pb-12 text-center">
        <div className="max-w-7xl mx-auto px-6">
          <span className="font-accent text-xs font-bold uppercase tracking-[0.2em] text-brandGold mb-3 block">
            Safety & Design Insights
          </span>
          <h1 className="font-heading text-4xl sm:text-6xl font-bold mb-4 text-brandGold">
            Home Safety Library
          </h1>
          <p className="text-base sm:text-lg text-white/90 max-w-2xl mx-auto font-light leading-relaxed">
            Expert articles on high-rise safety regulations, invisible grill engineering parameters, price estimates, and home childproofing ideas.
          </p>
        </div>
      </section>

      {/* Blog Listing Grid */}
      <section className="py-20 bg-brandBg">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          {/* Post Items */}
          <div className="lg:col-span-2 flex flex-col gap-8">
            {blogPosts.map((post) => (
              <article key={post.slug} className="bg-white border border-brandDark/10 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all duration-300">
                <div className="h-64 sm:h-80 w-full relative overflow-hidden">
                  <img src={post.img} alt={post.title} className="w-full h-full object-cover" />
                </div>
                <div className="p-8">
                  <span className="font-accent text-[10px] font-bold uppercase tracking-wider text-brandGold block mb-2">{post.category}</span>
                  <h2 className="font-heading text-2xl font-bold text-brandDark mb-3 hover:text-brandGold transition-colors">
                    <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                  </h2>
                  <p className="text-brandText/60 text-sm leading-relaxed mb-6">{post.excerpt}</p>
                  <Link href={`/blog/${post.slug}`} className="px-6 py-2.5 border border-brandDark font-accent text-xs font-bold uppercase tracking-wider rounded hover:bg-brandDark hover:text-brandBg transition-all duration-300">
                    Read Article
                  </Link>
                </div>
              </article>
            ))}
          </div>

          {/* Sidebar */}
          <div className="flex flex-col gap-8">
            
            {/* Categories Widget */}
            <div className="bg-white border border-brandDark/10 p-8 rounded-lg shadow-sm">
              <h3 className="font-accent text-[11px] font-bold uppercase tracking-widest text-brandDark mb-4 border-b-2 border-brandGold pb-2">Safety Categories</h3>
              <ul className="flex flex-col gap-3">
                <li><Link href="/blog" className="text-brandText/70 hover:text-brandGold text-sm transition-all hover:pl-1">All Resources</Link></li>
                <li><Link href="/gallery?filter=balcony" className="text-brandText/70 hover:text-brandGold text-sm transition-all hover:pl-1">Balcony Safety</Link></li>
                <li><Link href="/gallery?filter=window" className="text-brandText/70 hover:text-brandGold text-sm transition-all hover:pl-1">Window Fixtures</Link></li>
                <li><Link href="/gallery?filter=staircase" className="text-brandText/70 hover:text-brandGold text-sm transition-all hover:pl-1">Stairwells Protection</Link></li>
              </ul>
            </div>

            {/* Quick Reads Widget */}
            <div className="bg-white border border-brandDark/10 p-8 rounded-lg shadow-sm">
              <h3 className="font-accent text-[11px] font-bold uppercase tracking-widest text-brandDark mb-4 border-b-2 border-brandGold pb-2">Quick Reads</h3>
              <ul className="flex flex-col gap-3">
                {blogPosts.slice(0, 3).map((p) => (
                  <li key={p.slug} className="border-b border-brandDark/5 pb-2 last:border-b-0 last:pb-0">
                    <Link href={`/blog/${p.slug}`} className="text-brandText/75 hover:text-brandGold text-xs sm:text-sm font-semibold transition-all">
                      {p.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Estimate Callout */}
            <div className="bg-brandDark text-brandBg border border-brandDark/10 p-8 rounded-lg shadow-sm text-center">
              <h3 className="font-accent text-[11px] font-bold uppercase tracking-widest text-brandGold mb-3 pb-2 border-b border-brandBg/10">Request Estimate</h3>
              <p className="text-brandBg/80 text-xs leading-relaxed mb-6">
                Get free on-site inspections and quote pricing details in any city across Tamil Nadu.
              </p>
              <Link href="/contact#inspection-form" className="block w-full py-3 bg-brandGold text-brandDark font-accent text-xs font-bold uppercase tracking-widest rounded hover:bg-transparent hover:text-brandGold hover:border hover:border-brandGold transition-all duration-300">
                Free Quote
              </Link>
            </div>

          </div>

        </div>
      </section>
    </>
  );
}
