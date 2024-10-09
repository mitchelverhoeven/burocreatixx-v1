import { motion, Variants } from "framer-motion";
import { useState } from "react";

// Definieer de types voor de animatievarianten
const svgVariants: Variants = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: {
    pathLength: 1,
    opacity: 1,
    transition: {
      duration: 5, // Duration for the whole animation
      ease: "easeInOut",
    },
  },
};

// Definieer het type van de component
export default function ContentSectionRight(): JSX.Element {
  // Geef het juiste type op voor de useState waarden
  const [fillPolygon, setFillPolygon] = useState<string>("none");
  const [fillRect, setFillRect] = useState<string>("none");
  const [fillPath, setFillPath] = useState<string>("none");

  return (
    <div>
      <div className="grid items-center justify-center">
        <motion.svg
          id="Laag_1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1080 1080"
          initial="hidden"
          animate="visible"
          className="w-[400px] max-[450px]:w-[300px]" // Adjust size as needed
        >
          <defs>
            <style>{`
              .cls-a {
                stroke: #139a48;
                fill: ${fillPolygon}; /* Dynamically set fill */
                stroke-miterlimit: 10;
                stroke-width: 10px;
              }

              .cls-b {
                stroke: #fff;
                fill: ${fillPath}; /* Dynamically set fill */
                stroke-miterlimit: 10;
                stroke-width: 10px;
              }
            `}</style>
          </defs>
          <rect width="1080" height="1080" fill="transparent" />

          {/* Polygon Animation */}
          <motion.polygon
            className="cls-a"
            points="491.85 463.74 491.85 423.64 519.25 394.78 560.75 394.78 588.15 423.64 588.15 463.74 560.75 492.61 519.25 492.61 491.85 463.74"
            variants={svgVariants}
            stroke="#139a48"
            strokeDasharray="1000"
            strokeDashoffset="1000"
            onAnimationComplete={() => setFillPolygon("#139a48")} // Set fill after animation
          />

          {/* Rectangle Animation */}
          <motion.rect
            className="cls-a"
            x="503.6"
            y="560.46"
            width="72.81"
            height="290.07"
            variants={svgVariants}
            stroke="#139a48"
            fill={fillRect} // Voeg dit toe om de `fillRect` te gebruiken
            strokeDasharray="1000"
            strokeDashoffset="1000"
            onAnimationComplete={() => setFillRect("#139a48")} // Set fill after animation
          />

          {/* Path Animation */}
          <motion.path
            className="cls-b"
            d="M683.89,655.1l71.57-54.85v-269.59l-64.71-48.66h-300.73l-65.48,48.66v268.82l71.57,54.85-30.45,40.94-92.12-70.29v-319.8l98.97-75.7h335.75l98.21,75.7v320.58l-91.36,70.3-31.21-40.94Z"
            variants={svgVariants}
            stroke="#fff"
            strokeDasharray="1000"
            strokeDashoffset="1000"
            onAnimationComplete={() => setFillPath("#fff")} // Set fill after animation
          />
        </motion.svg>
      </div>
    </div>
  );
}
