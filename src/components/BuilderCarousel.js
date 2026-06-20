"use client";

import { useState, useEffect, useRef } from 'react';

const BUILDERS = [
  {
    name: 'Casagrand',
    logo: (
      <div className="flex flex-col items-center justify-center">
        <svg className="w-12 h-12 sm:w-16 sm:h-16 mb-2" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M15 75 L50 25 L85 75 Z" fill="#D32F2F" />
          <path d="M38 75 L38 52 L62 52 L62 75 Z" fill="#FFFFFF" />
        </svg>
        <span className="font-sans font-bold text-xs sm:text-sm tracking-widest text-gray-800 uppercase">CASAGRAND</span>
      </div>
    )
  },
  {
    name: 'Akshaya',
    logo: (
      <div className="flex flex-col items-center justify-center">
        <svg className="w-12 h-12 sm:w-16 sm:h-16 mb-2" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <polygon points="50,15 62,38 88,38 67,54 75,78 50,62 25,78 33,54 12,38 38,38" fill="#10B981" />
        </svg>
        <span className="font-sans font-extrabold text-xs sm:text-sm tracking-wider text-emerald-700 uppercase">AKSHAYA</span>
      </div>
    )
  },
  {
    name: 'Appaswamy',
    logo: (
      <div className="flex flex-col items-center justify-center">
        <svg className="w-12 h-12 sm:w-16 sm:h-16 mb-2" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="50" cy="50" r="32" stroke="#D4AF37" strokeWidth="2.5" />
          <text x="50%" y="60%" textAnchor="middle" fill="#2F3E46" fontSize="28" fontWeight="bold" fontFamily="serif">A</text>
        </svg>
        <span className="font-sans text-[10px] sm:text-xs font-bold tracking-widest text-gray-800 uppercase">APPASWAMY</span>
      </div>
    )
  },
  {
    name: 'Alliance',
    logo: (
      <div className="flex flex-col items-center justify-center">
        <svg className="w-12 h-12 sm:w-16 sm:h-16 mb-2" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="50" cy="50" r="28" stroke="#0284C7" strokeWidth="1.5" strokeDasharray="4 4" />
          <circle cx="50" cy="50" r="18" fill="#0284C7" />
          <path d="M50 15 L50 85 M15 50 L85 50" stroke="#0284C7" strokeWidth="1.5" />
        </svg>
        <span className="font-sans font-black text-xs sm:text-sm tracking-tighter text-blue-900 uppercase">ALLIANCE</span>
      </div>
    )
  },
  {
    name: 'Mahindra',
    logo: (
      <div className="flex flex-col items-center justify-center">
        <svg className="w-12 h-12 sm:w-16 sm:h-16 mb-2" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M20 70 Q 50 25 80 70" stroke="#E11D48" strokeWidth="8" strokeLinecap="round" />
          <path d="M38 70 Q 50 40 62 70" stroke="#10B981" strokeWidth="4" strokeLinecap="round" />
        </svg>
        <span className="font-sans font-extrabold text-[9px] sm:text-[10px] tracking-tight text-gray-800 uppercase">Mahindra <span className="text-gray-500 font-normal">LIFESPACES</span></span>
      </div>
    )
  },
  {
    name: 'TVS Emerald',
    logo: (
      <div className="flex flex-col items-center justify-center">
        <svg className="w-12 h-12 sm:w-16 sm:h-16 mb-2" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="25" y="25" width="50" height="50" rx="6" fill="#DC2626" />
          <text x="50%" y="58%" textAnchor="middle" fill="#FFFFFF" fontSize="22" fontWeight="black" fontFamily="sans-serif">TVS</text>
        </svg>
        <span className="font-sans font-bold text-[10px] sm:text-xs tracking-widest text-green-800 uppercase">EMERALD</span>
      </div>
    )
  },
  {
    name: 'SPR India',
    logo: (
      <div className="flex flex-col items-center justify-center">
        <svg className="w-12 h-12 sm:w-16 sm:h-16 mb-2" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="28" y="28" width="44" height="44" stroke="#D4AF37" strokeWidth="2" transform="rotate(45 50 50)" />
          <text x="50%" y="58%" textAnchor="middle" fill="#D4AF37" fontSize="18" fontWeight="bold" fontFamily="serif">SPR</text>
        </svg>
        <span className="font-serif font-bold text-xs sm:text-sm tracking-wider text-gray-800 uppercase">SPR INDIA</span>
      </div>
    )
  },
  {
    name: 'Lancor',
    logo: (
      <div className="flex flex-col items-center justify-center">
        <svg className="w-12 h-12 sm:w-16 sm:h-16 mb-2" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="22" y="45" width="22" height="35" fill="#0369A1" />
          <rect x="48" y="25" width="30" height="55" fill="#0F766E" />
        </svg>
        <span className="font-sans font-bold text-xs sm:text-sm tracking-wider text-sky-900 uppercase">LANCOR</span>
      </div>
    )
  }
];

