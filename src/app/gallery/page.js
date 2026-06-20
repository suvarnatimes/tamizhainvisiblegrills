"use client";

import { useState, useRef, useEffect, Suspense } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';

function GalleryContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  
  // Read active filter from URL params
  const activeFilter = searchParams.get('filter') || 'all';

  // 1. Filtering Logic
  const handleFilterClick = (category) => {
    router.push(`/gallery?filter=${category}`, { scroll: false });
  };

  // 2. Draggable Before/After Slider Logic
  const [sliderPercent, setSliderPercent] = useState(50);
  const sliderRef = useRef(null);
  const isSliding = useRef(false);

  const moveSlider = (clientX) => {
    if (!sliderRef.current) return;
    const rect = sliderRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    let percentage = (x / rect.width) * 100;
    if (percentage < 0) percentage = 0;
    if (percentage > 100) percentage = 100;
    setSliderPercent(percentage);
  };

  const handleMouseDown = () => { isSliding.current = true; };
  
  useEffect(() => {
    const handleMouseUp = () => { isSliding.current = false; };
    const handleMouseMove = (e) => {
      if (!isSliding.current) return;
      moveSlider(e.clientX);
    };

    window.addEventListener('mouseup', handleMouseUp);
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const handleTouchMove = (e) => {
    moveSlider(e.touches[0].clientX);
  };

  // 3. Lightbox Modal Logic
  const [lightbox, setLightbox] = useState({ active: false, src: '', title: '', desc: '' });
  const openLightbox = (card) => {
    setLightbox({
      active: true,
      src: card.img,
      title: card.title,
      desc: card.desc
    });
  };

  const closeLightbox = () => {
    setLightbox(prev => ({ ...prev, active: false }));
  };

  const categories = [
    { name: "All Installs", id: "all" },
    { name: "Anti Bird Grills", id: "anti-bird" },
    { name: "Child Safety", id: "child-safety" },
    { name: "Balcony Protection", id: "balcony" },
    { name: "Window Grills", id: "window" },
    { name: "Stairwells", id: "staircase" },
  ];

  const galleryItems = [
    { title: "Anti Bird Balcony Grills", category: ["anti-bird", "balcony"], img: "/images/service-terrace.png", desc: "Premium pigeon and bird exclusion net grills installed at a residential apartment balcony in OMR, Chennai." },
    { title: "Child Safety Window Grills", category: ["child-safety", "window"], img: "/images/project-window.png", desc: "Heavy-duty structural childproof safety net installation for bedroom windows in Anna Nagar, Chennai." },
    { title: "Premium Apartment Balcony", category: ["balcony", "child-safety"], img: "/images/portfolio-chennai.png", desc: "Installed SS 316 invisible safety grills with a 3-inch horizontal spacing for family protection in Velachery, Chennai." },
    { title: "Modern Bedroom Windows", category: ["window"], img: "/images/service-window.png", desc: "Replaced outdated box iron grills with clean vertical steel safety cables in Adyar, Chennai." },
    { title: "Duplex Villa Open Staircase", category: ["staircase", "child-safety"], img: "/images/service-staircase.png", desc: "Complete vertical tension grid installation in an open duplex villa stairwell in ECR, Chennai." },
    { title: "Commercial Rooftop Balcony", category: ["balcony", "anti-bird"], img: "/images/portfolio-coimbatore.png", desc: "Enclosed rooftop lounge with durable invisible cable grills in Nungambakkam, Chennai." }
  ];

  const filteredItems = galleryItems.filter(item => 
    activeFilter === 'all' || item.category.includes(activeFilter)
  );

  return (
    <>
      {/* Gallery Hero Section */}
      <section className="bg-brandDark text-brandBg pt-40 pb-12 text-center">
        <div className="max-w-7xl mx-auto px-6">
          <span className="font-accent text-xs font-bold uppercase tracking-[0.2em] text-brandGold mb-3 block">
            Completed Works Portfolio
          </span>
          <h1 className="font-heading text-4xl sm:text-6xl font-bold mb-4 text-brandGold">
            Transparent Safety Architectures
          </h1>
          <p className="text-base sm:text-lg text-white/90 max-w-2xl mx-auto font-light leading-relaxed">
            Witness our engineering precision across residential apartments, offices, staircases, and terrace balconies in Chennai.
          </p>
        </div>
      </section>

      {/* Gallery Main section */}
      <section className="py-10 bg-brandBg">
        <div className="max-w-7xl mx-auto px-6">
          
          {/* Filters */}
          <div className="flex flex-wrap justify-center gap-3 mb-16">
            {categories.map((cat) => (
              <button 
                key={cat.id}
                onClick={() => handleFilterClick(cat.id)}
                className={`px-6 py-2.5 font-accent text-xs font-bold uppercase tracking-wider rounded border transition-all duration-300 ${
                  activeFilter === cat.id 
                    ? 'bg-brandDark text-brandBg border-brandDark shadow-sm' 
                    : 'bg-white text-brandDark border-brandDark/10 hover:border-brandDark hover:bg-brandDark hover:text-brandBg'
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>

          {/* Masonry Columns Layout */}
          <div className="columns-1 md:columns-2 lg:columns-3 gap-6 mb-20">
            
            {/* Draggable Before/After Card (Always visible under balcony/child-safety/anti-bird or all filters) */}
            {(activeFilter === 'all' || activeFilter === 'balcony' || activeFilter === 'child-safety' || activeFilter === 'anti-bird') && (
              <div className="break-inside-avoid bg-white border border-brandDark/10 rounded-lg overflow-hidden mb-6 shadow-sm">
                <div 
                  ref={sliderRef}
                  onTouchMove={handleTouchMove}
                  className="relative w-full h-[350px] overflow-hidden select-none cursor-ew-resize"
                >
                  {/* Before (Unsafe Balcony) */}
                  <div className="absolute inset-0 z-20 border-r-2 border-brandGold overflow-hidden" style={{ width: `${sliderPercent}%` }}>
                    <img 
                      src="/images/hero-bg.png" 
                      alt="Balcony without grills (Before)" 
                      className="absolute inset-0 w-full h-full object-cover max-w-none filter grayscale sepia"
                      style={{ width: sliderRef.current?.getBoundingClientRect().width }}
                    />
                    <span className="absolute bottom-3 left-3 bg-brandDark/70 text-white font-accent text-[10px] uppercase tracking-wider px-2.5 py-1 rounded">Unsafe Balcony</span>
                  </div>

                  {/* After (Installed Grills) */}
                  <div className="absolute inset-0 z-10">
                    <img 
                      src="/images/project-balcony.png" 
                      alt="Balcony with installed invisible safety grills (After)" 
                      className="w-full h-full object-cover"
                    />
                    <span className="absolute bottom-3 right-3 bg-brandDark/70 text-white font-accent text-[10px] uppercase tracking-wider px-2.5 py-1 rounded">Installed Cable Grills</span>
                  </div>

                  {/* Handle line key */}
                  <div 
                    onMouseDown={handleMouseDown}
                    onTouchStart={handleMouseDown}
                    className="absolute top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-brandGold text-brandDark flex items-center justify-center shadow-lg z-30 font-bold select-none cursor-ew-resize" 
                    style={{ left: `${sliderPercent}%`, marginLeft: '-20px' }}
                  >
                    &harr;
                  </div>
                </div>
                <div className="p-6">
                  <span className="font-accent text-[10px] font-bold uppercase tracking-wider text-brandGold block mb-1">Interactive View</span>
                  <h3 className="font-heading text-lg font-bold text-brandDark">Balcony Security Transformation</h3>
                </div>
              </div>
            )}

            {/* General Filtered Cards */}
            {filteredItems.map((item, idx) => (
              <div 
                key={idx}
                onClick={() => openLightbox(item)}
                className="break-inside-avoid bg-white border border-brandDark/10 rounded-lg overflow-hidden mb-6 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 cursor-pointer group"
              >
                <div className="relative overflow-hidden">
                  <img src={item.img} alt={item.title} className="w-full h-auto object-cover transition-transform duration-700 ease-out group-hover:scale-105" />
                </div>
                <div className="p-6">
                  <span className="font-accent text-[10px] font-bold uppercase tracking-wider text-brandGold block mb-1">
                    {item.category.join(' & ')}
                  </span>
                  <h3 className="font-heading text-lg font-bold text-brandDark">{item.title}</h3>
                </div>
              </div>
            ))}

          </div>

        </div>
      </section>

      {/* Lightbox Modal */}
      {lightbox.active && (
        <div 
          onClick={closeLightbox}
          className="fixed inset-0 bg-brandDark/95 z-[2000] flex items-center justify-center p-6 animate-fade-in"
        >
          <div 
            onClick={(e) => e.stopPropagation()} 
            className="relative max-w-4xl w-full flex flex-col items-center"
          >
            <button 
              onClick={closeLightbox}
              className="absolute -top-12 right-0 text-brandBg text-3xl font-light hover:text-brandGold transition-colors"
              aria-label="Close Lightbox"
            >
              &times;
            </button>
            <img 
              src={lightbox.src} 
              alt={lightbox.title} 
              className="max-h-[70vh] rounded-md shadow-2xl object-contain"
            />
            <div className="text-center mt-6 max-w-xl text-brandBg">
              <h3 className="font-heading text-2xl font-bold mb-2">{lightbox.title}</h3>
              <p className="text-brandBg/75 text-sm leading-relaxed">{lightbox.desc}</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default function GalleryPage() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center bg-brandBg text-brandDark">Loading Showcase...</div>}>
      <GalleryContent />
    </Suspense>
  );
}
