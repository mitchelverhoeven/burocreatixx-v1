import React from "react";
import ContentSection from "../_components/Pages/GeneralTermsPage/ContentSection";

import type { Metadata as BaseMetadata } from "next";

interface ExtendedMetadata extends BaseMetadata {
  published?: string;
  modified?: string;
}
export const metadata: ExtendedMetadata = {
  title: "Algemene voorwaarden - Buro Creatixx",
  description:
    "Bekijk de algemene voorwaarden van Buro Creatixx. Alles over afspraken, prijzen, aansprakelijkheid en meer voor onze digitale diensten.",
  alternates: {
    canonical: "https://www.burocreatixx.nl/algemene-voorwaarden",
  },
  openGraph: {
    title: "Buro Creatixx | Full Service Digital Agency in Zeeland.",
    description:
      "Bekijk de algemene voorwaarden van Buro Creatixx. Alles over afspraken, prijzen, aansprakelijkheid en meer voor onze digitale diensten.",
    url: "https://www.burocreatixx.nl/algemene-voorwaarden",
    siteName: "Buro Creatixx",
    images: [
      {
        url: "https://www.burocreatixx.nl/Omslagfoto-BuroCreatixx.jpg",
        width: 800,
        height: 600,
      },
      {
        url: "https://www.burocreatixx.nl/Omslagfoto-BuroCreatixx.jpg",
        height: 1600,
        alt: "Omslagfoto met logo van BuroCreatixx",
      },
    ],
    locale: "nl_NL",
    type: "website",
  },
  published: new Date("2024-10-9").toISOString(),
  modified: new Date().toISOString(),
};

export default function GeneralTermsText() {
  return (
    <div>
      <ContentSection />
    </div>
  );
}
