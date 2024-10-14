"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import { motion } from "framer-motion";

export default function ContactLocationButton() {
  return (
    <>
      <motion.div
        transition={{ type: "spring", bounce: 0.8, duration: 1 }}
        whileHover={{
          x: [-5, 5],
        }}
      >
        <Link href="https://maps.app.goo.gl/dn1HnFvdToMCBPxL9" target="_blank">
          <div
            className="border-2 border-[#139a48] text-[#139a48] text-xl py-10 rounded-lg 
            items-center flex pl-8 gap-6 font-bold max-[1440px]:pl-4 max-[1440px]:gap-3 
            max-[400px]:text-base"
          >
            <FontAwesomeIcon
              icon={faLocationDot}
              className="text-[#139a48] w-[20px]"
            />
            <p> Zierikzee - Zeeland</p>
          </div>
        </Link>
      </motion.div>
    </>
  );
}
