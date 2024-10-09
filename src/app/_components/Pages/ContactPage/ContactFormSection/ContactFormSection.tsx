import ContactForm from "../ContactForm/ContactForm";
import CallToActionSection from "../CallToActionSection/CallToActionSection";

export default function ContactFormSection() {
  return (
    <>
      <div
        className="w-[1270px] mx-auto grid grid-cols-2 mt-[100px] mb-[150px] max-[1440px]:w-[1000px]
        max-[1440px]:pb-[0px] max-[1100px]:grid-cols-1 max-[1100px]:w-full max-[1100px]:px-[120px] 
        max-[900px]:px-[50px] max-[600px]:px-[40px] max-[400px]:px-[30px]"
      >
        <div className="max-[1100px]:order-last">
          <div className="">
            <ContactForm />
          </div>
        </div>
        <div className="grid items-center justify-center">
          <CallToActionSection />
        </div>
      </div>
    </>
  );
}
