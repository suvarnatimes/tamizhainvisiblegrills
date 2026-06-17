"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const checkScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', checkScroll);
    checkScroll(); // Initial run
    return () => window.removeEventListener('scroll', checkScroll);
  }, []);

  // Close mobile drawer on route change
  useEffect(() => {
    setIsOpen(false);
    document.body.classList.remove('no-scroll');
  }, [pathname]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    if (!isOpen) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }
  };

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Showcase', path: '/gallery' },
    { name: 'Resources', path: '/blog' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header className={`fixed top-0 left-0 w-full z-[1000] transition-all duration-500 border-b ${
      scrolled 
        ? 'bg-white/70 backdrop-blur-md border-white/40 shadow-sm py-4' 
        : 'bg-transparent border-white/5 py-6'
    }`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className={`flex items-center gap-2 transition-colors duration-300 ${scrolled ? 'text-brandDark' : 'text-white'}`} aria-label="Tamizha Invisible Grills Home">
          <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="5" y="5" width="30" height="30" rx="3" stroke="currentColor" strokeWidth="2"/>
            <line x1="12" y1="5" x2="12" y2="35" stroke="#D4AF37" strokeWidth="1.5"/>
            <line x1="20" y1="5" x2="20" y2="35" stroke="#D4AF37" strokeWidth="1.5"/>
            <line x1="28" y1="5" x2="28" y2="35" stroke="#D4AF37" strokeWidth="1.5"/>
          </svg>
          <div className="font-heading text-lg font-bold leading-none">
            TAMIZHA
            <span className="block font-accent text-[10px] uppercase tracking-[0.25em] text-brandGold mt-1">Invisible Grills</span>
          </div>
        </Link>

        {/* Mobile menu toggle */}
        <button 
          onClick={toggleMenu}
          className="flex flex-col gap-1.5 md:hidden z-[1001] relative p-1"
          aria-label="Toggle navigation menu"
          aria-expanded={isOpen}
        >
          <span className={`block w-6 h-0.5 transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-2 !bg-brandBg' : (scrolled ? 'bg-brandDark' : 'bg-white')}`}></span>
          <span className={`block w-6 h-0.5 transition-all duration-300 ${isOpen ? 'opacity-0' : (scrolled ? 'bg-brandDark' : 'bg-white')}`}></span>
          <span className={`block w-6 h-0.5 transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-2 !bg-brandBg' : (scrolled ? 'bg-brandDark' : 'bg-white')}`}></span>
        </button>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => {
            const isActive = pathname === link.path;
            return (
              <Link 
                key={link.path} 
                href={link.path}
                className={`font-accent text-[11px] font-semibold uppercase tracking-wider transition-all duration-300 relative py-1 hover:text-brandGold ${
                  isActive 
                    ? (scrolled ? 'text-brandDark font-bold' : 'text-white font-bold') 
                    : (scrolled ? 'text-brandDark/80' : 'text-white/80')
                } after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[1.5px] after:bg-brandGold after:transition-transform after:duration-300 after:origin-left ${
                  isActive ? 'after:scale-x-100' : 'after:scale-x-0'
                } hover:after:scale-x-100`}
              >
                {link.name}
              </Link>
            );
          })}
          
          <Link 
            href="/contact#inspection-form" 
            className={`group relative inline-flex items-center justify-center px-6 py-2.5 font-accent text-[11px] font-semibold uppercase tracking-wider rounded overflow-hidden transition-all duration-500 border ${
              scrolled 
                ? 'text-brandBg bg-brandDark border-transparent hover:text-brandDark' 
                : 'text-white bg-transparent border-white/20 hover:text-brandDark hover:border-brandGold'
            }`}
          >
            <span className="absolute inset-0 w-full h-full bg-brandGold translate-y-full transition-transform duration-500 ease-out group-hover:translate-y-0 z-0"></span>
            <span className="relative z-10">Get Free Quote</span>
          </Link>
        </nav>
      </div>

      {/* Mobile navigation side drawer */}
      <div className={`fixed inset-y-0 right-0 w-[80%] max-w-[350px] h-screen bg-brandDark text-brandBg z-[999] p-8 flex flex-col justify-center gap-8 shadow-2xl transition-all duration-500 ease-in-out md:hidden ${
        isOpen ? 'right-0' : 'translate-x-full'
      }`}>
        <div className="flex flex-col gap-6">
          {navLinks.map((link) => {
            const isActive = pathname === link.path;
            return (
              <Link 
                key={link.path} 
                href={link.path}
                className={`font-accent text-lg font-semibold uppercase tracking-widest hover:text-brandGold ${
                  isActive ? 'text-brandGold font-bold' : 'text-brandBg'
                }`}
              >
                {link.name}
              </Link>
            );
          })}
          
          <Link 
            href="/contact#inspection-form" 
            className="w-full text-center py-3 font-accent text-xs font-semibold uppercase tracking-widest text-brandDark bg-brandGold rounded hover:bg-transparent hover:text-brandGold hover:border hover:border-brandGold transition-all duration-300 mt-4"
          >
            Get Free Quote
          </Link>
        </div>
      </div>
    </header>
  );
}
