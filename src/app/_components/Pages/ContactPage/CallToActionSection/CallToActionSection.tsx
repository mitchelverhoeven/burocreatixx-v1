"use client";
import { motion } from "framer-motion";

export default function CallToActionSection() {
  return (
    <div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 3 }}
      >
        <div
          className="flex flex-col justify-center pl-[100px]
        max-[1100px]:pl-0 max-[1100px]:mb-[100px]"
        >
          <h3 className="text-6xl pb-4 font-bold max-[360px]:text-5xl">
            <span className="text-[#f37e79]">Samen </span>
            <span className="text-[#d23f27]">creëren</span> we de{" "}
            <span className="text-[#139a48]">toekomst.</span>
          </h3>
          <h4 className="text-xl">
            Neem contact op en laten we samen jouw digitale dromen
            verwezenlijken.
          </h4>
        </div>
      </motion.div>
    </div>
  );
}
