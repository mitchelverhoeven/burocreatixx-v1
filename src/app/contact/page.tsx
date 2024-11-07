import React from "react";
import ContactFormSection from "../_components/Pages/ContactPage/ContactFormSection/ContactFormSection";
import Footer from "../_components/Footer/Footer";
import ContactDetails from "../_components/Pages/ContactPage/ContactDetails/ContactDetails";
import ContactButtons from "../_components/Pages/ContactPage/ContactButtons/ContactButtons";

import type { Metadata as BaseMetadata } from "next";

interface ExtendedMetadata extends BaseMetadata {
  published?: string;
  modified?: string;
}
export const metadata: ExtendedMetadata = {
  title: "Contact - Buro Creatixx",
  description:
    "Neem contact op met Buro Creatixx! Wij staan klaar voor advies, samenwerkingen en jouw digitale toekomst. Bereikbaar op werkdagen tussen 09:00 en 17:00.",
  alternates: {
    canonical: "https://www.burocreatixx.nl/contact",
  },
  openGraph: {
    title: "Buro Creatixx | Full Service Digital Agency in Zeeland.",
    description:
      "Neem contact op met Buro Creatixx! Wij staan klaar voor advies, samenwerkingen en jouw digitale toekomst. Bereikbaar op werkdagen tussen 09:00 en 17:00.",
    url: "https://www.burocreatixx.nl/contact",
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

export default function ContactPage() {
  return (
    <div>
      <ContactDetails />
      <ContactButtons />
      <ContactFormSection />
      <div className="mt-[70px] mb-[50px] max-[750px]:mb-[0px]">
        <Footer />
      </div>
    </div>
  );
}
