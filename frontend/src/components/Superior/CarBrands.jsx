import React from "react";
import { motion } from "framer-motion";

const brands = [
  {
    name: "Toyota",
    logo: "/toyota.png",
  },
  {
    name: "Honda",
    logo: "/honda.png",
  },
  {
    name: "Suzuki",
    logo: "/suzuki.png",
  },
  
  {
    name: "Daihatsu",
    logo: "/daihatsu.png",
  },
];

export default function CarBrands() {
  return (
    <section className="bg-[#F4F8FC] border-b border-[#2563A6]/10 overflow-hidden">
      <div className="max-w-7xl mx-auto py-12 sm:py-14">
        {/* Brand Logo Marquee */}
        <div className="relative w-full overflow-hidden">
          <motion.div
            className="flex items-center w-max"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 22,
                ease: "linear",
              },
            }}
          >
            {/* First set */}
            {brands.map((brand) => (
              <div
                key={`first-${brand.name}`}
                className="flex items-center justify-center mx-10 sm:mx-14 lg:mx-20 w-28 sm:w-32 lg:w-36 h-16 sm:h-20 shrink-0"
              >
                <img
                  src={brand.logo}
                  alt={`${brand.name} logo`}
                  className="max-h-12 sm:max-h-14 lg:max-h-16 max-w-full w-auto object-contain opacity-65 hover:opacity-100 transition-opacity duration-300"
                />
              </div>
            ))}

            {/* Duplicate set for seamless loop */}
            {brands.map((brand) => (
              <div
                key={`second-${brand.name}`}
                className="flex items-center justify-center mx-10 sm:mx-14 lg:mx-20 w-28 sm:w-32 lg:w-36 h-16 sm:h-20 shrink-0"
              >
                <img
                  src={brand.logo}
                  alt={`${brand.name} logo`}
                  className="max-h-12 sm:max-h-14 lg:max-h-16 max-w-full w-auto object-contain opacity-65 hover:opacity-100 transition-opacity duration-300"
                />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}