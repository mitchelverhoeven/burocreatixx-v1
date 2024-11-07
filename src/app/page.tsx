import Header from "./_components/Header/Header";
import Footer from "./_components/Footer/Footer";

import type { Metadata as BaseMetadata } from "next";

interface ExtendedMetadata extends BaseMetadata {
  published?: string;
  modified?: string;
}
export const metadata: ExtendedMetadata = {
  title: "Buro Creatixx | Full Service Digital Agency in Zeeland.",
  description:
    "Buro Creatixx, full-service digital agency in Zeeland. Met passie en creativiteit leveren wij high-end digitale oplossingen voor ambitieuze ondernemers.",
  alternates: {
    canonical: "https://www.burocreatixx.nl/",
  },
  openGraph: {
    title: "Buro Creatixx | Full Service Digital Agency in Zeeland.",
    description:
      "Met passie en creativiteit leveren wij high-end digitale oplossingen voor ambitieuze ondernemers.",
    url: "https://www.burocreatixx.nl/",
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

export default function HomePage() {
  return (
    <>
      <div
        className="flex justify-center w-[1270px] mx-auto text-center items-center mt-[200px]
        max-[1440px]:w-[1000px] max-[1050px]:w-[800px] max-[850px]:w-full max-[425px]:mt-[100px]"
      >
        <Header />
      </div>

      <div className="-mt-[70px]">
        <Footer />
      </div>
    </>
  );
}
