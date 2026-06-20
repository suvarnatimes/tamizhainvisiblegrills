"use client";

import { useEffect, useRef, useState } from 'react';

export default function InteractiveGrills() {
  const containerRef = useRef(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const wiresRef = useRef([]);
  const activeRef = useRef(false);
  const prevMouseX = useRef(null);
  const prevMouseY = useRef(null);

  const spacing = 55; // Pixels between vertical grills
  const stiffness = 0.035; // Lower stiffness = wider, more dramatic swing
  const damping = 0.955; // Higher damping = longer, smoother vibration decay

  // Handle resizing and initial dimensions measurement
  useEffect(() => {
    if (!containerRef.current) return;

    const measure = () => {
      const rect = containerRef.current.getBoundingClientRect();
      setDimensions({ width: rect.width, height: rect.height });
    };

    measure();
    window.addEventListener('resize', measure);

    return () => {
      window.removeEventListener('resize', measure);
    };
  }, []);

  // Calculate wires configuration based on measured width
  const numWires = dimensions.width > 0 ? Math.floor(dimensions.width / spacing) + 1 : 0;
  const wireData = useRef([]);

  useEffect(() => {
    if (numWires === 0) return;

    // Reset wire physics states
    wireData.current = Array.from({ length: numWires }, (_, i) => ({
      x: i * spacing + (dimensions.width % spacing) / 2, // Centered distribution
      offset: 0,
      vx: 0,
    }));
  }, [numWires, dimensions.width]);

  // Animation Loop using requestAnimationFrame
  const tick = () => {
    let needsUpdate = false;
    const height = dimensions.height;

    wireData.current.forEach((wire, idx) => {
      const pathEl = wiresRef.current[idx];
      if (!pathEl) return;

      // Spring physics
      const ax = -wire.offset * stiffness;
      wire.vx = (wire.vx + ax) * damping;
      wire.offset += wire.vx;

      // Check if still moving above threshold
      if (Math.abs(wire.offset) > 0.05 || Math.abs(wire.vx) > 0.05) {
        needsUpdate = true;
        // Control point at middle of screen (height / 2) to bend line smoothly
        pathEl.setAttribute(
          'd',
          `M ${wire.x} 0 Q ${wire.x + wire.offset} ${height / 2} ${wire.x} ${height}`
        );
      } else if (wire.offset !== 0) {
        // Snap back to static straight line
        wire.offset = 0;
        wire.vx = 0;
        pathEl.setAttribute('d', `M ${wire.x} 0 L ${wire.x} ${height}`);
      }
    });

    if (needsUpdate) {
      requestAnimationFrame(tick);
    } else {
      activeRef.current = false;
    }
  };

  // Attach mousemove listener to closest section ancestor (the entire Hero section container)
  // to ensure plucking is captured across the whole screen, even over text overlays
  useEffect(() => {
    const section = containerRef.current?.closest('section');
    if (!section || wireData.current.length === 0) return;

    const handleSectionMouseMove = (e) => {
      const rect = section.getBoundingClientRect();
      const mouseX = e.clientX - rect.left;
      const mouseY = e.clientY - rect.top;

      if (prevMouseX.current !== null) {
        const pX = prevMouseX.current;

        wireData.current.forEach((wire, idx) => {
          const x = wire.x;
          // Check if mouse crossed the line horizontally
          const crossed = (pX - x) * (mouseX - x) <= 0;

          if (crossed) {
            // Calculate vertical distance to enhance hover feel
            // Plucking feels stronger near the middle height of the wires
            const verticalFactor = 1 - Math.abs(mouseY - dimensions.height / 2) / (dimensions.height / 2);
            const speed = Math.abs(mouseX - pX);
            
            // Highly dramatic pluck velocity based on crossing direction and speed
            const direction = mouseX > pX ? 1 : -1;
            const pluckForce = Math.min(65, speed * 0.9 + 15) * direction * Math.max(0.4, verticalFactor);

            wire.vx += pluckForce * 0.18;
            wire.offset += pluckForce * 0.12;

            // Activate physics loop if not already running
            if (!activeRef.current) {
              activeRef.current = true;
              requestAnimationFrame(tick);
            }
          }
        });
      }

      prevMouseX.current = mouseX;
      prevMouseY.current = mouseY;
    };

    const handleSectionMouseLeave = () => {
      prevMouseX.current = null;
      prevMouseY.current = null;
    };

    section.addEventListener('mousemove', handleSectionMouseMove);
    section.addEventListener('mouseleave', handleSectionMouseLeave);

    return () => {
      section.removeEventListener('mousemove', handleSectionMouseMove);
      section.removeEventListener('mouseleave', handleSectionMouseLeave);
    };
  }, [numWires, dimensions.height]);

  if (dimensions.width === 0) {
    return (
      <div 
        ref={containerRef} 
        className="absolute inset-0 z-10 w-full h-full pointer-events-none"
      />
    );
  }

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 z-10 w-full h-full pointer-events-none overflow-hidden"
    >
      <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <defs>
          {/* High-definition metallic wire gradient with premium visibility */}
          <linearGradient id="wire-grad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#D4AF37" stopOpacity="0.4" />
            <stop offset="25%" stopColor="#FFFFFF" stopOpacity="0.85" />
            <stop offset="50%" stopColor="#D4AF37" stopOpacity="0.95" />
            <stop offset="75%" stopColor="#FFFFFF" stopOpacity="0.85" />
            <stop offset="100%" stopColor="#D4AF37" stopOpacity="0.4" />
          </linearGradient>

          {/* Wire draw-in animation */}
          <style>{`
            @keyframes wireDraw {
              to {
                stroke-dashoffset: 0;
              }
            }
            .wire-path {
              animation: wireDraw 1.5s cubic-bezier(0.16, 1, 0.3, 1) forwards;
            }
          `}</style>
        </defs>

        {/* Draw Wire Paths */}
        {wireData.current.map((wire, idx) => {
          return (
            <g key={idx}>
              <path
                ref={(el) => (wiresRef.current[idx] = el)}
                d={`M ${wire.x} 0 L ${wire.x} ${dimensions.height}`}
                fill="none"
                stroke="url(#wire-grad)"
                strokeWidth="2.2" /* Bolder, premium wire thickness */
                className="wire-path"
                style={{
                  strokeDasharray: dimensions.height,
                  strokeDashoffset: dimensions.height,
                  animationDelay: `${idx * 0.03}s`,
                }}
              />
            </g>
          );
        })}
      </svg>
    </div>
  );
}
