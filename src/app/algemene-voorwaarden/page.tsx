import { Metadata } from "next";
import React from "react";
import ContentSection from "../_components/Pages/GeneralTermsPage/ContentSection";

export const metadata: Metadata = {
  title: "Algemene voorwaarden - Buro Creatixx",
  description:
    "Buro Creatixx, full-service digital agency in Zeeland. Met passie en creativiteit leveren wij high-end digitale oplossingen voor ambitieuze ondernemers.",
};

export default function GeneralTermsText() {
  return (
    <div>
      <ContentSection />
    </div>
  );
}
