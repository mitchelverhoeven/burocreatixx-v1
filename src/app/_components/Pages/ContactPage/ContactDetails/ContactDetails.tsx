"use client";
import { motion } from "framer-motion";

export default function ContactDetails() {
  return (
    <>
      <div
        className="w-[1270px] mx-auto mt-[150px] mb-[100px] max-[1440px]:w-[1000px]
        max-[1440px]:pb-[0px] max-[1100px]:grid-cols-1 max-[1100px]:w-full 
        max-[1100px]:px-[120px] max-[900px]:px-[50px] max-[800px]:mt-[80px] max-[600px]:px-[40px]
        max-[400px]:px-[30px]"
      >
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 3 }}
        >
          <div className="max-[1100px]:w-full">
            <div
              className="text-3xl font-bold mb-6 text-[#f37e79]
            max-[400px]:text-2xl"
            >
              Contact
            </div>
            <h1
              className="w-2/3 mb-10 text-5xl break-words font-bold
           max-[600px]:w-full max-[400px]:text-4xl"
            >
              Spar met ons over jouw digitale toekomst
            </h1>
            <p className="w-[80%] max-[600px]:w-full">
              Bij Buro Creatixx draait alles om het samen creëren van digitale
              oplossingen. We zijn benieuwd naar jouw ideeën en kunnen niet
              wachten om die in de toekomst samen verder te ontwikkelen. Als
              full-service digital agency bieden we expertise in webdesign,
              online marketing, SEO-optimalisatie, en digitale strategieën.
              <br />
              <br />
              Hoewel we momenteel nog niet officieel geopend zijn, zijn we{" "}
              <span className="font-bold">
                op werkdagen tussen 09:00 en 17:00 wel bereikbaar
              </span>{" "}
              voor informatieverzoeken, adviesgesprekken, en het bespreken van
              samenwerkingen en toekomstige digitale projecten. Stuur ons een
              berichtje, en we reageren
              <span className="font-bold"> altijd binnen één werkdag.</span>
              <br />
              <br />
              Heb je zin om je plannen te delen? Bel ons voor een inspirerend
              gesprek of stuur een e-mail &ndash; we denken graag met je mee
              over online strategieën, SEO, en digitale transformatie.
            </p>
          </div>
        </motion.div>
      </div>
    </>
  );
}
