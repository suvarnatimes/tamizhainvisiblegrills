export const metadata = {
  title: 'About Us | Tamizha Invisible Grills',
  description: 'Discover the story of Tamizha Invisible Grills. Our mission, values, and commitment to providing top-tier balcony, window, and staircase safety grills in Chennai.',
};

export default function AboutPage() {
  return (
    <>
      {/* About Hero Section */}
      <section className="bg-brandDark text-brandBg pt-40 pb-20 text-center relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <span className="font-accent text-xs font-bold uppercase tracking-[0.2em] text-brandGold mb-3 block">
            Architectural Safety Pioneers
          </span>
          <h1 className="font-heading text-4xl sm:text-6xl font-bold mb-4 text-brandGold">
            Redefining Modern Living Views
          </h1>
          <p className="text-base sm:text-lg text-white/90 max-w-2xl mx-auto font-light leading-relaxed">
            Balancing uncompromising structural strength with beautiful open skies for Chennai's high-rise communities.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-14 bg-brandBg">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="flex flex-col gap-6">
            <span className="font-accent text-[11px] font-bold uppercase tracking-widest text-brandGold block">Our Genesis</span>
            <h2 className="font-heading text-3xl sm:text-5xl leading-tight">Why We Started</h2>
            <p className="text-brandText/80 leading-relaxed text-sm sm:text-base">
              As the Chennai metropolitan area expanded upwards with premium high-rises and luxury sky villas, home safety evolved. Traditional iron grills, though robust, felt like cages, blocking the wind, casting dark patterns into interiors, and clashing with elegant modern architectures.
            </p>
            <p className="text-brandText/80 leading-relaxed text-sm sm:text-base font-semibold">
              Tamizha Invisible Grills was founded with a singular purpose: to offer high-grade, rust-resistant vertical wire protection systems that guarantee safety without sacrificing panoramic views.
            </p>
            <p className="text-brandText/80 leading-relaxed text-sm sm:text-base">
              By selecting premium marine-grade Stainless Steel 316 and engineering custom structural tensioning frameworks, we introduced safety grills that are virtually transparent, maintaining the premium layout of contemporary homes.
            </p>
          </div>

          <div className="rounded-2xl overflow-hidden shadow-xl border border-brandDark/10">
            <img src="/images/project-balcony.png" alt="Installation planning session at balcony site" className="w-full h-auto" />
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-14 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Mission */}
          <div className="bg-brandBg border border-brandDark/10 p-10 rounded-lg flex flex-col gap-4">
            <h3 className="font-heading text-2xl font-bold flex items-center gap-3">
              <svg className="w-6 h-6 text-brandGold" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="10"/>
                <circle cx="12" cy="12" r="6"/>
                <circle cx="12" cy="12" r="2"/>
              </svg>
              Our Mission
            </h3>
            <p className="text-brandText/70 text-sm leading-relaxed">
              To deliver premium quality, high-tensile safety grill systems that blend perfectly into contemporary architectural facades. We aim to shield families from fall hazards while preserving natural light, fresh air circulation, and beautiful panoramic views.
            </p>
          </div>

          {/* Vision */}
          <div className="bg-brandBg border border-brandDark/10 p-10 rounded-lg flex flex-col gap-4">
            <h3 className="font-heading text-2xl font-bold flex items-center gap-3">
              <svg className="w-6 h-6 text-brandGold" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
                <circle cx="12" cy="12" r="3"/>
              </svg>
              Our Vision
            </h3>
            <p className="text-brandText/70 text-sm leading-relaxed">
              To stand as the most trusted, engineering-driven household safety partner in South India, setting standard-setting guidelines for structural strength, rust prevention, and visual integration in residential and commercial developments.
            </p>
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

      {/* Core Values */}
      <section className="py-14 bg-brandBg">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="font-accent text-[11px] font-bold uppercase tracking-widest text-brandGold mb-2 block">Corporate Philosophy</span>
            <h2 className="font-heading text-3xl md:text-5xl">Our Core Principles</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Absolute Safety", desc: "We do not compromise on load thresholds. Every installation goes through tension checks, securing children and pets." },
              { title: "Premium Quality", desc: "Using only SS 316 structural marine steel cords and pure aluminum click track caps to prevent corrosion spots." },
              { title: "Innovation", desc: "Using modern engineering tension keys and profile systems to guarantee long-term cable alignment without sagging." },
              { title: "Satisfaction", desc: "Our commitment continues post-install. We offer comprehensive structural warranties and responsive maintenance services." },
            ].map((value, idx) => (
              <div key={idx} className="bg-white p-8 rounded-lg border border-brandDark/10 text-center hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                <div className="text-brandGold mb-4 flex justify-center">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    {idx === 0 && <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>}
                    {idx === 1 && <polyline points="20 6 9 17 4 12"/>}
                    {idx === 2 && <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"/>}
                    {idx === 3 && <path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"/>}
                  </svg>
                </div>
                <h3 className="font-heading text-lg font-bold mb-2">{value.title}</h3>
                <p className="text-brandText/60 text-xs leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-brandDark text-brandBg py-10 text-center">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <h2 className="font-accent text-3xl sm:text-5xl font-extrabold text-brandGold mb-1">2,500+</h2>
            <p className="text-[10px] sm:text-xs uppercase tracking-widest text-brandBg/80">Projects Completed</p>
          </div>
          <div>
            <h2 className="font-accent text-3xl sm:text-5xl font-extrabold text-brandGold mb-1">10+</h2>
            <p className="text-[10px] sm:text-xs uppercase tracking-widest text-brandBg/80">Years Experience</p>
          </div>
          <div>
            <h2 className="font-accent text-3xl sm:text-5xl font-extrabold text-brandGold mb-1">50+</h2>
            <p className="text-[10px] sm:text-xs uppercase tracking-widest text-brandBg/80">Areas Covered</p>
          </div>
          <div>
            <h2 className="font-accent text-3xl sm:text-5xl font-extrabold text-brandGold mb-1">100%</h2>
            <p className="text-[10px] sm:text-xs uppercase tracking-widest text-brandBg/80">Happy Customers</p>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-14 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="font-accent text-[11px] font-bold uppercase tracking-widest text-brandGold mb-2 block">Safety Specialists</span>
            <h2 className="font-heading text-3xl md:text-5xl">Our Core Leadership</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { name: "Karthik Rajan", role: "Founding Director & Chief Engineer", img: "/images/project-balcony.png" },
              { name: "Arun Kumar", role: "Head of Field Operations", img: "/images/project-window.png" },
              { name: "Meera Krishnan", role: "Director of Customer Safety Relations", img: "/images/project-balcony.png" },
            ].map((member, idx) => (
              <div key={idx} className="bg-brandBg border border-brandDark/10 rounded-lg overflow-hidden group hover:shadow-md transition-all duration-300">
                <div className="h-80 overflow-hidden">
                  <img src={member.img} alt={member.name} className="w-full h-full object-cover transition-transform duration-75 group-hover:scale-105" />
                </div>
                <div className="p-6 text-center">
                  <h3 className="font-heading text-xl mb-1">{member.name}</h3>
                  <span className="font-accent text-[10px] font-bold text-brandGold uppercase tracking-wider">{member.role}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sister Concern CTA Section */}
      <section className="py-12 bg-brandBg border-t border-brandDark/10">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <span className="font-accent text-[11px] font-bold uppercase tracking-widest text-brandGold mb-2 block">Our Sister Services</span>
          <h2 className="font-heading text-2xl sm:text-3xl mb-4">Looking for Balcony Pigeon Safety Nets?</h2>
          <p className="text-brandText/70 text-sm leading-relaxed mb-6 max-w-xl mx-auto">
            Apart from invisible grills, we also offer high-durability polymer safety netting solutions. Protect your balconies from pigeons and birds with our specialized safety nets.
          </p>
          <a 
            href="http://tamizhabalconypigeonsafetynets.in/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="inline-flex items-center gap-2 px-6 py-3 bg-brandDark text-brandBg font-accent text-xs font-bold uppercase tracking-wider rounded hover:bg-brandGold hover:text-brandDark transition-all duration-300"
          >
            Visit Tamizha Safety Nets
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
              <polyline points="15 3 21 3 21 9"></polyline>
              <line x1="10" y1="14" x2="21" y2="3"></line>
            </svg>
          </a>
        </div>
      </section>
    </>
  );
}