export default function BuilderCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [radius, setRadius] = useState(438);
  const [scale, setScale] = useState(1);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const autoRotateTimerRef = useRef(null);

  const itemCount = BUILDERS.length;
  const angleStep = 360 / itemCount;

  // Responsive logic to update radius and global scale
  useEffect(() => {
    function handleResize() {
      const vw = window.innerWidth;
      let width = 280;
      let extraPadding = 100;

      if (vw < 480) {
        width = 140;
        extraPadding = 40;
        // Dynamic scale factor for smaller mobile viewports
        setScale(Math.min(0.65, vw / 560));
      } else if (vw < 768) {
        width = 220;
        extraPadding = 70;
        setScale(0.8);
      } else if (vw < 1024) {
        setScale(0.9);
      } else {
        setScale(1);
      }

      const r = Math.round((width / 2) / Math.tan(Math.PI / itemCount)) + extraPadding;
      setRadius(r);
    }
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const rotateToNext = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prev) => prev + 1);
    
    setTimeout(() => {
      setIsTransitioning(false);
    }, 1000); // must match transition duration (1s)
  };

  useEffect(() => {
    autoRotateTimerRef.current = setInterval(rotateToNext, 3000);
    return () => {
      if (autoRotateTimerRef.current) clearInterval(autoRotateTimerRef.current);
    };
  }, [isTransitioning]);

  return (
    <div 
      className="builder-carousel-container select-none origin-center"
      style={{ transform: `scale(${scale})` }}
    >
      <div 
        className="builder-carousel"
        style={{
          transform: `translateZ(${-radius}px) rotateY(${-currentIndex * angleStep}deg)`,
          transition: 'transform 1s cubic-bezier(0.25, 1, 0.5, 1)'
        }}
      >
        {BUILDERS.map((builder, idx) => {
          const itemAngle = idx * angleStep;
          const currentRotation = -currentIndex * angleStep;
          const counterRotation = -currentRotation;
          
          // Face flat forward (Y-rot cancels parent rotation)
          const transformStyle = `rotateY(${itemAngle}deg) translateZ(${radius}px) rotateY(${-itemAngle + counterRotation}deg)`;

          // Opacity distance calculation
          let diff = Math.abs((idx - currentIndex) % itemCount);
          if (diff > itemCount / 2) {
            diff = itemCount - diff;
          }

          let opacity = "0.3";
          if (diff === 0) opacity = "1.0";
          else if (diff === 1) opacity = "0.6";
          else if (diff === 2) opacity = "0.4";

          return (
            <div
              key={builder.name}
              className="builder-carousel-item"
              style={{
                transform: transformStyle,
                opacity: opacity,
                transition: 'transform 1s cubic-bezier(0.25, 1, 0.5, 1), opacity 1s ease',
              }}
            >
              {builder.logo}
            </div>
          );
        })}
      </div>
    </div>
  );
}
