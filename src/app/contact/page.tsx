import React from "react";
import ContactFormSection from "../_components/Pages/ContactPage/ContactFormSection/ContactFormSection";
import Footer from "../_components/Footer/Footer";
import ContactDetails from "../_components/Pages/ContactPage/ContactDetails/ContactDetails";

import { Metadata } from "next";
import ContactButtons from "../_components/Pages/ContactPage/ContactButtons/ContactButtons";

export const metadata: Metadata = {
  title: "Contact - Buro Creatixx",
  description:
    "Buro Creatixx, full-service digital agency in Zeeland. Met passie en creativiteit leveren wij high-end digitale oplossingen voor ambitieuze ondernemers.",
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
