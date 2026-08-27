import React from "react";

import { motion } from "framer-motion";

import { BadgeCheck, PackageSearch } from "lucide-react";

import Navbar from "../../components/Superior/Navbar";
import Footer from "../../components/Superior/Footer";
import CarBrands from "../../components/Superior/CarBrands";

import { FaWhatsapp } from "react-icons/fa";

/**
 * ProductsSuperior.jsx — Superior
 * Palette: blue (#2563A6) + white
 */

const products = [
  {
    tag: "OEM Quality",
    name: "CV Joint",
    subtitle: "Constant Velocity Joint",
    image: "/superior_prod.jpeg",
    desc: "Engineered to OEM specifications, the Superior CV Joint delivers smooth, reliable power transfer from your transmission to the wheels, even under heavy load and constant steering angles. Precision-machined splines and a durable tripod bearing assembly ensure consistent performance, reduced vibration, and a longer service life than generic aftermarket parts. Every unit undergoes strict quality checks before packaging, so workshops can install with confidence and drivers get a noise-free, shudder-free ride backed by 20+ years of trusted sourcing.",
  },

  // Add more products here, following the same shape:
  // {
  //   tag: "Braking System",
  //   name: "Wheel Cylinder",
  //   subtitle: "",
  //   image: "/products/superior-wheel-cylinder.png",
  //   desc: "...",
  // },
];

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const stagger = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const imageVariants = {
  hidden: { opacity: 0, x: -56 },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const textVariants = {
  hidden: { opacity: 0, x: 56 },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
      delay: 0.12,
    },
  },
};

export default function ProductsSuperior() {
  return (
    <>
      <Navbar />

      <div className="bg-white text-[#2563A6] overflow-x-hidden">
        {/* HEADER */}
        <section className="border-b border-[#2563A6]/10">
          <div className="max-w-6xl mx-auto px-5 sm:px-6 lg:px-10 pt-14 pb-10 sm:pt-20 sm:pb-16 lg:pt-24 lg:pb-20">
            <motion.div
              initial="hidden"
              animate="show"
              variants={stagger}
              className="text-center"
            >
              <motion.p
                variants={fadeUp}
                className="text-xs sm:text-base font-semibold tracking-[0.2em] uppercase text-[#2563A6] mb-4 sm:mb-5"
              >
                Genuine Auto Spare Parts
              </motion.p>

              <motion.h1
                variants={fadeUp}
                className="font-bold uppercase leading-[0.95] text-[14vw] xs:text-5xl sm:text-6xl lg:text-7xl tracking-tight text-[#2563A6] break-words"
              >
                Our <span className="text-[#2563A6]">Products</span>
              </motion.h1>

              <motion.p
                variants={fadeUp}
                className="mt-6 sm:mt-7 mx-auto text-base sm:text-lg leading-relaxed text-slate-600 max-w-xl px-2 sm:px-0"
              >
                A selection of the genuine, OEM-quality parts we import and
                distribute nationwide — sourced from reputable manufacturers
                for Toyota, Honda, Suzuki and other popular models.
              </motion.p>
            </motion.div>
          </div>
        </section>

        {/* PRODUCT — centered feature row */}
        <section>
          {products.map((p) => (
            <div
              key={p.name}
              className="border-b border-[#2563A6]/10"
            >
              <div className="max-w-6xl mx-auto px-5 sm:px-6 lg:px-10 py-12 sm:py-20 lg:py-24 flex flex-col lg:flex-row items-center justify-center gap-10 sm:gap-12 lg:gap-20">
                {/* IMAGE */}
                <motion.div
                  className="w-full lg:w-1/2 max-w-md"
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: 0.35 }}
                  variants={imageVariants}
                >
                  <div className="max-w-[85%] xs:max-w-sm mx-auto lg:max-w-none">
                    <div className="relative">
                      <div className="relative aspect-square bg-[#2563A6]/[0.03] border border-[#2563A6]/10 overflow-hidden rounded-2xl">
                        <img
                          src={p.image}
                          alt={p.name}
                          className="w-full h-full object-cover"
                          onError={(e) => {
                            e.currentTarget.style.display = "none";
                            e.currentTarget.nextElementSibling.style.display =
                              "flex";
                          }}
                        />

                        <div className="hidden absolute inset-0 items-center justify-center text-[#2563A6]/25 bg-white">
                          <PackageSearch
                            className="w-10 h-10"
                            strokeWidth={1.5}
                          />
                        </div>
                      </div>

                      {/* OEM-quality stamp */}
                      <div className="absolute -top-3 -left-3 sm:-top-5 sm:-left-5 w-12 h-12 sm:w-16 sm:h-16 lg:w-[4.5rem] lg:h-[4.5rem] rounded-full bg-white border-2 border-dashed border-[#2563A6]/70 flex flex-col items-center justify-center text-center rotate-[-6deg] shadow-[0_2px_10px_rgba(0,0,0,0.08)]">
                        <BadgeCheck
                          className="w-3 h-3 sm:w-4 sm:h-4 text-[#2563A6]"
                          strokeWidth={1.75}
                        />

                        <span className="text-[6px] sm:text-[7px] font-bold uppercase tracking-[0.15em] text-[#2563A6] mt-0.5 leading-none px-0.5">
                          {p.tag}
                        </span>
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* TEXT */}
                <motion.div
                  className="w-full lg:w-1/2 max-w-md text-center lg:text-left px-1 sm:px-0"
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: 0.35 }}
                  variants={textVariants}
                >
                  <p className="text-xs sm:text-sm font-semibold tracking-[0.2em] uppercase text-[#2563A6] mb-3">
                    {p.tag}
                  </p>

                  <h3 className="font-bold uppercase text-2xl sm:text-3xl lg:text-4xl leading-tight mb-1 text-[#2563A6]">
                    {p.name}
                  </h3>

                  {p.subtitle && (
                    <p className="text-xs font-semibold uppercase tracking-wide text-[#2563A6]/50 mb-4">
                      {p.subtitle}
                    </p>
                  )}

                  <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                    {p.desc}
                  </p>
                </motion.div>
              </div>
            </div>
          ))}
        </section>

        {/* CAR BRANDS */}
        <CarBrands />

        {/* CLOSING CTA */}
        <section className="border-b border-[#2563A6]/10">
          <div className="max-w-6xl mx-auto px-5 sm:px-6 lg:px-10 py-14 sm:py-20 text-center">
            <h3 className="font-bold uppercase text-xl sm:text-3xl tracking-tight mb-4 text-[#2563A6]">
              Looking for something else?
            </h3>

            <p className="text-sm sm:text-base text-slate-600 max-w-xl mx-auto mb-8 leading-relaxed px-2 sm:px-0">
              We stock 200+ genuine auto parts beyond what's listed here.
              Reach out on WhatsApp and we'll help you find the exact part
              you need.
            </p>

            <a
              href="https://wa.me/923350099880"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#25D366] text-white font-semibold uppercase tracking-wide text-sm sm:text-base px-6 py-3 sm:px-8 sm:py-4 rounded-full shadow-lg hover:scale-105 hover:shadow-xl transition-all duration-300 text-center"
            >
              <FaWhatsapp size={18} className="shrink-0" />
              <span>For More Products, Contact Here</span>
            </a>
          </div>
        </section>
      </div>

      <Footer />
    </>
  );
}