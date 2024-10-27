"use client";
import { useState } from "react";

import { motion } from "framer-motion";
import MenuList from "./MenuList/MenuList";
import { HamburgerMenu } from "./HamburgerMenu/HamburgerMenu";
import { useDisableScroll } from "./useDisableScroll/useDisableScroll";
import ContactWhatsappButton from "../../Pages/ContactPage/ContactWhatsappButton/ContactWhatsappButton";
import ContactEmailButton from "../../Pages/ContactPage/ContactEmailButton/ContactEmailButton";
import ContactLocationButton from "../../Pages/ContactPage/ContactLocationButton/ContactLocationButton";

export default function MobileMenu() {
  const [open, setOpen] = useState(false);
  const [cvOpen, setCvOpen] = useState(false);
  const [projectOpen, setProjectOpen] = useState(false);

  function close() {
    setOpen(false);
    setCvOpen(false);
    setProjectOpen(false);
  }

  useDisableScroll(open);

  return (
    <>
      <div className="min-[1101px]:hidden my-8 mr-14 z-50 max-[600px]:mr-10 max-[360px]:mr-8">
        <HamburgerMenu key="menu" open={open} onClick={setOpen} />
      </div>

      {open ? (
        <div
          className="mobile-menu fixed inset-x-0 top-0 z-40 h-screen bg-black text-white
        grid content-center min-[1101px]:hidden overflow-auto max-[850px]:content-start
        max-[850px]:py-[100px]"
        >
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            animate={{ y: 100 }}
            transition={{ type: "spring", bounce: 0.6, duration: 3 }}
          >
            <div
              className="w-[700px] mx-auto grid grid-cols-2 -mt-[100px] max-[850px]:grid-cols-1
          max-[850px]:w-full max-[850px]:px-10 mb-[100px]"
            >
              <div className="grid content-center">
                <MenuList
                  cvOpen={cvOpen}
                  setCvOpen={setCvOpen}
                  projectOpen={projectOpen}
                  setProjectOpen={setProjectOpen}
                  close={close}
                />
              </div>

              <div
                className="flex flex-col gap-6 max-[850px]:mt-16"
                onClick={close}
              >
                <ContactWhatsappButton />
                <ContactEmailButton />
                <ContactLocationButton />
              </div>
            </div>

            <div
              className="absolute top-0 right-0 m-6 cursor-pointer"
              onClick={close}
            ></div>
          </motion.div>
        </div>
      ) : null}
    </>
  );
}
