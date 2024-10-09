"use client";
import { motion } from "framer-motion";
import React from "react";
import ContactEmailButton from "../ContactEmailButton/ContactEmailButton";
import ContactWhatsappButton from "../ContactWhatsappButton/ContactWhatsappButton";

export default function ContactButtons() {
  return (
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
          <div
            className="grid grid-cols-2 gap-4 mb-[50px] font-bold text-white text-center
          max-[700px]:grid-cols-1"
          >
            <ContactWhatsappButton />
            <ContactEmailButton />
          </div>
        </div>
      </motion.div>
    </div>
  );
}
