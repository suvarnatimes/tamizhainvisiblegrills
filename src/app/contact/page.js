"use client";

import { useEffect } from 'react';

export default function ContactPage() {
  const handleFormSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for submitting your detailed requirements to Tamizha Invisible Grills. Our engineering team will review your specifications and contact you shortly with estimates!');
    e.target.reset();
  };

  useEffect(() => {
    // Auto-select query filters on load if parameters exist
    const urlParams = new URLSearchParams(window.location.search);
    const preselectedService = urlParams.get('service');
    if (preselectedService) {
      const selectElement = document.getElementById('c-service');
      if (selectElement) {
        for (let i = 0; i < selectElement.options.length; i++) {
          if (selectElement.options[i].value.toLowerCase().includes(preselectedService.toLowerCase())) {
            selectElement.selectedIndex = i;
            break;
          }
        }
      }
    }
  }, []);

  const cities = [
    "Chennai Circle", "Coimbatore Circle", "Madurai Circle", "Salem Circle",
    "Trichy Circle", "Erode Circle", "Tirunelveli Circle", "Vellore Circle",
    "Hosur Circle", "Thanjavur Circle", "Tuticorin Area", "Kanyakumari Area"
  ];

  return (
    <>
      {/* Contact Hero Section */}
      <section className="bg-brandDark text-brandBg pt-40 pb-12 text-center">
        <div className="max-w-7xl mx-auto px-6">
          <span className="font-accent text-xs font-bold uppercase tracking-[0.2em] text-brandGold mb-3 block">
            Connect With Us
          </span>
          <h1 className="font-heading text-4xl sm:text-6xl font-bold mb-4 text-brandGold">
            Get A Free Quote
          </h1>
          <p className="text-base sm:text-lg text-white/90 max-w-2xl mx-auto font-light leading-relaxed">
            Book a free dimensions measurement & sample inspection session at your apartment or villa.
          </p>
        </div>
      </section>

      {/* Main Form/Info Block */}
      <section className="py-20 bg-brandBg" id="inspection-form">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Info Details */}
          <div className="flex flex-col justify-center">
            <span className="font-accent text-[11px] font-bold uppercase tracking-widest text-brandGold mb-2 block">Direct Lines</span>
            <h2 className="font-heading text-3xl sm:text-4xl mb-4 text-brandDark">Talk to Our Safety Engineers</h2>
            <p className="text-brandText/75 text-sm sm:text-base leading-relaxed mb-8 max-w-md">
              Have questions about cable tension, warranty structures, or pricing details? Get in touch with our helpline or initiate a direct chat.
            </p>

            <div className="flex flex-col gap-6">
              {/* Phone Card */}
              <div className="bg-white border border-brandDark/10 p-6 rounded-lg shadow-sm flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-brandDark/5 flex items-center justify-center text-brandGold flex-shrink-0">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                  </svg>
                </div>
                <div>
                  <h3 className="font-heading text-lg font-bold">Phone Hotline</h3>
                  <p className="text-brandText/60 text-xs mt-0.5">Call support for rapid enquiries</p>
                  <a href="tel:+919876543210" className="block text-brandDark hover:text-brandGold font-bold mt-2 text-base">+91 98765 43210</a>
                </div>
              </div>

              {/* Email Card */}
              <div className="bg-white border border-brandDark/10 p-6 rounded-lg shadow-sm flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-brandDark/5 flex items-center justify-center text-brandGold flex-shrink-0">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                    <polyline points="22,6 12,13 2,6"/>
                  </svg>
                </div>
                <div>
                  <h3 className="font-heading text-lg font-bold">Email Address</h3>
                  <p className="text-brandText/60 text-xs mt-0.5">Submit drawings or blueprints for bids</p>
                  <a href="mailto:info@tamizhainvisiblegrills.com" className="block text-brandDark hover:text-brandGold font-bold mt-2 text-base">info@tamizhainvisiblegrills.com</a>
                </div>
              </div>

              {/* Hours Card */}
              <div className="bg-white border border-brandDark/10 p-6 rounded-lg shadow-sm flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-brandDark/5 flex items-center justify-center text-brandGold flex-shrink-0">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <circle cx="12" cy="12" r="10"/>
                    <polyline points="12 6 12 12 16 14"/>
                  </svg>
                </div>
                <div>
                  <h3 className="font-heading text-lg font-bold">Business Hours</h3>
                  <p className="text-brandText/60 text-xs mt-0.5">Monday - Saturday: 9:00 AM - 7:00 PM</p>
                  <p className="text-brandGold font-bold text-xs mt-2 uppercase tracking-wide">Sunday: Closed</p>
                </div>
              </div>

              {/* WhatsApp Card */}
              <a 
                href="https://wa.me/919876543210?text=Hi%20Tamizha%20Invisible%20Grills,%20I'd%20like%20to%20get%20a%20free%20site%20inspection%20quote."
                className="bg-[#25D366] text-white p-6 rounded-lg flex items-center justify-between shadow-md hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="flex items-center gap-4">
                  <svg className="w-9 h-9 fill-current" viewBox="0 0 24 24">
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.717-1.458L0 24zm6.59-4.846c1.6.95 3.488 1.449 5.412 1.451 5.428 0 9.85-4.417 9.853-9.852.002-2.633-1.025-5.107-2.89-6.973-1.866-1.867-4.348-2.895-6.977-2.895-5.435 0-9.86 4.417-9.863 9.854-.001 1.93.504 3.812 1.467 5.433l-.999 3.648 3.73-.978zm11.567-5.639c-.19-.095-1.125-.556-1.299-.619-.174-.063-.301-.095-.427.095-.127.19-.492.619-.603.746-.111.127-.222.143-.412.048-.19-.095-.803-.296-1.53-1.947-.566-.505-.947-1.13-1.058-1.32-.111-.19-.012-.293.083-.388.086-.085.19-.222.285-.333.095-.111.127-.19.19-.317.063-.127.032-.238-.016-.333-.048-.095-.427-1.03-.586-1.411-.155-.378-.325-.327-.427-.333l-.365-.006c-.127 0-.333.048-.508.238-.174.19-.667.651-.667 1.587 0 .936.683 1.841.778 1.968.095.127 1.343 2.051 3.255 2.878.455.197.81.315 1.086.403.458.146.874.125 1.203.076.367-.054 1.125-.46 1.282-.904.159-.445.159-.825.111-.904-.048-.079-.174-.127-.365-.222z"/>
                  </svg>
                  <div>
                    <h3 className="font-heading text-lg font-bold text-white">Start WhatsApp Chat</h3>
                    <p className="text-white/90 text-xs">Send photos of your balcony for instant estimates</p>
                  </div>
                </div>
                <div className="text-2xl font-bold">&rarr;</div>
              </a>

            </div>
          </div>

          {/* Form */}
          <div className="bg-white border border-brandDark/10 p-8 sm:p-10 rounded-2xl shadow-xl flex flex-col justify-center">
            <span className="font-accent text-[11px] font-bold uppercase tracking-widest text-brandGold mb-2 block">Form Enquiries</span>
            <h2 className="font-heading text-2xl sm:text-3xl mb-6 text-brandDark">Site Inspection Details</h2>
            
            <form onSubmit={handleFormSubmit} className="flex flex-col gap-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="c-name" className="font-accent text-[10px] font-bold text-brandDark uppercase tracking-wider">Full Name</label>
                  <input type="text" id="c-name" placeholder="John Doe" required className="p-3 border border-brandDark/10 rounded bg-brandBg/30 text-sm focus:outline-none focus:border-brandGold" />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="c-phone" className="font-accent text-[10px] font-bold text-brandDark uppercase tracking-wider">Phone Number</label>
                  <input type="tel" id="c-phone" placeholder="98765 43210" required className="p-3 border border-brandDark/10 rounded bg-brandBg/30 text-sm focus:outline-none focus:border-brandGold" />
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="c-email" className="font-accent text-[10px] font-bold text-brandDark uppercase tracking-wider">Email Address</label>
                  <input type="email" id="c-email" placeholder="john@example.com" className="p-3 border border-brandDark/10 rounded bg-brandBg/30 text-sm focus:outline-none focus:border-brandGold" />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="c-city" className="font-accent text-[10px] font-bold text-brandDark uppercase tracking-wider">Service City</label>
                  <select id="c-city" defaultValue="" required className="p-3 border border-brandDark/10 rounded bg-brandBg/30 text-sm focus:outline-none focus:border-brandGold">
                    <option value="" disabled>Select Your City</option>
                    <option value="Chennai">Chennai</option>
                    <option value="Coimbatore">Coimbatore</option>
                    <option value="Madurai">Madurai</option>
                    <option value="Salem">Salem</option>
                    <option value="Trichy">Trichy</option>
                    <option value="Erode">Erode</option>
                    <option value="Tirunelveli">Tirunelveli</option>
                    <option value="Vellore">Vellore</option>
                    <option value="Hosur">Hosur</option>
                    <option value="Thanjavur">Thanjavur</option>
                    <option value="Other">Other Tamil Nadu City</option>
                  </select>
                </div>
              </div>
              <div className="flex flex-col gap-1.5">
                <label htmlFor="c-service" className="font-accent text-[10px] font-bold text-brandDark uppercase tracking-wider">Installation Safety Type</label>
                <select id="c-service" defaultValue="" required className="p-3 border border-brandDark/10 rounded bg-brandBg/30 text-sm focus:outline-none focus:border-brandGold">
                  <option value="" disabled>Select Service Required</option>
                  <option value="Balcony Invisible Grills">Balcony Invisible Grills</option>
                  <option value="Window Invisible Grills">Window Invisible Grills</option>
                  <option value="Staircase Safety Grills">Staircase Safety Grills</option>
                  <option value="Terrace Safety Solutions">Terrace Safety Solutions</option>
                  <option value="Residential Project">Residential Gated Complex</option>
                  <option value="Commercial Project">Commercial/Office Complex</option>
                </select>
              </div>
              <div className="flex flex-col gap-1.5">
                <label htmlFor="c-message" className="font-accent text-[10px] font-bold text-brandDark uppercase tracking-wider">Installation Area Dimensions & Details</label>
                <textarea id="c-message" placeholder="Please describe approximate dimensions (e.g. 10ft x 6ft) or specify any security details..." className="p-3 border border-brandDark/10 rounded bg-brandBg/30 text-sm focus:outline-none focus:border-brandGold min-h-[100px] resize-y" />
              </div>
              <button type="submit" className="w-full text-center py-4 font-accent text-xs font-bold uppercase tracking-wider text-brandBg bg-brandDark rounded hover:bg-brandGold hover:text-brandDark transition-all duration-300 mt-2">
                Submit Details
              </button>
            </form>
          </div>

        </div>
      </section>

      {/* HQ Map Locator */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="font-accent text-[11px] font-bold uppercase tracking-widest text-brandGold mb-2 block">Corporate Headquarters</span>
            <h2 className="font-heading text-3xl md:text-5xl">Our Main Office</h2>
          </div>

          <div className="w-full h-[400px] rounded-2xl overflow-hidden shadow-md border border-brandDark/15 bg-brandBg flex items-center justify-center p-6 text-center">
            <div className="max-w-md">
              <svg className="w-16 h-16 text-brandGold mx-auto mb-4" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                <circle cx="12" cy="10" r="3"/>
              </svg>
              <h3 className="font-heading text-2xl font-bold mb-2">Tamizha Invisible Grills Headquarters</h3>
              <p className="text-brandText/60 text-sm mb-6 leading-relaxed">12, Architectural Plaza, Anna Salai, Chennai, Tamil Nadu - 600002</p>
              <a href="https://maps.google.com" className="px-6 py-3 border border-brandDark font-accent text-xs font-bold uppercase tracking-wider rounded hover:bg-brandDark hover:text-brandBg transition-all duration-300" target="_blank" rel="noopener noreferrer">
                Open In Google Maps
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Coverage Lists */}
      <section className="py-20 bg-brandBg border-t border-brandDark/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <span className="font-accent text-[11px] font-bold uppercase tracking-widest text-brandGold mb-2 block">Regional Service Circles</span>
            <h2 className="font-heading text-3xl md:text-4xl">Cities We Serve</h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 text-center">
            {cities.map((city) => (
              <div key={city} className="bg-white border border-brandDark/10 py-4 px-6 rounded font-accent text-xs font-bold text-brandDark uppercase tracking-widest shadow-sm">
                {city}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
