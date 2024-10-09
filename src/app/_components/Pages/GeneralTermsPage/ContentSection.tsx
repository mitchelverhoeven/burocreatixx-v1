"use client";
import React from "react";
import Footer from "../../Footer/Footer";
import { motion } from "framer-motion";

export default function ContentSection() {
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
              className="w-2/3 mb-10 text-5xl mt-[150px] break-words font-bold
           max-[600px]:w-full max-[400px]:text-4xl"
            >
              Algemene Voorwaarden{" "}
            </h1>
            <br />
            <br />
            <br />
            <br />
            <div className="grid gap-y-6">
              <h2 className="text-2xl font-bold text-[#d23f27]">Definities</h2>
              <h3>
                1.1 Buro Creatixx: de opdrachtnemer die optreedt als full
                service digital agency, gespecialiseerd in diensten op het
                gebied van strategie, design, technologie en marketing. 1.2
                Opdrachtgever: de natuurlijke of rechtspersoon die met Buro
                Creatixx een overeenkomst aangaat. 1.3 Diensten: alle door Buro
                Creatixx aangeboden producten en diensten op het gebied van
                strategie, design, technologie, marketing en andere gerelateerde
                diensten. 1.4 Overeenkomst: de afspraak tussen de opdrachtgever
                en Buro Creatixx, waarin de levering van diensten wordt
                vastgelegd.
              </h3>
              <h2 className="text-2xl font-bold text-[#d23f27]">
                Toepasselijkheid
              </h2>
              <h3>
                2.1 Deze algemene voorwaarden zijn van toepassing op alle
                offertes, overeenkomsten en werkzaamheden uitgevoerd door Buro
                Creatixx, tenzij schriftelijk anders is overeengekomen. 2.2
                Afwijkingen van deze algemene voorwaarden zijn alleen geldig
                indien deze schriftelijk zijn overeengekomen.
              </h3>
              <h2 className="text-2xl font-bold text-[#d23f27]">
                Offertes en Overeenkomst
              </h2>
              <h3>
                3.1 Offertes van Buro Creatixx zijn vrijblijvend, tenzij anders
                vermeld, en zijn 30 dagen geldig vanaf de datum van uitgifte.
                3.2 Een overeenkomst komt tot stand zodra de opdrachtgever de
                offerte schriftelijk accepteert of een schriftelijke
                opdrachtbevestiging ontvangt. 3.3 Buro Creatixx behoudt zich het
                recht voor om opdrachten zonder opgave van redenen te weigeren.
              </h3>
              <h2 className="text-2xl font-bold text-[#d23f27]">
                Uitvoering van de Overeenkomst
              </h2>
              <h3>
                4.1 Buro Creatixx zal de overeenkomst naar beste inzicht en
                vermogen uitvoeren conform de eisen van goed vakmanschap. 4.2 De
                opdrachtgever zorgt ervoor dat alle gegevens, die noodzakelijk
                zijn voor de uitvoering van de overeenkomst, tijdig worden
                verstrekt aan Buro Creatixx. 4.3 De opdrachtgever is
                verantwoordelijk voor de juistheid, volledigheid en
                betrouwbaarheid van de aan Buro Creatixx verstrekte informatie,
                ook als deze van derden afkomstig is.
              </h3>
              <h2 className="text-2xl font-bold text-[#d23f27]">
                Leveringstermijnen
              </h2>
              <h3>
                Alle door Buro Creatixx genoemde (leverings)termijnen zijn
                indicatief en gelden niet als fatale termijn, tenzij
                schriftelijk anders is overeengekomen. 5.2 Overschrijding van de
                termijn geeft de opdrachtgever geen recht op schadevergoeding of
                ontbinding van de overeenkomst.
              </h3>
              <h2 className="text-2xl font-bold text-[#d23f27]">
                Wijzigingen in de Overeenkomst
              </h2>
              <h3>
                6.1 Indien tijdens de uitvoering van de overeenkomst blijkt dat
                het noodzakelijk is om de overeenkomst te wijzigen of aan te
                vullen, zullen partijen tijdig en in onderling overleg de
                overeenkomst aanpassen. 6.2 Indien de wijziging van invloed is
                op de prijs of oplevertermijn, zal Buro Creatixx de
                opdrachtgever hierover schriftelijk informeren.
              </h3>
              <h2 className="text-2xl font-bold text-[#d23f27]">
                Prijzen en Betalingen
              </h2>
              <h3>
                7.1 Alle prijzen zijn exclusief BTW, tenzij anders vermeld. 7.2
                Betalingen dienen te geschieden binnen 14 dagen na factuurdatum,
                tenzij schriftelijk anders overeengekomen. 7.3 Indien de
                opdrachtgever de factuur niet tijdig voldoet, is Buro Creatixx
                gerechtigd wettelijke rente en eventuele incassokosten in
                rekening te brengen.
              </h3>
              <h2 className="text-2xl font-bold text-[#d23f27]">
                Aansprakelijkheid
              </h2>
              <h3>
                8.1 Buro Creatixx is slechts aansprakelijk voor directe schade
                die het gevolg is van opzet of grove nalatigheid bij de
                uitvoering van de overeenkomst. 8.2 Buro Creatixx is in geen
                geval aansprakelijk voor indirecte schade, waaronder begrepen
                gederfde winst, gemiste besparingen, of schade door
                bedrijfsstagnatie. 8.3 De aansprakelijkheid van Buro Creatixx is
                te allen tijde beperkt tot het bedrag dat door de opdrachtgever
                aan Buro Creatixx betaald is voor de specifieke opdracht.
              </h3>
              <h2 className="text-2xl font-bold text-[#d23f27]">
                Intellectuele Eigendomsrechten
              </h2>
              <h3>
                9.1 Alle door Buro Creatixx ontwikkelde ontwerpen, strategieën,
                software, en andere creaties blijven eigendom van Buro Creatixx,
                tenzij schriftelijk anders overeengekomen. 9.2 Het is de
                opdrachtgever niet toegestaan om zonder schriftelijke
                toestemming van Buro Creatixx materialen te verveelvoudigen,
                openbaar te maken of aan derden beschikbaar te stellen.
              </h3>
              <h2 className="text-2xl font-bold text-[#d23f27]">
                Vertrouwelijkheid
              </h2>
              <h3>
                10.1 Beide partijen zijn verplicht tot geheimhouding van alle
                vertrouwelijke informatie die zij in het kader van de
                overeenkomst van elkaar of uit andere bron hebben verkregen.
              </h3>
              <h2 className="text-2xl font-bold text-[#d23f27]">Overmacht</h2>
              <h3>
                11.1 In geval van overmacht is Buro Creatixx niet gehouden de
                verplichtingen uit de overeenkomst na te komen. Onder overmacht
                wordt verstaan elke van de wil van Buro Creatixx onafhankelijke
                omstandigheid die de nakoming van de overeenkomst tijdelijk of
                blijvend verhindert. 11.2 In geval van overmacht zal Buro
                Creatixx de opdrachtgever zo snel mogelijk informeren. Beide
                partijen zijn gerechtigd de overeenkomst schriftelijk te
                beëindigen indien de situatie van overmacht langer dan 30 dagen
                duurt, zonder dat er in dat geval een verplichting tot
                schadevergoeding bestaat.
              </h3>
              <h2 className="text-2xl font-bold text-[#d23f27]">Beëindiging</h2>
              <h3>
                12.1 Beide partijen kunnen de overeenkomst te allen tijde
                schriftelijk beëindigen met inachtneming van een opzegtermijn
                van ten minste één maand. 12.2 Buro Creatixx heeft het recht de
                overeenkomst met onmiddellijke ingang te beëindigen indien de
                opdrachtgever tekortschiet in de nakoming van wezenlijke
                verplichtingen uit de overeenkomst.
              </h3>
              <h2 className="text-2xl font-bold text-[#d23f27]">
                Toepasselijk Recht en Geschillen
              </h2>
              <h3>
                13.1 Op alle overeenkomsten met Buro Creatixx is Nederlands
                recht van toepassing. 13.2 Geschillen zullen bij voorkeur in
                goed overleg worden opgelost. Indien dit niet mogelijk is,
                worden geschillen voorgelegd aan de bevoegde rechter in het
                arrondissement waar Buro Creatixx is gevestigd.
              </h3>
              <h2 className="text-2xl font-bold text-[#d23f27]">
                Slotbepalingen
              </h2>
              <h3>
                14.1 Indien één of meerdere bepalingen van deze algemene
                voorwaarden nietig of vernietigbaar blijken te zijn, blijven de
                overige bepalingen onverminderd van kracht. 14.2 Buro Creatixx
                behoudt zich het recht voor om deze algemene voorwaarden
                eenzijdig te wijzigen. De opdrachtgever zal hier tijdig van op
                de hoogte worden gebracht.
              </h3>
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
