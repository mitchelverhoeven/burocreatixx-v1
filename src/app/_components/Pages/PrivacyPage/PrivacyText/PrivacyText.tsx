"use client";
import Footer from "@/app/_components/Footer/Footer";
import { motion } from "framer-motion";
import React from "react";

export default function PrivacyText() {
  return (
    <div>
      <div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 3 }}
        >
          <div
            className="w-[1270px] mx-auto max-[1440px]:w-[1000px] max-[1100px]:w-full 
          max-[1100px]:px-[120px] max-[900px]:px-[50px] max-[600px]:px-[40px]
        max-[400px]:px-[30px]"
          >
            <h1
              className="w-2/3 mb-10 text-5xl mt-[150px] break-words font-bold max-[768px]:mt-[80px]
           max-[600px]:w-full max-[400px]:text-4xl"
            >
              Privacyverklaring{" "}
            </h1>
            <p className="w-[80%] text-lg max-[600px]:w-full">
              Buro Creatixx, is verantwoordelijk voor de verwerking van
              persoonsgegevens zoals weergegeven in deze privacyverklaring. Deze
              privacyverklaring is opgesteld om inzicht te geven in hoe wij
              persoonsgegevens verzamelen, gebruiken, en beschermen, en om u te
              informeren over uw rechten met betrekking tot uw persoonlijke
              gegevens.
            </p>
            <br />
            <br />
            <br />
            <br />
            <div className="grid gap-y-6">
              <h2 className="text-2xl font-bold text-[#d23f27]">
                Persoonsgegevens die wij verwerken{" "}
              </h2>
              <p>
                Buro Creatixx verwerkt uw persoonsgegevens omdat u gebruik maakt
                van onze diensten en/of omdat u deze zelf aan ons verstrekt. De
                volgende gegevens kunnen door ons worden verzameld:
                <br />
                <br />
                - Voor- en achternaam
                <br />
                - Bedrijfsnaam
                <br />
                - Adresgegevens
                <br />
                - Telefoonnummer
                <br />
                - E-mailadres
                <br />
                - IP-adres
                <br />
                - Bankrekeningnummer (bij facturering)
                <br />- Overige persoonsgegevens die u actief verstrekt,
                bijvoorbeeld door een profiel aan te maken op onze website, in
                correspondentie en telefonisch.
              </p>
              <h2 className="text-2xl font-bold text-[#d23f27]">
                Doel van de verwerking
              </h2>
              <p>
                Buro Creatixx verwerkt uw persoonsgegevens voor de volgende
                doeleinden:
                <br />
                <br />
                - Het afhandelen van betalingen
                <br />
                - Het leveren van onze diensten, zoals webdesign, strategie,
                marketing, en technologie oplossingen
                <br />
                - Het verzenden van onze nieuwsbrief en/of commerciële
                aanbiedingen
                <br />
                - Om telefonisch of per e-mail contact met u op te nemen indien
                dit nodig is om onze dienstverlening uit te voeren
                <br />
                - Het informeren over wijzigingen van onze diensten en producten
                <br />
                - Het analyseren van uw gedrag op de website om daarmee onze
                website te verbeteren
                <br />- Het voldoen aan wettelijke verplichtingen, zoals
                gegevens die nodig zijn voor onze belastingaangifte.
              </p>
              <h2 className="text-2xl font-bold text-[#d23f27]">
                Grondslagen voor verwerking
              </h2>
              <p>
                Buro Creatixx verwerkt persoonsgegevens alleen op basis van één
                of meerdere van de volgende juridische grondslagen:
                <br />
                <br />
                - Toestemming die u ons hebt gegeven (bijvoorbeeld bij het
                inschrijven voor onze nieuwsbrief)
                <br />
                - Uitvoering van een overeenkomst (zoals bij het leveren van een
                dienst)
                <br />
                - Wettelijke verplichtingen (bijvoorbeeld het voldoen aan de
                belastingwetgeving)
                <br />- Gerechtvaardigd belang (zoals het verbeteren van onze
                website en diensten).
              </p>
              <h2 className="text-2xl font-bold text-[#d23f27]">
                Geautomatiseerde besluitvorming
              </h2>
              <p>
                Buro Creatixx neemt geen besluiten op basis van geautomatiseerde
                verwerkingen over zaken die (aanzienlijke) gevolgen kunnen
                hebben voor personen. Het gaat hierbij om besluiten die worden
                genomen door computerprogrammas of -systemen zonder dat daar een
                mens aan te pas komt.
              </p>
              <h2 className="text-2xl font-bold text-[#d23f27]">
                Hoe lang we persoonsgegevens bewaren
              </h2>
              <p>
                Buro Creatixx bewaart uw persoonsgegevens niet langer dan strikt
                nodig is om de doelen te realiseren waarvoor uw gegevens worden
                verzameld. Wij hanteren de volgende bewaartermijnen:
              </p>
              - Persoonsgegevens voor facturering: 7 jaar (in overeenstemming
              met de wettelijke verplichting)
              <br />- Contactgegevens: totdat u aangeeft dat u deze wilt
              verwijderen, tenzij anders vereist op basis van wettelijke
              verplichtingen.
              <h2 className="text-2xl font-bold text-[#d23f27]">
                Delen van persoonsgegevens met derden
              </h2>
              <p>
                Buro Creatixx verkoopt uw gegevens niet aan derden en verstrekt
                deze uitsluitend indien dit nodig is voor de uitvoering van onze
                overeenkomst met u of om te voldoen aan een wettelijke
                verplichting. Met bedrijven die uw gegevens verwerken in onze
                opdracht, sluiten wij een verwerkersovereenkomst om te zorgen
                voor eenzelfde niveau van beveiliging en vertrouwelijkheid van
                uw gegevens.
              </p>
              <h2 className="text-2xl font-bold text-[#d23f27]">
                Cookies of vergelijkbare technieken die wij gebruiken
              </h2>
              <p>
                Buro Creatixx gebruikt functionele, analytische en tracking
                cookies. Een cookie is een klein tekstbestand dat bij het eerste
                bezoek aan deze website wordt opgeslagen op uw computer, tablet
                of smartphone. Wij gebruiken cookies met een puur technische
                functionaliteit. Deze zorgen ervoor dat de website naar behoren
                werkt en dat bijvoorbeeld uw voorkeursinstellingen worden
                onthouden.
                <br />
                <br />
                Daarnaast plaatsen wij cookies die uw surfgedrag bijhouden zodat
                we op maat gemaakte content en advertenties kunnen aanbieden.
              </p>
              <h2 className="text-2xl font-bold text-[#d23f27]">
                Gegevens inzien, aanpassen of verwijderen
              </h2>
              <p>
                U heeft het recht om uw persoonsgegevens in te zien, te
                corrigeren of te verwijderen. Daarnaast heeft u het recht om uw
                eventuele toestemming voor de gegevensverwerking in te trekken
                of bezwaar te maken tegen de verwerking van uw persoonsgegevens
                door Buro Creatixx en heeft u het recht op
                gegevensoverdraagbaarheid. Dat betekent dat u bij ons een
                verzoek kunt indienen om de persoonsgegevens die wij van u
                hebben in een computerbestand naar u of een andere, door u
                genoemde organisatie, te sturen.
                <br />
                <br />U kunt een verzoek tot inzage, correctie, verwijdering,
                gegevensoverdraging van uw persoonsgegevens of verzoek tot
                intrekking van uw toestemming of bezwaar op de verwerking van uw
                persoonsgegevens sturen naar info@burocreatixx.nl.
              </p>
              <h2 className="text-2xl font-bold text-[#d23f27]">
                Beveiliging van persoonsgegevens
              </h2>
              <p>
                Buro Creatixx neemt de bescherming van uw gegevens serieus en
                neemt passende maatregelen om misbruik, verlies, onbevoegde
                toegang, ongewenste openbaarmaking en ongeoorloofde wijziging
                tegen te gaan. Als u de indruk heeft dat uw gegevens niet goed
                beveiligd zijn of er aanwijzingen zijn van misbruik, neem dan
                contact op met ons via info@burocreatixx.nl.
              </p>
              <h2 className="text-2xl font-bold text-[#d23f27]">
                Wijzigingen in de privacyverklaring
              </h2>
              <p>
                Buro Creatixx behoudt zich het recht voor om wijzigingen aan te
                brengen in deze privacyverklaring. Wij raden u daarom aan deze
                verklaring regelmatig te raadplegen, zodat u van eventuele
                wijzigingen op de hoogte bent.
              </p>
              <h2 className="text-2xl font-bold text-[#d23f27]">
                Contactgegevens:
              </h2>
              <p>
                Buro Creatixx
                <br />
                Zevengetijstraat 14
                <br />
                4301 EZ, Zierikzee
                <br />
                06 - 523 902 01
                <br />
                info@burocreatixx.nl
                <br />
                <br />
                Bij vragen of opmerkingen over ons privacybeleid kunt u contact
                opnemen via bovenstaande contactgegevens.
              </p>
            </div>
          </div>
          <div className="mt-[100px] mb-[50px] max-[750px]:mb-[0px]">
            <Footer />
          </div>
        </motion.div>
      </div>
    </div>
  );
}
