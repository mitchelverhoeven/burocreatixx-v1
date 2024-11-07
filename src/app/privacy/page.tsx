import React from "react";
import PrivacyText from "../_components/Pages/PrivacyPage/PrivacyText/PrivacyText";

import type { Metadata as BaseMetadata } from "next";

interface ExtendedMetadata extends BaseMetadata {
  published?: string;
  modified?: string;
}
export const metadata: ExtendedMetadata = {
  title: "Privacyverklaring - Buro Creatixx",
  description:
    "Lees de privacyverklaring van Buro Creatixx. Ontdek hoe wij persoonsgegevens verwerken, beveiligen en beschermen volgens de AVG-richtlijnen.",
  alternates: {
    canonical: "https://www.burocreatixx.nl/privacy",
  },
  openGraph: {
    title: "Buro Creatixx | Full Service Digital Agency in Zeeland.",
    description:
      "Lees de privacyverklaring van Buro Creatixx. Ontdek hoe wij persoonsgegevens verwerken, beveiligen en beschermen volgens de AVG-richtlijnen.",
    url: "https://www.burocreatixx.nl/privacy",
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
        alt: "Omslagfoto BuroCreatix",
      },
    ],
    locale: "nl_NL",
    type: "website",
  },
  published: new Date("2024-10-9").toISOString(),
  modified: new Date().toISOString(),
};

export default function PrivacyPage() {
  return (
    <>
      <PrivacyText />
    </>
  );
}
