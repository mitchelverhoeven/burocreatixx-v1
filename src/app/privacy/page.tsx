import React from "react";
import { Metadata } from "next";
import PrivacyText from "../_components/Pages/PrivacyPage/PrivacyText/PrivacyText";

export const metadata: Metadata = {
  title: "Privacyverklaring - Buro Creatixx",
  description:
    "Buro Creatixx, full-service digital agency in Zeeland. Met passie en creativiteit leveren wij high-end digitale oplossingen voor ambitieuze ondernemers.",
};

export default function PrivacyPage() {
  return (
    <>
      <PrivacyText />
    </>
  );
}
