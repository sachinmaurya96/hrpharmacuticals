import React from 'react';
import { Helmet } from 'react-helmet';

const Schema = () => {
  const schema1 = {
    "@context": "https://schema.org",
    "@type": "MedicalOrganization",
    "name": "Hr Pharmaceuticals",
    "alternateName": "Pharmaceutical Company",
    "url": "https://www.hrpcpl.com/",
    "logo": "https://www.hrpcpl.com/img/hrlogo.png",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "8929055203",
      "contactType": "technical support",
      "areaServed": "IN",
      "availableLanguage": ["en", "Hindi"]
    },
    "sameAs": [
      "https://www.facebook.com/HR.Pharmaceuticals.pvt",
      "https://www.linkedin.com/company/hr-pharmaceuticals-pvt-ltd/",
      "https://www.instagram.com/hr_pharmaceuticals/",
      "https://www.hrpcpl.com/"
    ]
  };

  const schema2 = {
    "@context": "https://schema.org",
    "@type": "Pharmacy",
    "name": "Hr Pharmaceuticals",
    "image": "https://www.hrpcpl.com/img/hrlogo.png",
    "@id": "",
    "url": "https://www.hrpcpl.com/",
    "telephone": "8929055203",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Plot no-11,Sanjay Colony, Arthala",
      "addressLocality": "Ghaziabad",
      "postalCode": "201007",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 28.675726111827124,
      "longitude": 77.39515916931575
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
      ],
      "opens": "09:30",
      "closes": "05:00"
    },
    "sameAs": [
      "https://www.facebook.com/HR.Pharmaceuticals.pvt",
      "https://www.linkedin.com/company/hr-pharmaceuticals-pvt-ltd/",
      "https://www.instagram.com/hr_pharmaceuticals/",
      "https://www.hrpcpl.com/"
    ]
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(schema1)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(schema2)}
      </script>
    </Helmet>
  );
};

export default Schema;
