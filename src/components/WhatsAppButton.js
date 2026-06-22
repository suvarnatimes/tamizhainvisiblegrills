"use client";

import Link from 'next/link';

export default function WhatsAppButton() {
  return (
    <div className="fixed bottom-[30px] right-[30px] flex flex-col gap-4.5 z-[999] items-center">
      {/* Phone Call Button */}
      <a 
        href="tel:+919944200664" 
        className="group relative flex items-center justify-center w-[54px] h-[54px] bg-brandGold text-brandDark rounded-full shadow-lg transition-all duration-300 hover:scale-110 hover:-translate-y-1 hover:shadow-2xl border border-brandGold/20"
        aria-label="Call our support helpline"
      >
        {/* Pulsing ring animation */}
        <span className="absolute inset-0 rounded-full bg-brandGold/40 animate-ping opacity-75 pointer-events-none"></span>
        <svg className="w-5.5 h-5.5 z-10 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56a.977.977 0 00-1.01.24l-2.2 2.2a15.045 15.045 0 01-6.59-6.59l2.2-2.21a.96.96 0 00.25-1A11.36 11.36 0 018.5 4c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1 0 9.39 7.61 17 17 17 .55 0 1-.45 1-1v-3.5c-.01-.55-.46-1-1.01-1z"/>
        </svg>
        {/* Tooltip */}
        <span className="absolute right-16 top-1/2 -translate-y-1/2 px-3 py-1.5 bg-brandDark text-brandBg text-[10px] font-accent font-bold uppercase tracking-widest rounded shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap border border-brandGold/30">
          Call Helpline
        </span>
      </a>

      {/* WhatsApp Chat Button */}
      <a 
        href="https://wa.me/919944200664?text=Hi%20Tamizha%20Invisible%20Grills,%20I'd%20like%20to%20get%20a%20free%20site%20inspection%20quote." 
        className="group relative flex items-center justify-center w-[54px] h-[54px] bg-[#25D366] text-white rounded-full shadow-lg transition-all duration-300 hover:scale-110 hover:-translate-y-1 hover:shadow-2xl"
        target="_blank" 
        rel="noopener noreferrer" 
        aria-label="Chat with us on WhatsApp"
      >
        {/* Pulsing ring animation */}
        <span className="absolute inset-0 rounded-full bg-[#25D366]/40 animate-ping opacity-75 pointer-events-none [animation-delay:1s]"></span>
        <svg className="w-6.5 h-6.5 z-10 fill-current" viewBox="0 0 24 24">
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.717-1.458L0 24zm6.59-4.846c1.6.95 3.488 1.449 5.412 1.451 5.428 0 9.85-4.417 9.853-9.852.002-2.633-1.025-5.107-2.89-6.973-1.866-1.867-4.348-2.895-6.977-2.895-5.435 0-9.86 4.417-9.863 9.854-.001 1.93.504 3.812 1.467 5.433l-.999 3.648 3.73-.978zm11.567-5.639c-.19-.095-1.125-.556-1.299-.619-.174-.063-.301-.095-.427.095-.127.19-.492.619-.603.746-.111.127-.222.143-.412.048-.19-.095-.803-.296-1.53-1.947-.566-.505-.947-1.13-1.058-1.32-.111-.19-.012-.293.083-.388.086-.085.19-.222.285-.333.095-.111.127-.19.19-.317.063-.127.032-.238-.016-.333-.048-.095-.427-1.03-.586-1.411-.155-.378-.325-.327-.427-.333l-.365-.006c-.127 0-.333.048-.508.238-.174.19-.667.651-.667 1.587 0 .936.683 1.841.778 1.968.095.127 1.343 2.051 3.255 2.878.455.197.81.315 1.086.403.458.146.874.125 1.203.076.367-.054 1.125-.46 1.282-.904.159-.445.159-.825.111-.904-.048-.079-.174-.127-.365-.222z"/>
        </svg>
        {/* Tooltip */}
        <span className="absolute right-16 top-1/2 -translate-y-1/2 px-3 py-1.5 bg-[#25D366] text-white text-[10px] font-accent font-bold uppercase tracking-widest rounded shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap">
          WhatsApp Chat
        </span>
      </a>
    </div>
  );
}
