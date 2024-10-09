import Link from "next/link";
// import { motion, useAnimation } from "framer-motion";
// import { useState } from "react";

export default function NavLinks() {
  //   const controls = useAnimation();
  //   const [isHovered, setIsHovered] = useState(false);

  //   const handleHoverStart = () => {
  //     controls.start({ width: 210, opacity: 1 });
  //     setIsHovered(true);
  //   };

  //   const handleHoverEnd = () => {
  //     controls.start({ width: 0, opacity: 0 });
  //     setIsHovered(false);
  //   };

  return (
    <>
      <nav className="">
        <ul
          className="flex justify-end text-lg gap-4 mt-[50px] font-bold 
        max-[1440px]:text-base"
        >
          <li>
            <Link
              href="https://www.facebook.com/profile.php?id=61558276856698"
              target="blank"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                className="bi bi-facebook fill-[#f37e79]"
                viewBox="0 0 16 16"
              >
                <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
              </svg>
            </Link>
          </li>
          <li>
            <Link href="https://www.instagram.com/burocreatixx/" target="blank">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                fill="currentColor"
                className="bi bi-instagram fill-[#f37e79]"
                viewBox="0 0 448 512"
              >
                <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
              </svg>
            </Link>
          </li>
          <li>
            <Link
              href="https://www.linkedin.com/company/buro-creatixx/about/"
              target="blank"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                fill="currentColor"
                className="bi bi-linkedin fill-[#f37e79] mr-6"
                viewBox="0 0 16 16"
              >
                <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
              </svg>
            </Link>
          </li>
          <li className="hover:text-[#139a48] hover:duration-300">
            <Link href="/" id="home-navbar-desktop">
              Home
            </Link>
          </li>
          <li className="hover:text-[#139a48] hover:duration-300">
            <Link href="/ons-verhaal" id="mijnverhaal-navbar-desktop">
              Ons verhaal
            </Link>
          </li>
          <li className="hover:text-[#139a48] hover:duration-300">
            <Link href="/contact" id="contact-navbar-desktop">
              Contact
            </Link>
          </li>

          {/* <li
            className="dropdown"
            onMouseEnter={handleHoverStart}
            onMouseLeave={handleHoverEnd}
          >
            <button className="dropbtn">
              Curriculum Vitae{" "}
              <span className="span font-normal text-[10px] text-gray-400">
                &#9660;
              </span>
            </button>
            <motion.div
              className="dropdown-content absolute bg-white shadow-md"
              initial={{ width: 0 }}
              animate={controls}
              transition={{ duration: 0.5 }}
            >
              {["Opleidingen", "Werkervaring", "Vaardigheden", "Hobbys"].map(
                (text, index) => (
                  <motion.div
                    key={text}
                    className="block p-2 hover:text-black duration-300"
                  >
                    <Link
                      href={`/${text.toLowerCase()}`}
                      id={
                        "opleidingen-navbar-desktop, werkervaring-navbar-desktop, vaardigheden-navbar-desktop, hobbys-navbar-desktop"
                      }
                      className="hover:text-black"
                    >
                      {text}
                    </Link>
                  </motion.div>
                )
              )}
            </motion.div>
          </li> */}

          {/* <li
            className="dropdown"
            onMouseEnter={handleHoverStart}
            onMouseLeave={handleHoverEnd}
          >
            <button className="dropbtn">
              Projecten{" "}
              <span className="span font-normal text-[10px] text-gray-400">
                &#9660;
              </span>
            </button>
            <motion.div
              className="dropdown-content absolute bg-white shadow-md"
              initial={{ width: 0 }}
              animate={controls}
              transition={{ duration: 0.5 }}
            >
              {["Projecten", "Maatwerk", "Prijzen"].map((text, index) => (
                <motion.div
                  key={text}
                  className="block p-2 hover:text-black duration-300"
                >
                  <Link
                    href={`/${text.toLowerCase()}`}
                    id="projecten-navbar-desktop, maatwerk-navbar-desktop, prijzen-navbar-desktop"
                    className="hover:text-black"
                  >
                    {text}
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </li> */}
        </ul>
      </nav>
    </>
  );
}
