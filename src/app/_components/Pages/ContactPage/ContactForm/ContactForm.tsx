"use client";
import { motion } from "framer-motion";
import { useState, ChangeEvent, FormEvent } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface Errors {
  fullname?: boolean;
  email?: boolean;
  subject?: boolean;
  message?: boolean;
}

export default function ContactForm() {
  const [fullname, setFullname] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [tel, setTel] = useState<string>("");
  const [subject, setSubject] = useState<string>("");
  const [message, setMessage] = useState<string>("");

  const handleValidation = (): boolean => {
    const tempErrors: Errors = {};
    let isValid = true;

    if (fullname.length <= 0) {
      tempErrors.fullname = true;
      isValid = false;
    }
    if (email.length <= 0) {
      tempErrors.email = true;
      isValid = false;
    }
    if (subject.length <= 0) {
      tempErrors.subject = true;
      isValid = false;
    }
    if (message.length <= 0) {
      tempErrors.message = true;
      isValid = false;
    }

    return isValid;
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const isValidForm = handleValidation();

    if (isValidForm) {
      console.log("Submitting form:", {
        email,
        tel,
        fullname,
        subject,
        message,
      });

      try {
        const res = await fetch("/api/sendgrid", {
          body: JSON.stringify({
            email,
            tel,
            fullname,
            subject,
            message,
          }),
          headers: {
            "Content-Type": "application/json",
          },
          method: "POST",
        });

        console.log("Response received:", res);

        if (!res.ok) {
          throw new Error("Netwerkreactie was niet in orde");
        }

        const result = await res.json();
        console.log("Response JSON:", result);

        if (result.error) {
          throw new Error(result.error);
        }

        toast.success("Succesvol verzonden");
        setFullname("");
        setEmail("");
        setTel("");
        setSubject("");
        setMessage("");
      } catch (error) {
        if (error instanceof Error) {
          toast.error("Verzenden is niet gelukt: " + error.message);
        } else {
          toast.error(
            "Verzenden is niet gelukt: Er is een onbekende fout opgetreden."
          );
        }
      }
    }
  };

  return (
    <>
      <div className="">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 3 }}
        >
          <form
            onSubmit={handleSubmit}
            className="flex flex-col max-[500px]:pt-[0px]"
          >
            <div className="mb-10 text-4xl font-bold text-white max-[500px]:text-3xl">
              Verstuur hier je bericht
            </div>

            {/* Naam  */}
            <label htmlFor="naam" className="font-bold">
              Naam
            </label>
            <input
              type="text"
              value={fullname}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setFullname(e.target.value)
              }
              name="fullname"
              placeholder="Vul hier je voor- en achternaam in"
              id="naam"
              required
              className="border border-black focus:border-0 py-2 pl-4 focus:outline-none rounded-md 
          focus:ring-2 focus:bg-white ring-orange-600 font-light text-gray-500 max-[500px]:text-sm
          max-[350px]:pl-2"
            />

            {/* Emailadres */}
            <label htmlFor="email" className="mt-4 font-bold">
              E-mailadres
            </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Vul hier je e-mailadres in"
              value={email}
              required
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setEmail(e.target.value)
              }
              className="border border-black focus:border-0 py-2 pl-4 focus:outline-none rounded-md 
          focus:ring-2 ring-orange-600 font-light text-gray-500 max-[500px]:text-sm
          max-[350px]:pl-2"
            />

            {/* Telefoonnummer */}
            <label htmlFor="tel" className="mt-4 font-bold">
              Telefoonnummer *
            </label>
            <input
              type="tel"
              name="tel"
              id="tel"
              placeholder="Vul hier je telefoonnummer in"
              value={tel}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setTel(e.target.value)
              }
              className="border border-black focus:border-0 py-2 pl-4 focus:outline-none 
          rounded-md focus:ring-2 ring-orange-600 font-light text-gray-500 
          max-[500px]:text-sm max-[350px]:pl-2"
            />

            {/* Onderwerp */}
            <label htmlFor="subject" className="mt-4 font-bold">
              Onderwerp
            </label>
            <input
              type="text"
              name="subject"
              id="subject"
              placeholder="Vul hier je onderwerp in"
              required
              value={subject}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setSubject(e.target.value)
              }
              className="border border-black focus:border-0 py-2 pl-4 focus:outline-none 
          rounded-md focus:ring-2 ring-orange-600 font-light text-gray-500 
          max-[500px]:text-sm max-[350px]:pl-2"
            />

            {/* Bericht */}
            <label htmlFor="message" className="mt-4 font-bold">
              Bericht
            </label>
            <textarea
              name="message"
              id="message"
              placeholder="Type hier je bericht"
              required
              value={message}
              onChange={(e: ChangeEvent<HTMLTextAreaElement>) =>
                setMessage(e.target.value)
              }
              className="h-[150px] border border-black focus:border-0 py-2 pl-4 focus:outline-none 
          rounded-md focus:ring-2 ring-orange-600 font-light text-gray-500 
          max-[500px]:text-sm max-[350px]:pl-2"
            />

            {/* Extra informatie */}
            <div className="text-xs pt-4">
              <p>Met * gemarkeerde velden zijn geen verplichte velden.</p>{" "}
            </div>

            {/* Verzendknop */}
            <button
              type="submit"
              className="polygon-button w-[200px] mt-6 py-2 border-[#139a48] border-2 text-[#139a48] font-semibold rounded-lg 
            hover:rounded-full hover:text-white hover:duration-300 max-[500px]:w-[170px]"
            >
              Verzenden
            </button>
          </form>
        </motion.div>
      </div>
    </>
  );
}
