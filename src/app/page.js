"use client";

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import PortfolioCarousel from '../components/PortfolioCarousel';
import BuilderCarousel from '../components/BuilderCarousel';




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
  // 1. Interactive TN Map State
  const [activeCity, setActiveCity] = useState(null);
  const [tooltip, setTooltip] = useState({ active: false, name: '', count: '', x: 0, y: 0 });
  const mapContainerRef = useRef(null);

  const mapMarkers = [
    { name: "Chennai", count: 940, cx: 320, cy: 60 },
    { name: "Hosur", count: 180, cx: 100, cy: 70 },
    { name: "Vellore", count: 210, cx: 240, cy: 80 },
    { name: "Salem", count: 330, cx: 160, cy: 180 },
    { name: "Erode", count: 260, cx: 120, cy: 210 },
    { name: "Coimbatore", count: 480, cx: 70, cy: 245 },
    { name: "Trichy", count: 310, cx: 200, cy: 250 },
    { name: "Madurai", count: 380, cx: 160, cy: 340 },
    { name: "Tirunelveli", count: 190, cx: 125, cy: 440 },
  ];

  const handleMarkerEnter = (marker, e) => {
    setActiveCity(marker.name);
    if (mapContainerRef.current) {
      const containerRect = mapContainerRef.current.getBoundingClientRect();
      const markerRect = e.currentTarget.getBoundingClientRect();
      const x = markerRect.left - containerRect.left + (markerRect.width / 2);
      const y = markerRect.top - containerRect.top;
      setTooltip({ active: true, name: marker.name, count: marker.count, x, y });
    }
  };

  const handleMarkerLeave = () => {
    setActiveCity(null);
    setTooltip(prev => ({ ...prev, active: false }));
  };

  const handleCityItemEnter = (cityName) => {
    setActiveCity(cityName);
    // Find coordinates from markers
    const marker = mapMarkers.find(m => m.name === cityName);
    const svgEl = document.querySelector(`[data-city-dot="${cityName}"]`);
    if (marker && svgEl && mapContainerRef.current) {
      const containerRect = mapContainerRef.current.getBoundingClientRect();
      const markerRect = svgEl.getBoundingClientRect();
      const x = markerRect.left - containerRect.left + (markerRect.width / 2);
      const y = markerRect.top - containerRect.top;
      setTooltip({ active: true, name: marker.name, count: marker.count, x, y });
    }
  };

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
      location: "Ramanathapuram, Coimbatore",
      rating: "★★★★★"
    },
    {
      quote: "Highly recommend their staircase invisible grill solutions. They created a beautiful tension safety net inside our double-height villa, keeping it looking spacious, clean, and highly architectural.",
      author: "Vinoth Kumar",
      location: "KK Nagar, Madurai",
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
    { q: "Do you serve all of Tamil Nadu?", a: "Yes. We cover all major cities including Chennai, Coimbatore, Madurai, Salem, Trichy, Erode, Tirunelveli, Vellore, Hosur, Thanjavur, and their surrounding districts." },
    { q: "What is the invisible grill price in Chennai?", a: "Pricing depends on the total square footage, selected cable gap spacing (2\", 3\" or 4\"), and specific mounting structure layout. Typically, invisible grills range from ₹120 to ₹180 per sq.ft. including installation." },
    { q: "How strong are invisible grill cables?", a: "Our SS 316 cables are rated with a high-tensile strength that can withstand impact loads up to 400kg. The cables have minor elasticity, absorbing impacts without structural breakage or loosening." }
  ];

  // 4. Form Submission Interceptor
  const handleFormSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for contacting Tamizha Invisible Grills. Our site inspection engineers will call you shortly to arrange a free measurement session!');
    e.target.reset();
  };

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-28 bg-brandDark overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/hero-bg.png" 
            alt="Luxury apartment balcony overlooking skyline at sunset" 
            className="w-full h-full object-cover opacity-45"
          />
          {/* Wire grid overlay mimicking invisible grills */}
          <div className="absolute inset-0 bg-cable-lines bg-[size:40px_100%] pointer-events-none opacity-30"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-brandDark/80 to-brandText/60 pointer-events-none"></div>
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
              Premium marine-grade invisible grill safety systems for high-rise apartments, luxury villas, staircases, and window installations across Tamil Nadu.
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
                  <CountUp target={15} suffix="+" />
                </span>
                <span className="text-[10px] sm:text-xs uppercase tracking-wider text-white/70 mt-1">Cities Served</span>
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
      <section className="py-20 bg-white overflow-hidden border-b border-brandDark/5">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <span className="font-accent text-[11px] font-bold uppercase tracking-widest text-brandGold mb-2 block">
            Our Happy Clients
          </span>
          <h2 className="font-heading text-3xl md:text-5xl mb-6">
            Trusted By Chennai's Finest Builders
          </h2>
          <p className="text-brandText/70 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto mb-12">
            We are proud to collaborate with Chennai's premier real estate developers and building contractors, providing high-tensile marine-grade invisible safety grills for their landmark gated community apartment projects and luxury villas.
          </p>

          <div className="flex justify-center items-center w-full min-h-[220px] sm:min-h-[260px] md:min-h-[360px] relative mt-10">
            <BuilderCarousel />
          </div>
        </div>
      </section>

      {/* Scrolling Project Showcase */}
      <section className="py-20 bg-brandBg overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 mb-8 text-center">
          <span className="font-accent text-[11px] font-bold uppercase tracking-widest text-brandGold mb-2 block">Recent Portfolios</span>
          <h2 className="font-heading text-3xl md:text-5xl">Architectural Installs</h2>
        </div>

        <PortfolioCarousel items={mapMarkers} />
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-brandBg">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="font-accent text-[11px] font-bold uppercase tracking-widest text-brandGold mb-2 block">Our Expertise</span>
            <h2 className="font-heading text-3xl md:text-5xl">Tailored Safety Installations</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { id: "balcony", title: "Balcony Invisible Grills", img: "/images/service-balcony.png", desc: "Maximize your balcony safety with highly aesthetic 316-grade steel cables. Blends beautifully with modern interior architectures." },
              { id: "window", title: "Window Invisible Grills", img: "/images/service-window.png", desc: "Replaces old heavy iron bars with sleek structural wire grills. Offers easy emergency escape options and clear natural lighting." },
              { id: "staircase", title: "Staircase Safety Grills", img: "/images/service-staircase.png", desc: "Premium vertical stairwell protective grids. Perfect for schools, commercial offices, and villas with open staircases." },
              { id: "terrace", title: "Terrace Safety Solutions", img: "/images/service-terrace.png", desc: "Keep your open penthouses or terraces safe for evening get-togethers without locking away the refreshing cool evening breeze." },
              { id: "residential", title: "Residential Installations", img: "/images/service-residential.png", desc: "Comprehensive flat safety overhauls. Perfect for gated communities requesting uniformity in external design elements." },
              { id: "commercial", title: "Commercial Installations", img: "/images/service-commercial.png", desc: "Reliable safety nets for tech parks, commercial complexes, rooftop cafeterias, and profiles requiring code compliance." },
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

      {/* Why Choose Us */}
      <section className="py-24 bg-white">
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
              <p className="text-brandText/70 text-sm leading-relaxed">Tolerates extreme heat, cyclonic winds, and heavy rainfall typical across coastal Tamil Nadu regions without snapping.</p>
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
      <section className="py-24 bg-white">
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

      {/* Coverage Map Section */}
      <section className="py-24 bg-brandDark text-brandBg">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
            <span className="font-accent text-[11px] font-bold uppercase tracking-widest text-brandGold mb-2 block">Serving Tamil Nadu</span>
            <h2 className="font-heading text-3xl md:text-5xl text-brandBg mb-6">Regional Availability</h2>
            <p className="text-brandBg/80 leading-relaxed mb-8 max-w-md mx-auto lg:mx-0">
              We provide premium safety services across all major urban zones in Tamil Nadu. Our specialized teams offer on-site consultations within 24 hours.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {mapMarkers.map((city) => (
                <div 
                  key={city.name}
                  onMouseEnter={() => handleCityItemEnter(city.name)}
                  onMouseLeave={handleMarkerLeave}
                  className={`flex items-center gap-2 border p-3 rounded text-sm font-semibold transition-all duration-300 ${
                    activeCity === city.name 
                      ? 'bg-brandGold text-brandDark border-brandGold' 
                      : 'bg-white/5 border-white/10 hover:border-brandGold hover:text-brandGold'
                  }`}
                >
                  <span className={`w-1.5 h-1.5 rounded-full ${activeCity === city.name ? 'bg-brandDark' : 'bg-brandGold'}`}></span>
                  {city.name}
                </div>
              ))}
            </div>
          </div>

          {/* Interactive Map Visual */}
          <div ref={mapContainerRef} className="relative bg-white/5 border border-white/10 rounded-2xl p-6 min-h-[480px] flex items-center justify-center">
            {/* Tooltip */}
            <div className={`absolute bg-brandDark text-brandBg border border-brandGold px-3 py-2 rounded text-xs pointer-events-none transition-opacity duration-300 -translate-x-1/2 -translate-y-12 z-50 ${
              tooltip.active ? 'opacity-100' : 'opacity-0'
            }`} style={{ left: tooltip.x, top: tooltip.y }}>
              <strong>{tooltip.name}</strong>
              <div className="text-[10px] text-brandGold mt-0.5">{tooltip.count}+ Installs Completed</div>
            </div>

            <svg className="w-full max-w-[420px] h-auto stroke-brandBg/30 fill-brandBg/10" viewBox="0 0 400 500" xmlns="http://www.w3.org/2000/svg">
              <path strokeWidth="1.5" d="M120 40 L160 30 L220 50 L270 50 L310 40 L350 40 L340 80 L320 110 L300 130 L310 160 L330 180 L330 220 L350 250 L370 280 L370 300 L320 320 L270 330 L260 370 L230 400 L210 420 L190 440 L160 480 L140 490 L120 470 L110 440 L100 400 L70 350 L75 320 L60 280 L50 240 L60 200 L70 170 L90 140 L100 100 Z" />
              
              {mapMarkers.map((marker) => (
                <g 
                  key={marker.name}
                  data-city-dot={marker.name}
                  onMouseEnter={(e) => handleMarkerEnter(marker, e)}
                  onMouseLeave={handleMarkerLeave}
                  className="cursor-pointer group/dot"
                >
                  <circle 
                    cx={marker.cx} 
                    cy={marker.cy} 
                    r={activeCity === marker.name ? 7 : 5}
                    className={`transition-all duration-300 stroke-brandGold/40 ${
                      activeCity === marker.name 
                        ? 'fill-white stroke-[12px]' 
                        : 'fill-brandGold stroke-[8px] group-hover/dot:fill-white group-hover/dot:stroke-[12px]'
                    }`}
                  />
                </g>
              ))}
            </svg>
          </div>

        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-white">
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
      <section className="py-24 bg-brandBg">
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
      <section className="py-24 bg-white" id="inspection-form">
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
                <a href="tel:+919876543210" className="hover:text-brandGold transition-colors font-semibold">+91 98765 43210</a>
              </li>
              <li className="flex items-center gap-3 text-base">
                <svg className="w-5 h-5 text-brandGold" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                  <polyline points="22,6 12,13 2,6"/>
                </svg>
                <a href="mailto:info@tamizhainvisiblegrills.com" className="hover:text-brandGold transition-colors font-semibold">info@tamizhainvisiblegrills.com</a>
              </li>
            </ul>

            <div className="bg-brandBg border border-brandDark/10 p-6 rounded-lg max-w-sm">
              <h3 className="font-heading text-lg mb-2">Business Hours</h3>
              <p className="text-brandText/60 text-xs leading-relaxed">
                Monday - Saturday: 9:00 AM - 7:00 PM<br/>
                Sunday: Closed
              </p>
            </div>
          </div>

          {/* Form */}
          <div className="bg-brandBg border border-brandDark/10 p-8 sm:p-10 rounded-2xl shadow-xl">
            <form onSubmit={handleFormSubmit} className="flex flex-col gap-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="form-name" className="font-accent text-[10px] font-bold text-brandDark uppercase tracking-wider">Full Name</label>
                  <input type="text" id="form-name" placeholder="John Doe" required className="p-3 border border-brandDark/10 rounded bg-white text-sm focus:outline-none focus:border-brandGold" />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="form-phone" className="font-accent text-[10px] font-bold text-brandDark uppercase tracking-wider">Phone Number</label>
                  <input type="tel" id="form-phone" placeholder="98765 43210" required className="p-3 border border-brandDark/10 rounded bg-white text-sm focus:outline-none focus:border-brandGold" />
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="form-email" className="font-accent text-[10px] font-bold text-brandDark uppercase tracking-wider">Email Address</label>
                  <input type="email" id="form-email" placeholder="john@example.com" className="p-3 border border-brandDark/10 rounded bg-white text-sm focus:outline-none focus:border-brandGold" />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="form-city" className="font-accent text-[10px] font-bold text-brandDark uppercase tracking-wider">Your City</label>
                  <select id="form-city" defaultValue="" required className="p-3 border border-brandDark/10 rounded bg-white text-sm focus:outline-none focus:border-brandGold">
                    <option value="" disabled>Select City</option>
                    <option value="Chennai">Chennai</option>
                    <option value="Coimbatore">Coimbatore</option>
                    <option value="Madurai">Madurai</option>
                    <option value="Salem">Salem</option>
                    <option value="Trichy">Trichy</option>
                    <option value="Erode">Erode</option>
                    <option value="Tirunelveli">Tirunelveli</option>
                    <option value="Vellore">Vellore</option>
                    <option value="Hosur">Hosur</option>
                    <option value="Other">Other Tamil Nadu City</option>
                  </select>
                </div>
              </div>
              <div className="flex flex-col gap-1.5">
                <label htmlFor="form-service" className="font-accent text-[10px] font-bold text-brandDark uppercase tracking-wider">Required Service</label>
                <select id="form-service" defaultValue="" required className="p-3 border border-brandDark/10 rounded bg-white text-sm focus:outline-none focus:border-brandGold">
                  <option value="" disabled>Select Installation Type</option>
                  <option value="Balcony Invisible Grills">Balcony Invisible Grills</option>
                  <option value="Window Invisible Grills">Window Invisible Grills</option>
                  <option value="Staircase Safety Grills">Staircase Safety Grills</option>
                  <option value="Terrace Safety Solutions">Terrace Safety Solutions</option>
                  <option value="Residential Project">Residential Project</option>
                  <option value="Commercial Project">Commercial Project</option>
                </select>
              </div>
              <div className="flex flex-col gap-1.5">
                <label htmlFor="form-message" className="font-accent text-[10px] font-bold text-brandDark uppercase tracking-wider">Requirement Details</label>
                <textarea id="form-message" placeholder="Please specify dimensions (e.g. 10ft x 6ft) or safety details..." className="p-3 border border-brandDark/10 rounded bg-white text-sm focus:outline-none focus:border-brandGold min-h-[100px] resize-y" />
              </div>
              
              <button type="submit" className="w-full text-center py-4 font-accent text-xs font-bold uppercase tracking-wider text-brandBg bg-brandDark rounded hover:bg-brandGold hover:text-brandDark transition-all duration-300 mt-2">
                Submit Consultation Request
              </button>
            </form>
          </div>

        </div>
      </section>

      {/* Blog Previews */}
      <section className="py-24 bg-brandBg">
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
