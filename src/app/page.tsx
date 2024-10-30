import Header from "./_components/Header/Header";
import Footer from "./_components/Footer/Footer";
import { Metadata } from "next";
import Head from "next/head";

export const metadata: Metadata = {
  title: "Buro Creatixx | Full Service Digital Agency in Zeeland.",
  description:
    "Buro Creatixx, full-service digital agency in Zeeland. Met passie en creativiteit leveren wij high-end digitale oplossingen voor ambitieuze ondernemers.",
  alternates: {
    canonical: "https://www.burocreatixx.nl/",
  },
};

export default function HomePage() {
  return (
    <>
      <Head>
        {/* Open Graph tags */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://burocreatixx.nl/" />
        <meta
          property="og:title"
          content="Buro Creatixx | Full Service Digital Agency in Zeeland."
        />
        <meta
          property="og:description"
          content="Buro Creatixx, full-service digital agency in Zeeland. Met passie en creativiteit leveren wij high-end digitale oplossingen voor ambitieuze ondernemers."
        />
        <meta
          property="og:image"
          content="https://metatags.io/images/meta-tags.png"
        />

        {/* Twitter  */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://burocreatixx.nl/" />
        <meta
          property="twitter:title"
          content="Buro Creatixx | Full Service Digital Agency in Zeeland."
        />
        <meta
          property="twitter:description"
          content="Buro Creatixx, full-service digital agency in Zeeland. Met passie en creativiteit leveren wij high-end digitale oplossingen voor ambitieuze ondernemers."
        />
        <meta
          property="twitter:image"
          content="https://metatags.io/images/meta-tags.png"
        />
      </Head>

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
