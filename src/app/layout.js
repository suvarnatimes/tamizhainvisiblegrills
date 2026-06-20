import { Inter, Montserrat, Cormorant_Garamond } from 'next/font/google';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
});

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-accent',
  display: 'swap',
});

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-heading',
  display: 'swap',
});

export const metadata = {
  title: 'Tamizha Invisible Grills | Premium Invisible Grill Installation Chennai',
  description: 'Secure your home with premium, rust-resistant, high-tensile invisible grills. Expert balcony & window safety installations in Chennai. Get a free quote today!',
  keywords: 'Invisible Grills Chennai, Invisible Grill Installation Chennai, Best Invisible Grills Chennai, Balcony Invisible Grills Chennai, Invisible Grill Price Chennai, Safety Grills Chennai, Invisible Balcony Grills',
  openGraph: {
    type: 'website',
    url: 'https://www.tamizhainvisiblegrills.com/',
    title: 'Tamizha Invisible Grills | Premium Balcony & Window Safety Solutions',
    description: 'Elegance meets safety. High-tensile, rust-proof invisible grills for modern balconies, windows, and staircases in Chennai.',
    images: [
      {
        url: '/images/hero-bg.png',
        width: 1200,
        height: 630,
        alt: 'Tamizha Invisible Grills Balcony Safety System',
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Tamizha Invisible Grills | Premium Safety Solutions',
    description: 'Elegance meets safety. High-tensile, rust-proof invisible grills for modern balconies, windows, and staircases in Chennai.',
    images: ['/images/hero-bg.png'],
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${montserrat.variable} ${cormorant.variable}`}>
      <body className="bg-brandBg text-brandText font-body">
        <Header />
        <main>
          {children}
        </main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
