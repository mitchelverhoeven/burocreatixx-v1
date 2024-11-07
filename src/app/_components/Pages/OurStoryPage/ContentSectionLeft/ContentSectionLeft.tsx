import { motion } from "framer-motion";
import Link from "next/link";

export default function ContentSectionLeft() {
  return (
    <div>
      <div className="items-center grid px-[40px] max-[425px]:text-left">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 3 }}
        >
          <h1 className="text-2xl font-bold pb-6">
            Buro Creatixx: Jouw Partner in Creatieve Digitale Oplossingen
          </h1>
          <h2 className="pb-8">
            Buro Creatixx is een full-service digital agency in Zierikzee,
            gespecialiseerd in strategische digitale oplossingen, webdesign,
            technologische innovaties, en online marketing. Ons bedrijf, dat in
            de tweede helft van 2025 officieel van start gaat, helpt ondernemers
            en startups met op maat gemaakte digitale strategieën en creatieve
            weboplossingen.
            <br />
            <br />
            Met een flinke dosis creativiteit en passie werken we momenteel hard
            aan de voorbereidingen. Daarom kunnen we nog niet direct voor je aan
            de slag, maar we staan wel open voor informatieverzoeken, advies, en
            samenwerkingen. We bespreken graag de digitale mogelijkheden voor
            toekomstige websites en online campagnes.
            <br />
            <br />
            Neem gerust contact met ons op voor een vrijblijvende afspraak om de
            mogelijkheden te verkennen.
          </h2>

          <Link href="/contact" id="contact-navbar-meerinformatie">
            <button
              className="polygon-button mx-auto flex border-2 border-[#f37e79] px-8 py-2 text-[#f37e79] font-semibold
                 hover:text-white hover:duration-300 max-[425px]:mx-0"
            >
              Contact
            </button>
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
