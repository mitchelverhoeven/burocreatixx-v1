import Head from "next/head";

export default function MetaTags() {
  return (
    <Head>
      <title>Buro Creatixx | Full Service Digital Agency in Zeeland</title>
      <meta
        name="description"
        content="Buro Creatixx, full service digital agency in Zeeland. Met passie en creativiteit leveren wij high-end digitale oplossingen voor ambitieuze ondernemers."
      />

      {/* Open Graph metadata voor Facebook, Instagram, en LinkedIn */}
      <meta
        property="og:title"
        content="Buro Creatixx - Full Service Digital Agency"
      />
      <meta
        property="og:description"
        content="Wij bieden strategie, design, technologie en marketingoplossingen op maat vanuit Zeeland. Neem contact op voor hoogwaardige digitale ondersteuning!"
      />

      <meta
        property="og:image"
        content="https://www.burocreatixx.nl/Omslagfoto-BuroCreatixx.jpg"
      />
      <meta property="og:url" content="https://www.burocreatixx.nl" />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Buro Creatixx" />
    </Head>
  );
}
