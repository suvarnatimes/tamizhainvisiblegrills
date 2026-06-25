import { Inter, Montserrat, Cormorant_Garamond } from 'next/font/google';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import StructuredData from '@/components/StructuredData';
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
  metadataBase: new URL('https://www.tamizhainvisiblegrills.com'),
  title: {
    default: 'Invisible Grills Chennai | Premium Balcony & Child Safety Grill Installation | Tamizha',
    template: '%s | Tamizha Invisible Grills',
  },
  description: 'Chennai\'s #1 invisible grill installers. Premium marine-grade SS 316 balcony invisible grills, child safety grills, window grills & staircase safety solutions. 2500+ projects completed. ISO certified. Free site inspection. Call +91 99442 00664.',
  keywords: [
    'invisible grills Chennai',
    'balcony invisible grills Chennai',
    'invisible grill installation Chennai',
    'child safety grills Chennai',
    'premium invisible grills Chennai',
    'invisible grill price Chennai',
    'balcony safety grills Chennai',
    'window invisible grills Chennai',
    'staircase safety grills Chennai',
    'best invisible grills Chennai',
    'invisible grill company Chennai',
    'apartment safety grills Chennai',
  ],
  authors: [{ name: 'Tamizha Invisible Grills', url: 'https://www.tamizhainvisiblegrills.com' }],
  creator: 'Tamizha Invisible Grills',
  publisher: 'Tamizha Invisible Grills',
  robots: {
    index: true,
    follow: true,
    'max-image-preview': 'large',
    'max-snippet': -1,
    'max-video-preview': -1,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  verification: {
    google: 'e564e5bc7cf4698f',
  },
  alternates: {
    canonical: 'https://www.tamizhainvisiblegrills.com',
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://www.tamizhainvisiblegrills.com',
    siteName: 'Tamizha Invisible Grills',
    title: 'Invisible Grills Chennai | Premium Balcony & Child Safety Grill Installation',
    description: 'Elegance meets safety. Premium marine-grade SS 316 invisible grills for modern balconies, windows, and staircases in Chennai. 2500+ projects. Free inspection.',
    images: [
      {
        url: '/images/hero-bg.png',
        width: 1200,
        height: 630,
        alt: 'Tamizha Invisible Grills - Premium Balcony Safety Installation Chennai',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Invisible Grills Chennai | Premium Safety Solutions | Tamizha',
    description: 'Premium marine-grade SS 316 invisible grills for modern balconies, windows, and staircases in Chennai. 2500+ projects. Free inspection.',
    images: ['/images/hero-bg.png'],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${montserrat.variable} ${cormorant.variable}`}>
      <body className="bg-brandBg text-brandText font-body">
        <StructuredData />
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
