import { Metadata } from "next";
import ContentSection from "../_components/Pages/OurStoryPage/ContentSection";
import Footer from "../_components/Footer/Footer";

export const metadata: Metadata = {
  title: "Ons verhaal - Buro Creatixx",
  description:
    "Buro Creatixx, full-service digital agency in Zeeland. Met passie en creativiteit leveren wij high-end digitale oplossingen voor ambitieuze ondernemers.",
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
