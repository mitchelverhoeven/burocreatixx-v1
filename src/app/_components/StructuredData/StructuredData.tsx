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
    {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      name: "Buro Creatixx",
      image: "https://www.burocreatixx.nl/logo-burocreatixx.jpg",
      url: "https://www.burocreatixx.nl",
      telephone: "+31652390201",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Centrum, Zierikzee",
        addressLocality: "Zierikzee",
        postalCode: "4301EZ",
        addressCountry: "NL",
      },
      openingHours: ["Mo-Fr 09:00-17:00"],
      sameAs: [
        "https://www.facebook.com/profile.php?id=61558276856698",
        "https://www.instagram.com/burocreatixx/",
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      name: "Buro Creatixx",
      url: "https://www.burocreatixx.nl",
      potentialAction: {
        "@type": "SearchAction",
        target: "https://www.burocreatixx.nl/?q={search_term_string}",
        "query-input": "required name=search_term_string",
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      name: "Buro Creatixx - Full Service Digital Agency in Zeeland",
      url: "https://www.burocreatixx.nl",
      description:
        "Welkom bij Buro Creatixx. Wij bieden strategie, design, technologie en marketing aan ambitieuze ondernemers.",
      breadcrumb: {
        "@id": "https://www.burocreatixx.nl/breadcrumb",
      },
      isPartOf: {
        "@type": "WebSite",
        name: "Buro Creatixx",
        url: "https://www.burocreatixx.nl",
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: "https://www.burocreatixx.nl",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Ons Verhaal",
          item: "https://www.burocreatixx.nl/ons-verhaal",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Contact",
          item: "https://www.burocreatixx.nl/contact",
        },
      ],
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
