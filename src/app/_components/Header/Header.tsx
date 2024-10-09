"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";
import LogoSvg from "./LogoSvg/LogoSvg";
// import Footer from "../Footer/Footer";

export default function Header() {
  return (
    <div className="mb-[500px]">
      {" "}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        animate={{ y: 100 }}
        transition={{ type: "spring", bounce: 0.6, duration: 3 }}
      >
        <div className="grid gap-10 -mt-[100px] max-[375px]:gap-6">
          <LogoSvg />

          <div className="grid gap-6">
            <h1 className="font-medium px-[50px] chakraPetch">
              Een nieuw bedrijf dat in de tweede helft van 2025 officieel van
              start gaat.
            </h1>
            <Link href="/ons-verhaal" id="meerinformatie-navbar-desktop">
              <button
                className="polygon-button mx-auto flex border-2 border-[#139a48] text-[#139a48] px-8 py-2 font-semibold 
       hover:text-white hover:duration-300"
              >
                Meer informatie
              </button>
            </Link>
          </div>
          {/* <div
            className="content-end grid min-[1051px]:hidden max-[1051px]:mt-[200px]
        max-[1051px]:pb-[50px] max-[751px]:pb-[20px]"
          >
            <Footer />
          </div> */}
        </div>
      </motion.div>
    </div>
  );
}
