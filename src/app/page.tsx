import { Metadata } from "next";

import Header from "./_components/Header/Header";
import Footer from "./_components/Footer/Footer";

export const metadata: Metadata = {
  title: "Buro Creatixx | Full Service Digital Agency in Zeeland.",
  description:
    "Buro Creatixx, full service digital agency in Zeeland. Met passie en creativiteit leveren wij high-end digitale oplossingen voor ambitieuze ondernemers.",
};

export default function HomePage() {
  return (
    <>
      <div
        className="flex justify-center w-[1270px] mx-auto text-center items-center h-screen -mt-[100px]
    max-[1440px]:w-[1000px] max-[1050px]:w-[800px] max-[850px]:w-full"
      >
        <Header />
      </div>

      <div className="-mt-[70px]">
        <Footer />
      </div>
    </>
  );
}
