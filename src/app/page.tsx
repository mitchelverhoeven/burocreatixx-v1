import Head from "next/head";
import Header from "./_components/Header/Header";
import Footer from "./_components/Footer/Footer";
import StructuredData from "./_components/StructuredData/StructuredData";

interface PageMetadata {
  title: string;
  description: string;
}

// Metadata object met publicatie- en aanpassingsdata
export const metadata: PageMetadata = {
  title: "Buro Creatixx | Full Service Digital Agency in Zeeland.",
  description:
    "Buro Creatixx, full service digital agency in Zeeland. Met passie en creativiteit leveren wij high-end digitale oplossingen voor ambitieuze ondernemers.",
};

// MetaTags component
const MetaTags = ({ metadata }: { metadata: PageMetadata }) => {
  return (
    <Head>
      <title>{metadata.title}</title>
      <meta name="description" content={metadata.description} />
      {/* Open Graph Tags */}
      <meta property="og:title" content={metadata.title} />
      <meta property="og:description" content={metadata.description} />
      {/* Voeg andere relevante meta-tags toe hier */}
    </Head>
  );
};

// HomePage component
export default function HomePage() {
  return (
    <>
      <MetaTags metadata={metadata} />
      <div
        className="flex justify-center w-[1270px] mx-auto text-center items-center mt-[200px]
        max-[1440px]:w-[1000px] max-[1050px]:w-[800px] max-[850px]:w-full max-[425px]:mt-[100px]"
      >
        <Header />
      </div>

      <StructuredData />

      <div className="-mt-[70px]">
        <Footer />
      </div>
    </>
  );
}
