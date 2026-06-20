"use client";

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';

export default function PortfolioCarousel({ items }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [rotationAngle, setRotationAngle] = useState(0);
  const [radius, setRadius] = useState(340);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const autoRotateTimerRef = useRef(null);
  const isPausedRef = useRef(false);

  const numImages = items.length;
  const angleStep = 360 / numImages;
  const PAUSE_DURATION = 1000;
  const OPACITY_FRONT = 1.0;
  const OPACITY_BACK = 0.25;

  // Resize listener to update radius
  useEffect(() => {
    function handleResize() {
      const vw = window.innerWidth;
      if (vw < 480) {
        setRadius(200);
      } else if (vw < 768) {
        setRadius(260);
      } else {
        setRadius(340);
      }
    }
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Start the auto-rotation loop
  const startPause = () => {
    if (autoRotateTimerRef.current) {
      clearTimeout(autoRotateTimerRef.current);
    }
    if (isPausedRef.current) return;
    autoRotateTimerRef.current = setTimeout(() => {
      goToNext();
    }, PAUSE_DURATION);
  };

  const rotateToIndex = (targetIndex) => {
    if (isTransitioning) return;

    let normTargetIndex = targetIndex;
    if (normTargetIndex < 0) normTargetIndex = numImages - 1;
    if (normTargetIndex >= numImages) normTargetIndex = 0;

    const targetAngle = -(normTargetIndex * angleStep);

    // Calculate shortest path delta
    let delta = targetAngle - rotationAngle;
    while (delta > 180) delta -= 360;
    while (delta < -180) delta += 360;

    const newAngle = rotationAngle + delta;

    setIsTransitioning(true);
    setRotationAngle(newAngle);
    setCurrentIndex(normTargetIndex);

    // After CSS transition ends (1100ms), mark transitioning as false
    setTimeout(() => {
      setIsTransitioning(false);
    }, 1100);
  };

  const goToNext = () => {
    const nextIndex = (currentIndex + 1) % numImages;
    rotateToIndex(nextIndex);
  };

  const goToPrev = () => {
    const prevIndex = (currentIndex - 1 + numImages) % numImages;
    rotateToIndex(prevIndex);
  };

  // Start loop and manage pauses
  useEffect(() => {
    if (isTransitioning) return;
    startPause();
    return () => {
      if (autoRotateTimerRef.current) clearTimeout(autoRotateTimerRef.current);
    };
  }, [currentIndex, rotationAngle, isTransitioning]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (
        document.activeElement &&
        (document.activeElement.tagName === 'INPUT' ||
          document.activeElement.tagName === 'TEXTAREA' ||
          document.activeElement.isContentEditable)
      ) {
        return;
      }

      if (e.key === 'ArrowRight') {
        e.preventDefault();
        isPausedRef.current = false;
        goToNext();
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault();
        isPausedRef.current = false;
        goToPrev();
      } else if (e.key === ' ') {
        e.preventDefault();
        isPausedRef.current = !isPausedRef.current;
        if (!isPausedRef.current) {
          startPause();
        } else if (autoRotateTimerRef.current) {
          clearTimeout(autoRotateTimerRef.current);
        }
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [currentIndex, rotationAngle, isTransitioning]);

  const handleMouseEnter = () => {
    isPausedRef.current = true;
    if (autoRotateTimerRef.current) {
      clearTimeout(autoRotateTimerRef.current);
    }
  };

  const handleMouseLeave = () => {
    isPausedRef.current = false;
    startPause();
  };

  // Touch swiping
  const touchStartXRef = useRef(0);
  const touchStartYRef = useRef(0);
  const isSwipingRef = useRef(false);

  const handleTouchStart = (e) => {
    const touch = e.touches[0];
    touchStartXRef.current = touch.clientX;
    touchStartYRef.current = touch.clientY;
    isSwipingRef.current = true;
    isPausedRef.current = true;
    if (autoRotateTimerRef.current) {
      clearTimeout(autoRotateTimerRef.current);
    }
  };

  const handleTouchEnd = (e) => {
    if (!isSwipingRef.current) return;
    isSwipingRef.current = false;
    const touch = e.changedTouches[0];
    const deltaX = touch.clientX - touchStartXRef.current;
    const deltaY = touch.clientY - touchStartYRef.current;

    if (Math.abs(deltaX) > 40 && Math.abs(deltaX) > Math.abs(deltaY)) {
      isPausedRef.current = false;
      if (deltaX > 0) {
        goToPrev();
      } else {
        goToNext();
      }
    } else {
      isPausedRef.current = false;
      startPause();
    }
  };

  const handleCardClick = (e, index) => {
    if (index !== currentIndex) {
      e.preventDefault();
      e.stopPropagation();
      isPausedRef.current = false;
      rotateToIndex(index);
    }
  };

  return (
    <div 
      className="carousel-wrapper select-none"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <div className="glow-ring"></div>

      <div className="carousel-scene">
        <div 
          className="carousel" 
          style={{ 
            transform: `rotateY(${rotationAngle}deg)`,
            transition: 'transform 1.1s cubic-bezier(0.25, 0.46, 0.45, 0.94)'
          }}
        >
          {items.map((item, idx) => {
            const isActive = idx === currentIndex;
            const filter = idx % 3 === 0 ? 'balcony' : idx % 3 === 1 ? 'window' : 'staircase';
            const label = idx % 3 === 0 ? 'Balcony Safety' : idx % 3 === 1 ? 'Window Safety' : 'Staircase Safety';
            
            // Calculate item coordinates, scale, and opacity
            const baseAngle = idx * angleStep;
            const rad = (baseAngle * Math.PI) / 180;
            const posX = radius * Math.sin(rad);
            const posZ = radius * Math.cos(rad);

            // Compute relative rotation angle for depth opacity
            const effectiveAngle = baseAngle + rotationAngle;
            const effRad = (effectiveAngle * Math.PI) / 180;
            const z = radius * Math.cos(effRad);
            const t = (z + radius) / (2 * radius);
            const smoothT = t * t * (3 - 2 * t);
            const opacity = OPACITY_BACK + (OPACITY_FRONT - OPACITY_BACK) * smoothT;
            const scale = 0.92 + 0.08 * smoothT;

            return (
              <Link
                key={item.name}
                href={`/gallery?filter=${filter}`}
                onClick={(e) => handleCardClick(e, idx)}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                className={`carousel-item shadow-md ${
                  isActive ? 'ring-2 ring-brandGold' : ''
                }`}
                style={{
                  transform: `translate3d(${posX}px, 0, ${posZ}px) rotateY(${baseAngle}deg) scale(${scale})`,
                  opacity: opacity,
                  zIndex: Math.round(z + radius + 10),
                  transition: 'transform 1.1s cubic-bezier(0.25, 0.46, 0.45, 0.94), opacity 1.1s cubic-bezier(0.25, 0.46, 0.45, 0.94)'
                }}
                tabIndex={isActive ? 0 : -1}
              >
                {/* Image */}
                <img
                  src={`/images/portfolio-${item.name.toLowerCase()}.png`}
                  alt={`${item.name} Invisible safety grill installation`}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out"
                  draggable="false"
                />

                {/* Bottom Overlay Label */}
                <div className="item-label">
                  <span className="font-accent text-[10px] text-brandGold uppercase tracking-wider font-semibold">
                    {label}
                  </span>
                  <h3 className="font-heading text-[15px] text-white leading-tight font-medium">
                    {item.name} Premium Install
                  </h3>
                </div>
              </Link>
            );
          })}
        </div>
      </div>

      <div className="carousel-status select-none">
        <span>{currentIndex + 1}</span> / {numImages}
      </div>
    </div>
  );
}
