export default function StructuredData() {
  const structuredData = [
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      name: "Buro Creatixx",
      url: "https://www.burocreatixx.nl",
      logo: "https://www.burocreatixx.nl/logo-burocreatixx.jpg",
      description:
        "Buro Creatixx is een full service digital agency in Zeeland dat strategie, design, technologie en marketing biedt aan ambitieuze ondernemers.",
      sameAs: [
        "https://www.facebook.com/profile.php?id=61558276856698",
        "https://www.instagram.com/burocreatixx/",
      ],
      contactPoint: {
        "@type": "ContactPoint",
        telephone: "+31652390201",
        contactType: "Customer Service",
        areaServed: "NL",
        availableLanguage: ["Dutch"],
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "Service",
      serviceType: "Full Service Digital Agency",
      provider: {
        "@type": "Organization",
        name: "Buro Creatixx",
      },
      offers: {
        "@type": "Offer",
        url: "https://www.burocreatixx.nl",
        priceCurrency: "EUR",
        category: ["Technologie", "Design", "Strategie", "Marketing"],
        eligibleRegion: "NL",
        price: "Op aanvraag",
      },
    },
  ];

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(structuredData),
      }}
    ></script>
  );
}
