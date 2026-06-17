export const metadata = {
  title: 'About Us | Tamizha Invisible Grills',
  description: 'Discover the story of Tamizha Invisible Grills. Our mission, values, and commitment to providing top-tier balcony, window, and staircase safety grills in Tamil Nadu.',
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
            Balancing uncompromising structural strength with beautiful open skies for Tamil Nadu's high-rise communities.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-24 bg-brandBg">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="flex flex-col gap-6">
            <span className="font-accent text-[11px] font-bold uppercase tracking-widest text-brandGold block">Our Genesis</span>
            <h2 className="font-heading text-3xl sm:text-5xl leading-tight">Why We Started</h2>
            <p className="text-brandText/80 leading-relaxed text-sm sm:text-base">
              As Chennai and other metropolitan cities across Tamil Nadu expanded upwards with premium high-rises and luxury sky villas, home safety evolved. Traditional iron grills, though robust, felt like cages, blocking the wind, casting dark patterns into interiors, and clashing with elegant modern architectures.
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
      <section className="py-24 bg-white">
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

      {/* Core Values */}
      <section className="py-24 bg-brandBg">
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
      <section className="bg-brandDark text-brandBg py-16 text-center">
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
            <h2 className="font-accent text-3xl sm:text-5xl font-extrabold text-brandGold mb-1">15+</h2>
            <p className="text-[10px] sm:text-xs uppercase tracking-widest text-brandBg/80">Cities Covered</p>
          </div>
          <div>
            <h2 className="font-accent text-3xl sm:text-5xl font-extrabold text-brandGold mb-1">100%</h2>
            <p className="text-[10px] sm:text-xs uppercase tracking-widest text-brandBg/80">Happy Customers</p>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 bg-white">
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
    </>
  );
}
