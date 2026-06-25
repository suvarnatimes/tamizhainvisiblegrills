"use client";

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import PortfolioCarousel from '../components/PortfolioCarousel';
import BuilderCarousel from '../components/BuilderCarousel';
import InteractiveGrills from '../components/InteractiveGrills';




// Simple CountUp Component for trust metrics
function CountUp({ target, suffix = '' }) {
  const [count, setCount] = useState(0);
  const elementRef = useRef(null);

  useEffect(() => {
    let active = true;
    const duration = 2000; // 2s duration
    const steps = 60;
    const stepTime = duration / steps;
    const increment = target / steps;
    let current = 0;

    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        let timer = setInterval(() => {
          if (!active) return;
          current += increment;
          if (current >= target) {
            setCount(target);
            clearInterval(timer);
          } else {
            setCount(Math.floor(current));
          }
        }, stepTime);
        observer.disconnect();
      }
    }, { threshold: 0.2 });

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      active = false;
      observer.disconnect();
    };
  }, [target]);

  return <span ref={elementRef}>{count}{suffix}</span>;
}

export default function HomePage() {
  const portfolioItems = [
    { name: "Chennai", displayName: "OMR, Chennai" },
    { name: "Coimbatore", displayName: "ECR, Chennai" },
    { name: "Erode", displayName: "Velachery, Chennai" },
    { name: "Hosur", displayName: "Anna Nagar, Chennai" },
    { name: "Madurai", displayName: "Adyar, Chennai" },
    { name: "Salem", displayName: "Tambaram, Chennai" },
    { name: "Tirunelveli", displayName: "Nungambakkam, Chennai" },
    { name: "Trichy", displayName: "T. Nagar, Chennai" },
    { name: "Vellore", displayName: "Guindy, Chennai" },
  ];

  // 2. Testimonials Slider State
  const [currentSlide, setCurrentSlide] = useState(0);
  const testimonials = [
    {
      quote: "Living on the 18th floor in Chennai, balcony safety was our biggest concern. Tamizha Invisible Grills installed a robust 3-inch gap safety grill. We now enjoy our skyline views without any constant child-safety anxiety.",
      author: "Ramanathan K.",
      location: "OMR, Chennai",
      rating: "★★★★★"
    },
    {
      quote: "The installation quality is outstanding. The team was highly professional, using vacuum dust collectors during drilling. The grills are virtually invisible from the courtyard below.",
      author: "Deepa S.",
      location: "Adyar, Chennai",
      rating: "★★★★★"
    },
    {
      quote: "Highly recommend their staircase invisible grill solutions. They created a beautiful tension safety net inside our double-height villa, keeping it looking spacious, clean, and highly architectural.",
      author: "Vinoth Kumar",
      location: "Anna Nagar, Chennai",
      rating: "★★★★★"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  // 3. FAQ Accordion State
  const [openFaq, setOpenFaq] = useState(null);
  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqs = [
    { q: "What are invisible grills?", a: "Invisible grills are modern safety systems constructed from high-tensile marine-grade stainless steel cables (typically grade 316) coated with nylon or Teflon. They provide robust protection without obstructing the panoramic view from balconies, terraces, or windows." },
    { q: "Are invisible grills safe for children?", a: "Yes, absolutely. Invisible grills are engineered specifically to prevent accidental falls. The gaps between the steel cables are typically set at 2 to 4 inches, ensuring children, toddlers, and pets cannot squeeze through while remaining highly secure." },
    { q: "How long do invisible grills last?", a: "Constructed from top-quality materials like high-grade SS 316 steel with protective coating, our invisible grills can easily last 10 to 15 years or more. They are highly resistant to weathering, tension loss, and physical impact." },
    { q: "Are they rust resistant?", a: "Yes. Tamizha Invisible Grills uses premium marine-grade Stainless Steel 316 cables, which offer superior corrosion resistance, making them ideal for humid coastal climates like Chennai." },
    { q: "What is the installation process?", a: "The process involves drilling precision mounting holes, fixing aluminum click-tracks onto walls/structures, threading and tensioning the high-tensile steel cables, and capping the tracks with luxury matching cover profiles." },
    { q: "What areas do you serve?", a: "We primarily serve the entire Chennai metropolitan area, including OMR, ECR, Anna Nagar, Adyar, Velachery, Tambaram, Guindy, T. Nagar, and all surrounding residential and commercial districts." },
    { q: "What is the invisible grill price in Chennai?", a: "Pricing depends on the total square footage, selected cable gap spacing (2\", 3\" or 4\"), and specific mounting structure layout. Typically, invisible grills range from ₹120 to ₹180 per sq.ft. including installation." },
    { q: "How strong are invisible grill cables?", a: "Our SS 316 cables are rated with a high-tensile strength that can withstand impact loads up to 400kg. The cables have minor elasticity, absorbing impacts without structural breakage or loosening." }
  ];

  // 4. Form Submission Interceptor
  const handleFormSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for contacting Tamizha Invisible Grills. Our site inspection engineers will call you shortly to arrange a free measurement session!');
    e.target.reset();
  };

  // JSON-LD Structured Data for SEO
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(faq => ({
      '@type': 'Question',
      name: faq.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.a,
      },
    })),
  };

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: 'Invisible Grill Installation',
    provider: {
      '@type': 'LocalBusiness',
      name: 'Tamizha Invisible Grills',
      telephone: '+919944200664',
      url: 'https://www.tamizhainvisiblegrills.com',
    },
    areaServed: {
      '@type': 'City',
      name: 'Chennai',
      sameAs: 'https://en.wikipedia.org/wiki/Chennai',
    },
    description: 'Premium invisible grill installation services in Chennai. Balcony invisible grills, child safety grills, window grills, staircase safety grills using marine-grade SS 316 cables.',
    offers: {
      '@type': 'Offer',
      priceCurrency: 'INR',
      price: '120',
      priceSpecification: {
        '@type': 'UnitPriceSpecification',
        price: '120',
        priceCurrency: 'INR',
        unitText: 'per sq.ft.',
      },
      availability: 'https://schema.org/InStock',
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Invisible Grill Services',
      itemListElement: [
        { '@type': 'OfferCatalog', name: 'Child Safety Invisible Grills', description: 'High-tensile steel wire safety grids to secure balconies and prevent falls for toddlers and children.' },
        { '@type': 'OfferCatalog', name: 'Anti Bird Invisible Grills', description: 'Elegant invisible mesh netting to prevent bird nesting without blocking sunlight or views.' },
        { '@type': 'OfferCatalog', name: 'Balcony Invisible Grills', description: 'Premium 316-grade steel cables for balcony safety that blends with modern architecture.' },
        { '@type': 'OfferCatalog', name: 'Window Invisible Grills', description: 'Sleek structural wire grills replacing heavy iron bars with clear natural lighting.' },
        { '@type': 'OfferCatalog', name: 'Staircase Safety Grills', description: 'Premium vertical stairwell protective grids for villas and commercial spaces.' },
        { '@type': 'OfferCatalog', name: 'Terrace Safety Solutions', description: 'Safety solutions for open penthouses and terraces without blocking the breeze.' },
      ],
    },
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://www.tamizhainvisiblegrills.com',
      },
    ],
  };

  const webPageSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Invisible Grills Chennai | Premium Balcony & Child Safety Grill Installation',
    description: 'Chennai\'s #1 invisible grill installers. Premium marine-grade SS 316 balcony invisible grills, child safety grills & window grills. 2500+ projects. Free site inspection.',
    url: 'https://www.tamizhainvisiblegrills.com',
    isPartOf: {
      '@type': 'WebSite',
      name: 'Tamizha Invisible Grills',
      url: 'https://www.tamizhainvisiblegrills.com',
    },
  };

  return (
    <>
      {/* JSON-LD Structured Data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
      />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-28 bg-brandDark overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/hero-bg.png" 
            alt="Luxury apartment balcony overlooking skyline at sunset" 
            className="w-full h-full object-cover opacity-45"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-brandDark/80 to-brandText/60 pointer-events-none"></div>
          {/* Interactive animated invisible grills overlay */}
          <InteractiveGrills />
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10 text-brandBg w-full flex flex-col items-center text-center">
          <div className="max-w-4xl flex flex-col items-center">
            <span className="font-accent text-xs font-bold uppercase tracking-[0.2em] text-brandGold mb-4 block">
              Safety Without Sacrificing The View
            </span>
            <h1 className="font-heading text-4xl sm:text-5xl md:text-7xl font-bold leading-none mb-6 text-brandGold">
              Protecting What Matters 
              <span className="block text-brandGold mt-2">Without Blocking Your View</span>
            </h1>
            <p className="text-base sm:text-xl font-light text-white/90 leading-relaxed mb-8 max-w-2xl mx-auto">
              Premium marine-grade invisible safety grills for high-rise balconies, open windows, and staircases. Chennai's trusted safety partner.
            </p>

            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <Link href="/contact#inspection-form" className="px-8 py-3 bg-brandGold text-brandDark font-accent text-xs font-bold uppercase tracking-wider rounded hover:bg-transparent hover:text-brandGold hover:border hover:border-brandGold transition-all duration-300">
                Free Inspection
              </Link>
              <Link href="/gallery" className="px-8 py-3 bg-transparent text-brandBg border border-brandBg font-accent text-xs font-bold uppercase tracking-wider rounded hover:bg-brandBg hover:text-brandDark transition-all duration-300">
                View Projects
              </Link>
            </div>

            {/* Trust Indicators */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-8 border-t border-brandBg/20 max-w-3xl w-full text-center">
              <div className="flex flex-col">
                <span className="font-accent text-2xl sm:text-4xl font-bold text-brandGold">
                  <CountUp target={10} suffix="+" />
                </span>
                <span className="text-[10px] sm:text-xs uppercase tracking-wider text-white/70 mt-1">Years Experience</span>
              </div>
              <div className="flex flex-col">
                <span className="font-accent text-2xl sm:text-4xl font-bold text-brandGold">
                  <CountUp target={2500} suffix="+" />
                </span>
                <span className="text-[10px] sm:text-xs uppercase tracking-wider text-white/70 mt-1">Projects Done</span>
              </div>
              <div className="flex flex-col">
                <span className="font-accent text-2xl sm:text-4xl font-bold text-brandGold">
                  <CountUp target={50} suffix="+" />
                </span>
                <span className="text-[10px] sm:text-xs uppercase tracking-wider text-white/70 mt-1">Areas Covered</span>
              </div>
              <div className="flex flex-col">
                <span className="font-accent text-2xl sm:text-4xl font-bold text-brandGold">
                  <CountUp target={100} suffix="%" />
                </span>
                <span className="text-[10px] sm:text-xs uppercase tracking-wider text-white/70 mt-1">Satisfaction</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Happy Clients & Builders section */}
      <section className="py-12 bg-white overflow-hidden border-b border-brandDark/5">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <span className="font-accent text-[11px] font-bold uppercase tracking-widest text-brandGold mb-2 block">
            Our Happy Clients
          </span>
          <h2 className="font-heading text-3xl md:text-5xl mb-6">
            Trusted By Chennai's Finest Builders
          </h2>
          <p className="text-brandText/70 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto mb-6">
            We are proud to collaborate with Chennai's premier real estate developers and building contractors, providing high-tensile marine-grade invisible safety grills for their landmark gated community apartment projects and luxury villas.
          </p>

          <div className="flex justify-center items-center w-full min-h-[160px] sm:min-h-[200px] md:min-h-[280px] relative mt-4">
            <BuilderCarousel />
          </div>
        </div>
      </section>

      {/* Scrolling Project Showcase */}
      <section className="py-12 bg-brandBg overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 mb-8 text-center">
          <span className="font-accent text-[11px] font-bold uppercase tracking-widest text-brandGold mb-2 block">Recent Portfolios</span>
          <h2 className="font-heading text-3xl md:text-5xl">Architectural Installs</h2>
        </div>

        <PortfolioCarousel items={portfolioItems} />
      </section>

      {/* Services Grid */}
      <section className="py-14 bg-brandBg">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="font-accent text-[11px] font-bold uppercase tracking-widest text-brandGold mb-2 block">Our Expertise</span>
            <h2 className="font-heading text-3xl md:text-5xl">Tailored Safety Installations</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { id: "child-safety", title: "Child Safety Invisible Grills", img: "/images/project-balcony.png", desc: "Sleek high-tensile steel wire safety grids to secure balconies, open windows, and stairwells. Prevents falls and ensures absolute protection for toddlers and children." },
              { id: "anti-bird", title: "Anti Bird Invisible Grills", img: "/images/project-window.png", desc: "Keep pigeons and other birds away from your balconies and windows. Elegant, high-durability invisible mesh netting that prevents nesting without blocking sunlight, views, or air." },
              { id: "balcony", title: "Balcony Invisible Grills", img: "/images/service-balcony.png", desc: "Maximize your balcony safety with highly aesthetic 316-grade steel cables. Blends beautifully with modern interior architectures." },
              { id: "window", title: "Window Invisible Grills", img: "/images/service-window.png", desc: "Replaces old heavy iron bars with sleek structural wire grills. Offers easy emergency escape options and clear natural lighting." },
              { id: "staircase", title: "Staircase Safety Grills", img: "/images/service-staircase.png", desc: "Premium vertical stairwell protective grids. Perfect for schools, commercial offices, and villas with open staircases." },
              { id: "terrace", title: "Terrace Safety Solutions", img: "/images/service-terrace.png", desc: "Keep your open penthouses or terraces safe for evening get-togethers without locking away the refreshing cool evening breeze." },
            ].map((service, idx) => (
              <div key={idx} className="bg-white rounded-lg overflow-hidden border border-brandDark/5 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col text-center items-center">
                <div className="h-56 w-full relative overflow-hidden">
                  <img src={service.img} alt={service.title} className="w-full h-full object-cover transition-transform duration-700 ease-out hover:scale-105" />
                </div>
                <div className="p-8 flex flex-col flex-grow items-center">
                  <h3 className="font-heading text-xl mb-2">{service.title}</h3>
                  <p className="text-brandText/60 text-sm mb-6 flex-grow leading-relaxed">{service.desc}</p>
                  <Link href={`/contact?service=${service.id}`} className="inline-flex items-center gap-2 justify-center font-accent text-xs font-bold uppercase tracking-wider text-brandGold group mt-auto">
                    Enquire Service
                    <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                      <polyline points="12 5 19 12 12 19"></polyline>
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ISO Quality Certified Section */}
      <section className="py-16 bg-white border-b border-brandDark/5">
        <div className="max-w-4xl mx-auto px-6">
          <div className="relative border-4 border-double border-brandGold/45 bg-brandBg/10 rounded-2xl p-8 md:p-12 text-center shadow-md overflow-hidden group hover:shadow-lg transition-all duration-300">
            {/* Elegant Background Stamp/Overlay */}
            <div className="absolute -right-10 -bottom-10 w-48 h-48 rounded-full border-4 border-brandGold/5 pointer-events-none flex items-center justify-center font-heading text-5xl font-bold text-brandGold/5 select-none transform rotate-12">
              ISO 9001
            </div>
            
            {/* Certificate Header Badge */}
            <div className="flex justify-center mb-6">
              <div className="relative w-20 h-20 flex items-center justify-center bg-brandDark rounded-full border border-brandGold/30 text-brandGold shadow-md">
                <svg className="w-10 h-10" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0110 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0114 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.745 3.745 0 011.043 3.296A3.745 3.745 0 0121 12z"/>
                </svg>
                {/* Micro-animation ring */}
                <div className="absolute inset-0 rounded-full border-2 border-brandGold/20 animate-ping opacity-25"></div>
              </div>
            </div>

            {/* Certificate Content */}
            <span className="font-accent text-[11px] font-bold uppercase tracking-[0.25em] text-brandGold mb-2 block">
              Quality Assurance Seal
            </span>
            <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-extrabold text-brandDark mb-4">
              ISO 9001:2015 CERTIFIED MATERIALS
            </h2>
            <div className="w-24 h-0.5 bg-brandGold/40 mx-auto mb-6"></div>
            
            <p className="font-heading text-lg md:text-xl italic text-brandText/80 leading-relaxed mb-6 max-w-2xl mx-auto">
              "We certify that Tamizha Invisible Grills exclusively uses ISO-certified, marine-grade Stainless Steel 316 structural cables and high-tensile structural aluminum framing systems."
            </p>
            
            <p className="text-brandText/60 text-xs sm:text-sm leading-relaxed max-w-xl mx-auto">
              Every cable batch undergoes rigorous mechanical tensile tests (rated up to 400kg load capacity) and chemical testing to guarantee 100% rust-resistance and lifetime structural safety in humid coastal climates like Chennai.
            </p>

            <div className="flex flex-wrap justify-center gap-6 mt-8 pt-6 border-t border-brandGold/15 text-[10px] font-accent font-bold uppercase tracking-wider text-brandDark/70">
              <span className="flex items-center gap-1.5">
                <svg className="w-4 h-4 text-[#25D366]" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"/></svg>
                Marine Grade SS 316
              </span>
              <span className="flex items-center gap-1.5">
                <svg className="w-4 h-4 text-[#25D366]" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"/></svg>
                Tensile Tested (400KG)
              </span>
              <span className="flex items-center gap-1.5">
                <svg className="w-4 h-4 text-[#25D366]" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"/></svg>
                100% Rust Proof
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-14 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="font-accent text-[11px] font-bold uppercase tracking-widest text-brandGold mb-2 block">Technical Excellence</span>
            <h2 className="font-heading text-3xl md:text-5xl">Designed For Absolute Safety</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-brandBg border border-brandDark/10 p-8 rounded-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 text-center flex flex-col items-center">
              <div className="w-12 h-12 rounded-full bg-brandDark/5 flex items-center justify-center text-brandGold mb-6">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                </svg>
              </div>
              <h3 className="font-heading text-xl mb-3">Rust Resistant SS 316</h3>
              <p className="text-brandText/70 text-sm leading-relaxed">Made from Marine Grade Stainless Steel 316 cables wrapped in Teflon coatings, designed to survive extreme humidity without corrosion.</p>
            </div>

            {/* Feature 2 */}
            <div className="bg-brandBg border border-brandDark/10 p-8 rounded-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 text-center flex flex-col items-center">
              <div className="w-12 h-12 rounded-full bg-brandDark/5 flex items-center justify-center text-brandGold mb-6">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
                </svg>
              </div>
              <h3 className="font-heading text-xl mb-3">High Tensile Strength</h3>
              <p className="text-brandText/70 text-sm leading-relaxed">Each cable is capable of holding up to 400kg of load without breaking, providing absolute safety for high-rise balconies.</p>
            </div>

            {/* Feature 3 */}
            <div className="bg-brandBg border border-brandDark/10 p-8 rounded-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 text-center flex flex-col items-center">
              <div className="w-12 h-12 rounded-full bg-brandDark/5 flex items-center justify-center text-brandGold mb-6">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                  <circle cx="9" cy="7" r="4"/>
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                </svg>
              </div>
              <h3 className="font-heading text-xl mb-3">Toddler & Pet Protection</h3>
              <p className="text-brandText/70 text-sm leading-relaxed">Features 2" to 4" spacing variations to prevent small children, toddlers, or house pets from squeezing through the gaps.</p>
            </div>

            {/* Feature 4 */}
            <div className="bg-brandBg border border-brandDark/10 p-8 rounded-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 text-center flex flex-col items-center">
              <div className="w-12 h-12 rounded-full bg-brandDark/5 flex items-center justify-center text-brandGold mb-6">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <circle cx="12" cy="12" r="10"/>
                  <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
                  <path d="M2 12h20"/>
                </svg>
              </div>
              <h3 className="font-heading text-xl mb-3">100% Unobstructed Views</h3>
              <p className="text-brandText/70 text-sm leading-relaxed">Maintain the modern open architectural theme of your premium apartment. The thin cables disappear visually from a short distance.</p>
            </div>

            {/* Feature 5 */}
            <div className="bg-brandBg border border-brandDark/10 p-8 rounded-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 text-center flex flex-col items-center">
              <div className="w-12 h-12 rounded-full bg-brandDark/5 flex items-center justify-center text-brandGold mb-6">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
                </svg>
              </div>
              <h3 className="font-heading text-xl mb-3">All Weather Resistance</h3>
              <p className="text-brandText/70 text-sm leading-relaxed">Tolerates extreme heat, cyclonic winds, and heavy rainfall typical across coastal Chennai regions without snapping.</p>
            </div>

            {/* Feature 6 */}
            <div className="bg-brandBg border border-brandDark/10 p-8 rounded-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 text-center flex flex-col items-center">
              <div className="w-12 h-12 rounded-full bg-brandDark/5 flex items-center justify-center text-brandGold mb-6">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>
                </svg>
              </div>
              <h3 className="font-heading text-xl mb-3">Precision Installation</h3>
              <p className="text-brandText/70 text-sm leading-relaxed">Installed by our certified safety technicians using premium anchor fasteners and specialized tensioning equipment.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Work Process Roadmap */}
      <section className="py-14 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="font-accent text-[11px] font-bold uppercase tracking-widest text-brandGold mb-2 block">Execution Cycle</span>
            <h2 className="font-heading text-3xl md:text-5xl">Our Installation Journey</h2>
          </div>

          <div className="max-w-4xl mx-auto relative pl-8 md:pl-0">
            {/* Timeline center line */}
            <div className="absolute top-0 bottom-0 left-[9px] md:left-1/2 w-0.5 bg-brandDark/10 -translate-x-1/2 z-0"></div>

            {[
              { step: "01", title: "Site Inspection", desc: "Our safety engineers inspect your balcony structure and wall strength to evaluate mounting points." },
              { step: "02", title: "Requirement Analysis", desc: "Evaluating wire thickness, tension load criteria, and cable spacing suitable for children or pets." },
              { step: "03", title: "Measurement", desc: "Laser measurements of the mounting profiles are taken to guarantee zero gaps at installation corners." },
              { step: "04", title: "Custom Design", desc: "Cables and track profiles are custom pre-fabricated to minimize noise and installation dust at your site." },
              { step: "05", title: "Professional Installation", desc: "Expert installation using heavy-duty Hilti fasteners and professional cable tensioning tools." },
              { step: "06", title: "Quality Check", desc: "Testing individual cable tension using pressure sensors and verifying the rigidity of anchoring plates." },
              { step: "07", title: "Project Handover", desc: "Clearing up work debris, final safety demo, and issuing the official warranty certificate document." },
            ].map((step, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <div key={idx} className={`relative z-10 flex flex-col md:flex-row items-start md:items-center mb-12 last:mb-0 ${isEven ? 'md:flex-row-reverse' : ''}`}>
                  {/* Circle dot indicator */}
                  <div className="absolute left-[9px] md:left-1/2 w-[22px] h-[22px] rounded-full bg-brandGold border-4 border-white shadow-md -translate-x-1/2 z-20"></div>
                  
                  {/* Space filler / Content block wrapper */}
                  <div className="w-full md:w-1/2 md:px-12">
                    <div className="bg-brandBg border border-brandDark/10 p-6 rounded-lg max-w-md md:ml-auto">
                      <div className="font-accent text-xs font-bold text-brandGold uppercase tracking-wider mb-1">Step {step.step}</div>
                      <h3 className="font-heading text-lg mb-2">{step.title}</h3>
                      <p className="text-brandText/65 text-sm leading-relaxed">{step.desc}</p>
                    </div>
                  </div>
                  <div className="hidden md:block w-1/2"></div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-14 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="font-accent text-[11px] font-bold uppercase tracking-widest text-brandGold mb-2 block">Satisfied Homeowners</span>
            <h2 className="font-heading text-3xl md:text-5xl">Stories of Absolute Safety</h2>
          </div>

          <div className="max-w-3xl mx-auto overflow-hidden relative py-6">
            <div className="flex transition-transform duration-500 ease-out" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
              {testimonials.map((slide, idx) => (
                <div key={idx} className="min-w-full px-6 box-border text-center">
                  <div className="bg-brandBg border border-brandDark/10 p-10 md:p-14 rounded-lg shadow-md relative">
                    <p className="font-heading text-xl sm:text-2xl italic leading-relaxed text-brandDark mb-8">"{slide.quote}"</p>
                    <div className="flex flex-col items-center gap-1">
                      <span className="font-accent text-xs font-bold uppercase tracking-wider text-brandDark">{slide.author}</span>
                      <span className="text-xs text-brandText/60">{slide.location}</span>
                      <span className="text-brandGold text-sm mt-1">{slide.rating}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Dots navigation */}
            <div className="flex justify-center gap-2 mt-8">
              {testimonials.map((_, idx) => (
                <button 
                  key={idx}
                  onClick={() => setCurrentSlide(idx)}
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${currentSlide === idx ? 'bg-brandGold scale-125' : 'bg-brandDark/20'}`}
                  aria-label={`View testimonial ${idx + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQs Page Section */}
      <section className="py-14 bg-brandBg">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="font-accent text-[11px] font-bold uppercase tracking-widest text-brandGold mb-2 block">Client Enquiries</span>
            <h2 className="font-heading text-3xl md:text-5xl">Frequently Answered Questions</h2>
          </div>

          <div className="max-w-3xl mx-auto flex flex-col gap-4">
            {faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div key={idx} className="border-b border-brandDark/10 bg-white rounded-md shadow-sm">
                  <button 
                    onClick={() => toggleFaq(idx)}
                    className="w-full text-left py-5 px-6 flex justify-between items-center font-heading text-lg sm:text-xl font-semibold text-brandDark"
                  >
                    {faq.q}
                    <span className={`text-brandGold text-2xl transition-transform duration-300 ${isOpen ? 'rotate-45' : ''}`}>+</span>
                  </button>
                  <div className={`overflow-hidden transition-all duration-500 ${isOpen ? 'max-h-[300px] border-t border-brandDark/5' : 'max-h-0'}`}>
                    <div className="p-6 text-brandText/70 text-sm leading-relaxed bg-brandBg/10">{faq.a}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Free site inspection enquiry form */}
      <section className="py-14 bg-white" id="inspection-form">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          <div className="flex flex-col justify-center">
            <span className="font-accent text-[11px] font-bold uppercase tracking-widest text-brandGold mb-2 block">Consultation Request</span>
            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl mb-4">Get a Free Site Inspection Today</h2>
            <p className="text-brandText/70 text-sm sm:text-base leading-relaxed mb-8 max-w-md">
              Schedule a visit from our structural engineers. We will measure your space, discuss cable layouts, show sample kits, and provide an exact quotation.
            </p>

            <ul className="flex flex-col gap-4 mb-8">
              <li className="flex items-center gap-3 text-base">
                <svg className="w-5 h-5 text-brandGold" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                </svg>
                <a href="tel:+919944200664" className="hover:text-brandGold transition-colors font-semibold">+91 99442 00664</a>
              </li>
              <li className="flex items-center gap-3 text-base">
                <svg className="w-5 h-5 text-brandGold" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                  <polyline points="22,6 12,13 2,6"/>
                </svg>
                <a href="mailto:info@tamizhainvisiblegrills.com" className="hover:text-brandGold transition-colors font-semibold break-all">info@tamizhainvisiblegrills.com</a>
              </li>
            </ul>

            <div className="bg-brandBg border border-brandDark/10 p-6 rounded-lg max-w-sm">
              <h3 className="font-heading text-lg mb-2">Business Hours</h3>
              <p className="text-brandText/60 text-xs leading-relaxed">
                Monday - Sunday: 6:00 AM - 11:00 PM
              </p>
            </div>
          </div>

          {/* Form */}
          <div className="bg-brandBg border border-brandDark/10 p-8 sm:p-10 rounded-2xl shadow-xl">
            <form onSubmit={handleFormSubmit} className="flex flex-col gap-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="form-name" className="font-accent text-[10px] font-bold text-brandDark uppercase tracking-wider">Full Name</label>
                  <input type="text" id="form-name" placeholder="John Doe" required className="w-full p-3 border border-brandDark/10 rounded bg-white text-sm focus:outline-none focus:border-brandGold" />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="form-phone" className="font-accent text-[10px] font-bold text-brandDark uppercase tracking-wider">Phone Number</label>
                  <input type="tel" id="form-phone" placeholder="99442 00664" required className="w-full p-3 border border-brandDark/10 rounded bg-white text-sm focus:outline-none focus:border-brandGold" />
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="form-email" className="font-accent text-[10px] font-bold text-brandDark uppercase tracking-wider">Email Address</label>
                  <input type="email" id="form-email" placeholder="john@example.com" className="w-full p-3 border border-brandDark/10 rounded bg-white text-sm focus:outline-none focus:border-brandGold" />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="form-city" className="font-accent text-[10px] font-bold text-brandDark uppercase tracking-wider">Your Area</label>
                  <select id="form-city" defaultValue="" required className="w-full p-3 border border-brandDark/10 rounded bg-white text-sm focus:outline-none focus:border-brandGold">
                    <option value="" disabled>Select Chennai Area</option>
                    <option value="OMR / ECR">OMR / ECR</option>
                    <option value="Velachery / Tambaram">Velachery / Tambaram</option>
                    <option value="Anna Nagar / Ambattur">Anna Nagar / Ambattur</option>
                    <option value="Adyar / Guindy">Adyar / Guindy</option>
                    <option value="T. Nagar / Nungambakkam">T. Nagar / Nungambakkam</option>
                    <option value="Porur / Poonamallee">Porur / Poonamallee</option>
                    <option value="Other Chennai Area">Other Chennai Area</option>
                  </select>
                </div>
              </div>
              <div className="flex flex-col gap-1.5">
                <label htmlFor="form-service" className="font-accent text-[10px] font-bold text-brandDark uppercase tracking-wider">Required Service</label>
                <select id="form-service" defaultValue="" required className="w-full p-3 border border-brandDark/10 rounded bg-white text-sm focus:outline-none focus:border-brandGold">
                  <option value="" disabled>Select Installation Type</option>
                  <option value="Anti Bird Invisible Grills">Anti Bird Invisible Grills</option>
                  <option value="Child Safety Invisible Grills">Child Safety Invisible Grills</option>
                  <option value="Balcony Invisible Grills">Balcony Invisible Grills</option>
                  <option value="Window Invisible Grills">Window Invisible Grills</option>
                  <option value="Staircase Safety Grills">Staircase Safety Grills</option>
                  <option value="Terrace Safety Solutions">Terrace Safety Solutions</option>
                </select>
              </div>
              <div className="flex flex-col gap-1.5">
                <label htmlFor="form-message" className="font-accent text-[10px] font-bold text-brandDark uppercase tracking-wider">Requirement Details</label>
                <textarea id="form-message" placeholder="Please specify dimensions (e.g. 10ft x 6ft) or safety details..." className="w-full p-3 border border-brandDark/10 rounded bg-white text-sm focus:outline-none focus:border-brandGold min-h-[100px] resize-y"></textarea>
              </div>
              
              <button type="submit" className="w-full text-center py-4 font-accent text-xs font-bold uppercase tracking-wider text-brandBg bg-brandDark rounded hover:bg-brandGold hover:text-brandDark transition-all duration-300 mt-2">
                Submit Consultation Request
              </button>
            </form>
          </div>

        </div>
      </section>

      {/* Blog Previews */}
      <section className="py-14 bg-brandBg">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="font-accent text-[11px] font-bold uppercase tracking-widest text-brandGold mb-2 block">Safety Library</span>
            <h2 className="font-heading text-3xl md:text-5xl">Latest Architecture Insights</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg border border-brandDark/5 overflow-hidden flex flex-col items-center text-center hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300">
              <div className="h-48 w-full relative overflow-hidden">
                <img src="/images/service-residential.png" alt="Invisible Grill vs Traditional iron grill comparison" className="w-full h-full object-cover" />
              </div>
              <div className="p-6 flex flex-col flex-grow items-center">
                <span className="font-accent text-[9px] font-bold uppercase tracking-wider text-brandGold mb-1">Comparison Guide</span>
                <h3 className="font-heading text-lg mb-2"><Link href="/blog/invisible-grill-vs-traditional-grill" className="hover:text-brandGold">Invisible Grill vs Traditional Grill: Which is Better?</Link></h3>
                <p className="text-brandText/60 text-xs mb-4 leading-relaxed">Explore details of security levels, aesthetic impacts, and maintenance cost analyses between modern steel wire nets and traditional iron grids.</p>
                <Link href="/blog/invisible-grill-vs-traditional-grill" className="font-accent text-[10px] font-bold uppercase text-brandGold mt-auto group flex items-center justify-center gap-1">
                  Read Guide <span className="transition-transform group-hover:translate-x-1">&rarr;</span>
                </Link>
              </div>
            </div>

            <div className="bg-white rounded-lg border border-brandDark/5 overflow-hidden flex flex-col items-center text-center hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300">
              <div className="h-48 w-full relative overflow-hidden">
                <img src="/images/service-window.png" alt="Benefits of invisible safety meshes" className="w-full h-full object-cover" />
              </div>
              <div className="p-6 flex flex-col flex-grow items-center">
                <span className="font-accent text-[9px] font-bold uppercase tracking-wider text-brandGold mb-1">Benefits Guide</span>
                <h3 className="font-heading text-lg mb-2"><Link href="/blog/top-benefits-of-installing-invisible-grills" className="hover:text-brandGold">Top Benefits of Installing Invisible Grills in Apartments</Link></h3>
                <p className="text-brandText/60 text-xs mb-4 leading-relaxed">From architectural elegance to strict high-rise structural security compliance, see why modern urban apartments prefer wire safety systems.</p>
                <Link href="/blog/top-benefits-of-installing-invisible-grills" className="font-accent text-[10px] font-bold uppercase text-brandGold mt-auto group flex items-center justify-center gap-1">
                  Read Guide <span className="transition-transform group-hover:translate-x-1">&rarr;</span>
                </Link>
              </div>
            </div>

            <div className="bg-white rounded-lg border border-brandDark/5 overflow-hidden flex flex-col items-center text-center hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300">
              <div className="h-48 w-full relative overflow-hidden">
                <img src="/images/service-balcony.png" alt="Child safety high-rise solutions" className="w-full h-full object-cover" />
              </div>
              <div className="p-6 flex flex-col flex-grow items-center">
                <span className="font-accent text-[9px] font-bold uppercase tracking-wider text-brandGold mb-1">Safety Resource</span>
                <h3 className="font-heading text-lg mb-2"><Link href="/blog/child-safety-solutions-high-rise-apartments" className="hover:text-brandGold">Child Safety Solutions for High-Rise Apartments</Link></h3>
                <p className="text-brandText/60 text-xs mb-4 leading-relaxed">A comprehensive guide detailing safety margins, child lock installations, and the tension standards for modern balconies.</p>
                <Link href="/blog/child-safety-solutions-high-rise-apartments" className="font-accent text-[10px] font-bold uppercase text-brandGold mt-auto group flex items-center justify-center gap-1">
                  Read Guide <span className="transition-transform group-hover:translate-x-1">&rarr;</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
