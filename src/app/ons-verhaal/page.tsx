import ContentSection from "../_components/Pages/OurStoryPage/ContentSection";
import Footer from "../_components/Footer/Footer";

import type { Metadata as BaseMetadata } from "next";

interface ExtendedMetadata extends BaseMetadata {
  published?: string;
  modified?: string;
}
export const metadata: ExtendedMetadata = {
  title: "Ons verhaal - Buro Creatixx",
  description:
    "Ontdek Buro Creatixx: jouw partner in strategie, design, technologie en marketing. Officiële start in 2025. Neem nu contact op voor advies of samenwerking!",
  alternates: {
    canonical: "https://www.burocreatixx.nl/ons-verhaal",
  },
  openGraph: {
    title: "Buro Creatixx | Full Service Digital Agency in Zeeland.",
    description:
      "Ontdek Buro Creatixx: jouw partner in strategie, design, technologie en marketing. Officiële start in 2025. Neem nu contact op voor advies of samenwerking!",
    url: "https://www.burocreatixx.nl/ons-verhaal",
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

export default function OurStoryPage() {
  return (
    <>
      <div
        className="flex justify-center w-[1270px] mx-auto text-center items-center mt-[200px]
    max-[1440px]:w-[1000px] max-[1050px]:w-[800px] max-[850px]:w-full"
      >
        <ContentSection />
      </div>
      <div className="-mt-[70px] mb-[50px] max-[1050px]:hidden">
        <Footer />
      </div>
    </>
  );
}
