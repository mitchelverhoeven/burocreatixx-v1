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
              Ik ben verantwoordelijk voor de verwerking van jouw
              persoonsgegevens, zoals weergegeven in deze privacyverklaring.
              Deze privacyverklaring is opgesteld om jou inzicht te geven in hoe
              ik persoonsgegevens verzamel, gebruik, en bescherm, en om je te
              informeren over jouw rechten met betrekking tot jouw persoonlijke
              gegevens.
            </p>
            <br />
            <br />
            <br />
            <br />
            <div className="grid gap-y-6">
              <h2 className="text-2xl font-bold text-[#d23f27]">
                Persoonsgegevens die ik verwerk{" "}
              </h2>
              <p>
                Ik verwerk jouw persoonsgegevens omdat je gebruik maakt van mijn
                diensten en/of omdat je deze zelf aan mij verstrekt. De volgende
                gegevens kunnen door mij worden verzameld:
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
                <br />- Overige persoonsgegevens die je actief verstrekt,
                bijvoorbeeld door een profiel aan te maken op mijn website, in
                correspondentie en telefonisch.
              </p>
              <h2 className="text-2xl font-bold text-[#d23f27]">
                Doel van de verwerking
              </h2>
              <p>
                Ik verwerk jouw persoonsgegevens voor de volgende doeleinden:
                <br />
                <br />
                - Het afhandelen van betalingen
                <br />
                - Het leveren van mijn diensten, zoals webdesign, strategie,
                marketing, en technologie-oplossingen
                <br />
                - Het verzenden van mijn nieuwsbrief en/of commerciële
                aanbiedingen
                <br />
                - Om telefonisch of per e-mail contact met je op te nemen indien
                dit nodig is om mijn dienstverlening uit te voeren
                <br />
                - Het informeren over wijzigingen van mijn diensten en producten
                <br />
                - Het analyseren van jouw gedrag op de website om daarmee mijn
                website te verbeteren
                <br />- Het voldoen aan wettelijke verplichtingen, zoals
                gegevens die nodig zijn voor mijn belastingaangifte.
              </p>
              <h2 className="text-2xl font-bold text-[#d23f27]">
                Grondslagen voor verwerking
              </h2>
              <p>
                Ik verwerk persoonsgegevens alleen op basis van één of meerdere
                van de volgende juridische grondslagen:
                <br />
                <br />
                - Toestemming die je mij hebt gegeven (bijvoorbeeld bij het
                inschrijven voor mijn nieuwsbrief)
                <br />
                - Uitvoering van een overeenkomst (zoals bij het leveren van een
                dienst)
                <br />
                - Wettelijke verplichtingen (bijvoorbeeld het voldoen aan de
                belastingwetgeving)
                <br />- Gerechtvaardigd belang (zoals het verbeteren van mijn
                website en diensten).
              </p>
              <h2 className="text-2xl font-bold text-[#d23f27]">
                Geautomatiseerde besluitvorming
              </h2>
              <p>
                Ik neem geen besluiten op basis van geautomatiseerde
                verwerkingen over zaken die (aanzienlijke) gevolgen kunnen
                hebben voor jou. Het gaat hierbij om besluiten die worden
                genomen door computerprogramma&#x2019;s of -systemen zonder dat
                daar een mens aan te pas komt.
              </p>
              <h2 className="text-2xl font-bold text-[#d23f27]">
                Hoe lang ik persoonsgegevens bewaar
              </h2>
              <p>
                Ik bewaar jouw persoonsgegevens niet langer dan strikt nodig is
                om de doelen te realiseren waarvoor je gegevens worden
                verzameld. Ik hanteer de volgende bewaartermijnen:
              </p>
              - Persoonsgegevens voor facturering: 7 jaar (in overeenstemming
              met de wettelijke verplichting)
              <br />- Contactgegevens: totdat je aangeeft dat je deze wilt
              verwijderen, tenzij anders vereist op basis van wettelijke
              verplichtingen.
              <h2 className="text-2xl font-bold text-[#d23f27]">
                Delen van persoonsgegevens met derden
              </h2>
              <p>
                Ik verkoop jouw gegevens niet aan derden en verstrek deze
                uitsluitend indien dit nodig is voor de uitvoering van mijn
                overeenkomst met jou of om te voldoen aan een wettelijke
                verplichting. Met bedrijven die jouw gegevens verwerken in mijn
                opdracht, sluit ik een verwerkersovereenkomst om te zorgen voor
                eenzelfde niveau van beveiliging en vertrouwelijkheid van jouw
                gegevens.
              </p>
              <h2 className="text-2xl font-bold text-[#d23f27]">
                Cookies of vergelijkbare technieken die ik gebruik
              </h2>
              <p>
                Ik gebruik functionele, analytische en tracking cookies. Een
                cookie is een klein tekstbestand dat bij je eerste bezoek aan
                deze website wordt opgeslagen op jouw computer, tablet of
                smartphone. Ik gebruik cookies met een puur technische
                functionaliteit. Deze zorgen ervoor dat de website naar behoren
                werkt en dat bijvoorbeeld jouw voorkeursinstellingen worden
                onthouden.
                <br />
                <br />
                Daarnaast maak ik gebruik van analytische en tracking tools,
                waaronder:
                <br />
                <br />- <b>Facebook Pixel:</b> Hiermee analyseer ik jouw gedrag
                op mijn website en kan ik gerichte advertenties tonen via
                Facebook.
                <br />- <b>Google Analytics:</b> Dit helpt mij om statistieken
                te verzamelen over het gebruik van mijn website en deze te
                optimaliseren.
                <br />- <b>Google Tag Manager:</b> Hiermee beheer ik de
                implementatie van scripts, waaronder tracking en analytische
                tools.
                <br />
                <br />
                Deze tools kunnen informatie verzamelen zoals jouw IP-adres,
                locatie, surfgedrag en apparaat. Deze gegevens worden
                geanonimiseerd en nooit gebruikt om jou direct te identificeren.
                <br />
                <br />
                Bij je eerste bezoek aan mijn website heb ik jou geïnformeerd
                over deze cookies en je toestemming gevraagd voor het gebruik
                ervan. Je kunt je cookievoorkeuren altijd aanpassen via de
                instellingen van je browser of mijn cookie-instellingen.
              </p>
              <h2 className="text-2xl font-bold text-[#d23f27]">
                Gegevens inzien, aanpassen of verwijderen
              </h2>
              <p>
                Jij hebt het recht om jouw persoonsgegevens in te zien, te
                corrigeren of te verwijderen. Daarnaast heb je het recht om jouw
                eventuele toestemming voor de gegevensverwerking in te trekken
                of bezwaar te maken tegen de verwerking van jouw
                persoonsgegevens door mij en heb je het recht op
                gegevensoverdraagbaarheid. Dat betekent dat je bij mij een
                verzoek kunt indienen om de persoonsgegevens die ik van jou heb
                in een computerbestand naar jou of een andere, door jou genoemde
                organisatie, te sturen.
                <br />
                <br />
                Je kunt een verzoek tot inzage, correctie, verwijdering,
                gegevensoverdraging van jouw persoonsgegevens of verzoek tot
                intrekking van jouw toestemming of bezwaar op de verwerking van
                jouw persoonsgegevens sturen naar info@burocreatixx.nl.
              </p>
              <h2 className="text-2xl font-bold text-[#d23f27]">
                Beveiliging van persoonsgegevens
              </h2>
              <p>
                Ik neem de bescherming van jouw gegevens serieus en neem
                passende maatregelen om misbruik, verlies, onbevoegde toegang,
                ongewenste openbaarmaking en ongeoorloofde wijziging tegen te
                gaan. Als je de indruk hebt dat jouw gegevens niet goed
                beveiligd zijn of er aanwijzingen zijn van misbruik, neem dan
                contact op met mij via info@burocreatixx.nl.
              </p>
              <h2 className="text-2xl font-bold text-[#d23f27]">
                Wijzigingen in de privacyverklaring
              </h2>
              <p>
                Ik behoud me het recht voor om wijzigingen aan te brengen in
                deze privacyverklaring. Ik raad je daarom aan deze verklaring
                regelmatig te raadplegen, zodat je van eventuele wijzigingen op
                de hoogte bent.
              </p>
              <h2 className="text-2xl font-bold text-[#d23f27]">Contact</h2>
              <p>
                Als je vragen hebt over deze privacyverklaring of over de manier
                waarop ik omga met jouw persoonsgegevens, neem dan gerust
                contact met mij op via:
                <br />
                <br />
                E-mailadres: info@burocreatixx.nl
                <br />
                Telefoonnummer: 06-12345678
                <br />
                Adres: Zierikzee, Zeeland, Nederland
              </p>
            </div>
          </div>
        </motion.div>
      </div>
      <Footer />
    </div>
  );
}
