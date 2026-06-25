import JsonLd from './JsonLd';

export default function StructuredData() {
  const localBusinessData = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Tamizha Invisible Grills',
    description:
      "Chennai's leading provider of premium invisible grills for balconies, windows, staircases, and terraces. ISO 9001:2015 certified marine-grade SS 316 materials.",
    url: 'https://www.tamizhainvisiblegrills.com',
    telephone: '+91 99442 00664',
    email: 'info@tamizhainvisiblegrills.com',
    image: 'https://www.tamizhainvisiblegrills.com/images/hero-bg.png',
    priceRange: '₹₹',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '12, Architectural Plaza, Anna Salai',
      addressLocality: 'Chennai',
      addressRegion: 'Tamil Nadu',
      postalCode: '600002',
      addressCountry: 'IN',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 13.0569,
      longitude: 80.2425,
    },
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: [
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
        'Sunday',
      ],
      opens: '06:00',
      closes: '23:00',
    },
    areaServed: [
      { '@type': 'Place', name: 'Chennai' },
      { '@type': 'Place', name: 'OMR' },
      { '@type': 'Place', name: 'ECR' },
      { '@type': 'Place', name: 'Anna Nagar' },
      { '@type': 'Place', name: 'Adyar' },
      { '@type': 'Place', name: 'Velachery' },
      { '@type': 'Place', name: 'Tambaram' },
      { '@type': 'Place', name: 'Guindy' },
      { '@type': 'Place', name: 'T. Nagar' },
      { '@type': 'Place', name: 'Nungambakkam' },
      { '@type': 'Place', name: 'Medavakkam' },
      { '@type': 'Place', name: 'Porur' },
    ],
  };

  const organizationData = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Tamizha Invisible Grills',
    url: 'https://www.tamizhainvisiblegrills.com',
    logo: 'https://www.tamizhainvisiblegrills.com/images/hero-bg.png',
    telephone: '+91 99442 00664',
    email: 'info@tamizhainvisiblegrills.com',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '12, Architectural Plaza, Anna Salai',
      addressLocality: 'Chennai',
      addressRegion: 'Tamil Nadu',
      postalCode: '600002',
      addressCountry: 'IN',
    },
    sameAs: [],
  };

  return (
    <>
      <JsonLd data={localBusinessData} />
      <JsonLd data={organizationData} />
    </>
  );
}
