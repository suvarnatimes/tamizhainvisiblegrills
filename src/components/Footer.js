import Link from 'next/link';

export default function Footer() {
  const cities = ["Chennai", "Coimbatore", "Madurai", "Salem", "Trichy", "Erode", "Tirunelveli", "Vellore", "Hosur", "Thanjavur"];

  return (
    <footer className="bg-brandDark text-brandBg border-t border-brandBg/10 py-16 text-sm">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
        
        {/* Brand Column */}
        <div className="flex flex-col gap-4">
          <h3 className="font-heading text-2xl font-bold text-brandGold">TAMIZHA</h3>
          <p className="text-brandBg/75 leading-relaxed max-w-xs">
            Installing high-tensile marine grade SS 316 invisible safety grills for balconies, window fixtures, staircases, and rooftops across Tamil Nadu.
          </p>
          <div className="flex gap-3 mt-2">
            <a href="#" className="flex items-center justify-center w-10 h-10 rounded-full border border-brandBg/20 text-brandBg hover:bg-brandGold hover:border-brandGold hover:text-brandDark hover:-translate-y-1 transition-all duration-300" aria-label="Facebook link">
              <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c4.56-.93 8-4.96 8-9.75z"/>
              </svg>
            </a>
            <a href="#" className="flex items-center justify-center w-10 h-10 rounded-full border border-brandBg/20 text-brandBg hover:bg-brandGold hover:border-brandGold hover:text-brandDark hover:-translate-y-1 transition-all duration-300" aria-label="Instagram link">
              <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
            </a>
          </div>
        </div>

        {/* Services Column */}
        <div className="flex flex-col gap-4">
          <h4 className="font-accent text-xs font-bold uppercase tracking-widest text-brandGold">Services</h4>
          <ul className="flex flex-col gap-2">
            <li><Link href="/gallery?filter=balcony" className="text-brandBg/75 hover:text-brandGold transition-all hover:pl-1">Balcony Grills</Link></li>
            <li><Link href="/gallery?filter=window" className="text-brandBg/75 hover:text-brandGold transition-all hover:pl-1">Window Grills</Link></li>
            <li><Link href="/gallery?filter=staircase" className="text-brandBg/75 hover:text-brandGold transition-all hover:pl-1">Staircase Grills</Link></li>
            <li><Link href="/gallery?filter=terrace" className="text-brandBg/75 hover:text-brandGold transition-all hover:pl-1">Terrace Protection</Link></li>
            <li><Link href="/gallery?filter=commercial" className="text-brandBg/75 hover:text-brandGold transition-all hover:pl-1">Commercial Solutions</Link></li>
          </ul>
        </div>

        {/* Company Column */}
        <div className="flex flex-col gap-4">
          <h4 className="font-accent text-xs font-bold uppercase tracking-widest text-brandGold">Company</h4>
          <ul className="flex flex-col gap-2">
            <li><Link href="/about" className="text-brandBg/75 hover:text-brandGold transition-all hover:pl-1">About Us</Link></li>
            <li><Link href="/gallery" className="text-brandBg/75 hover:text-brandGold transition-all hover:pl-1">Our Showcase</Link></li>
            <li><Link href="/blog" className="text-brandBg/75 hover:text-brandGold transition-all hover:pl-1">Resources</Link></li>
            <li><Link href="/contact" className="text-brandBg/75 hover:text-brandGold transition-all hover:pl-1">Contact Us</Link></li>
          </ul>
        </div>

        {/* Coverage Cities Column */}
        <div className="flex flex-col gap-4">
          <h4 className="font-accent text-xs font-bold uppercase tracking-widest text-brandGold">Coverage Areas</h4>
          <div className="grid grid-cols-2 gap-2 text-brandBg/75">
            {cities.map((city) => (
              <span key={city}>{city}</span>
            ))}
          </div>
        </div>
      </div>

      {/* Copyright Footer */}
      <div className="max-w-7xl mx-auto px-6 pt-6 border-t border-brandBg/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-brandBg/70">
        <p>&copy; 2026 Tamizha Invisible Grills. All Rights Reserved.</p>
        <p>Premium Home Safety Installations.</p>
      </div>
    </footer>
  );
}
