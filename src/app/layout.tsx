"use client";

import "./globals.css";

import Link from "next/link";
import { ToastContainer } from "react-toastify";
import { GoogleAnalytics } from "@next/third-parties/google";
import CookieConsent from "react-cookie-consent";

import NavBar from "./_components/NavBar/NavBar";
import StructuredData from "./_components/StructuredData/StructuredData";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="nl">
      <head>
        {/* Meta Pixel Code */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '596533896043721'); 
              fbq('track', 'PageView');
            `,
          }}
        />
        <meta
          name="robots"
          content="follow, index, max-snippet:-1, max-video-preview:-1, max-image-preview:large"
        />
      </head>
      <body>
        <Link
          href="https://db.onlinewebfonts.com/c/7a47ed05475430352e621c843953e9f9?family=Chakra+Petch+Bold"
          rel="stylesheet"
        ></Link>
        <GoogleAnalytics gaId="G-H205HVEM12" />
        <ToastContainer
          position="bottom-center"
          autoClose={10000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="colored"
        />

        <CookieConsent
          location="bottom"
          buttonText="Accepteren"
          cookieName="CookieName"
          style={{ background: "#1f1f1f", color: "white" }}
          buttonStyle={{
            color: "white",
            fontSize: "16px",
            background: "#139a48",
            borderRadius: "5px",
            paddingLeft: "30px",
            paddingRight: "30px",
            paddingTop: "10px",
            paddingBottom: "10px",
          }}
          expires={150}
          enableDeclineButton
          declineButtonText="Weigeren"
          declineButtonStyle={{
            fontSize: "16px",
            color: "#139a48",
            background: "none",
            border: "2px solid #139a48",
            borderRadius: "5px",
            marginRight: "50px",
            paddingLeft: "30px",
            paddingRight: "30px",
            paddingTop: "10px",
            paddingBottom: "10px",
            marginBottom: "40px",
            marginTop: "0px",
          }}
          onDecline={() => {
            alert("De cookies zijn nu succesvol uitgeschakeld");
          }}
          flipButtons
        >
          <div className="p-10 max-[700px]:p-0">
            <span className="font-bold text-lg">
              Deze website gebruikt cookies om je ervaring te verbeteren.
            </span>
            <br />
            <br />
            Wij gebruiken cookies om je ervaring op onze website te verbeteren
            en relevante content te tonen, en het websiteverkeer te analyseren.
            Door op &quot;Accepteren&quot; te klikken, ga je akkoord met het
            gebruik van alle cookies. Wil je meer weten? Bekijk ons&nbsp;
            <Link className="underline" href="/privacy">
              Privacybeleid
            </Link>
            .
          </div>
        </CookieConsent>

        <StructuredData />

        <NavBar />
        {children}
      </body>
    </html>
  );
}
