/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brandBg: '#E8E4DC',      // Elegant warm stone background
        brandDark: '#2F3E46',    // Deep slate charcoal for navigation and headers
        brandGold: '#D4AF37',    // Muted luxury gold for accents and CTAs
        brandText: '#1A1A1A',    // Near black body text
      },
      fontFamily: {
        heading: ['var(--font-heading)', 'Cormorant Garamond', 'Georgia', 'serif'],
        body: ['var(--font-body)', 'Inter', 'sans-serif'],
        accent: ['var(--font-accent)', 'Montserrat', 'sans-serif'],
      },
      backgroundImage: {
        'cable-lines': 'linear-gradient(to right, rgba(47, 62, 70, 0.05) 1px, transparent 1px)',
      }
    },
  },
  plugins: [],
};
