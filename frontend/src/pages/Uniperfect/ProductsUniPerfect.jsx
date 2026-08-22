import React from "react";
import { motion } from "framer-motion";
import { BadgeCheck, PackageSearch } from "lucide-react";
import Navbar from "../../components/UniPerfect/Navbar";
import Footer from "../../components/UniPerfect/Footer";
import { FaWhatsapp } from "react-icons/fa";
/**
 * ProductsUniPerfect.jsx — Uni Perfect
 * Palette: red (#C8102E) + ink (#181513) on warm white (#F8F5F0)
 *
 * Layout: an alternating "zigzag" catalog — image and description swap
 * sides on every row, each sliding in from the side it lives on.
 * Signature element: the same rotated, dashed "genuine parts" stamp from
 * About.jsx, reused here as a small "Genuine" tag pinned to each photo —
 * so the two pages read as one identity, not two different templates.
*
 * Add/replace products in the array below — everything else (motion,
 * alternating sides, alternating tint) is handled automatically by index.
*/

const products = [
  {
    tag: "Braking System",
    name: "Brake Master Cylinder (BMC)",
    image: "/BMC_new.png",
    desc: "A hydraulic brake component that converts brake-pedal pressure into hydraulic pressure, sending brake fluid to the wheel brakes for smooth and effective braking. Available in a range of Toyota and Suzuki models sourced from reputable manufacturers.",
  },
  {
    tag: "Braking System",
    name: "Wheel Cylinder",
    image: "/wheel cylinder gemini.png",
    desc: "High-quality wheel cylinder made from durable materials for reliable braking performance. Designed for smooth brake operation, excellent sealing, and long service life with a precise fit.",
  },
  {
    tag: "Electric Parts",
    name: "Ignition Coil",
    image: "/coil gemini.png",
    desc: "High-quality ignition coil designed to deliver strong,reliable spark performance for smooth engine starting, better combustion, and consistent vehicle performance.",
  },
  {
    tag: "Transmission System",
    name: "Universal Joint",
    image: "/cross gemini.png",
    desc: "Connects the propeller/drive shaft to the differential or transmission and allows the shaft to transfer power while accommodating changes in angle. Available in a range of car models, packed in our original brand packaging.",
  },
  {
    tag: "Engine Part",
    name: "Flywheel Ring",
    image: "/Flywheel ring gemini.png",
    desc: "Reliable switching for lighting, fuel and cooling circuits. Tested to handle real-world electrical load without failure. Compatible with major Honda and Suzuki wiring layouts. The small part that keeps everything else running.",
  },
  {
    tag: "Cooling System",
    name: "Radiator Cap",
    image: "/radiator_new.png",
    desc: "Designed to maintain proper cooling-system pressure and prevent coolant leakage. Made from durable, heat-resistant materials for reliable performance and long service life.",
  },
  {
    tag: "Cooling System",
    name: "Water Pump",
    image: "/wp.png",
    desc: "High-quality water pump designed for efficient coolant circulation, long-lasting performance, and protection against engine overheating. Available in a range of Toyota and Suzuki models.",
  },
  {
    tag: "Fuel Filter",
    name: "Car Fuel Filter",
    image: "/Fuel filter.jpg",
    desc: "Designed to effectively remove dirt,rust, and other contaminants from the fuel system, ensuring clean fuel flow and protecting the engine. Durable, reliable, and suitable for smooth efficient engine performance.",
  }
];

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

// Image slides in from the side it sits on; text slides in from the
// opposite side — the motion itself traces the zigzag.
const imageVariants = (reversed) => ({
  hidden: { opacity: 0, x: reversed ? 56 : -56 },
  show: { opacity: 1, x: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
});

const textVariants = (reversed) => ({
  hidden: { opacity: 0, x: reversed ? -56 : 56 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.12 },
  },
});

export default function ProductsUniPerfect() {
  return (
    <>
      <Navbar />
      <div className="bg-[#F8F5F0] text-[#181513]">
        {/* HEADER */}
        <section className="border-b border-black/10">
  <div className="max-w-6xl mx-auto px-5 sm:px-6 lg:px-10 pt-16 pb-12 sm:pt-20 sm:pb-16 lg:pt-24 lg:pb-20">
    <motion.div
      initial="hidden"
      animate="show"
      variants={stagger}
      className="text-center"
    >
      <motion.p
        variants={fadeUp}
        className="text-sm sm:text-base font-semibold tracking-[0.2em] uppercase text-[#C8102E] mb-5"
      >
        Genuine Auto Spare Parts
      </motion.p>

      <motion.h1
        variants={fadeUp}
        className="font-bold uppercase leading-[0.95] text-[13vw] sm:text-6xl lg:text-7xl tracking-tight"
      >
        Our <span className="text-[#C8102E]">Products</span>
      </motion.h1>

      <motion.p
        variants={fadeUp}
        className="mt-7 mx-auto text-lg leading-relaxed text-[#181513]/80 max-w-xl"
      >
        A selection of the genuine, OEM-quality parts we import and
        distribute nationwide — sourced from reputable manufacturers
        for Toyota, Honda, Suzuki and other popular models.
      </motion.p>
    </motion.div>
  </div>
</section>

        {/* PRODUCT ROWS — zigzag */}
        <section>
          {products.map((p, i) => {
            const reversed = i % 2 === 1;
            return (
              <div
                key={p.name}
                className={`border-b border-black/10 ${reversed ? "bg-white" : ""}`}
              >
                <div
                  className={`max-w-6xl mx-auto px-5 sm:px-6 lg:px-10 py-16 sm:py-20 lg:py-24 flex flex-col ${
                    reversed ? "lg:flex-row-reverse" : "lg:flex-row"
                  } items-center gap-10 lg:gap-20`}
                >
                  {/* IMAGE */}
                  <motion.div
                    className="w-full lg:w-1/2"
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.35 }}
                    variants={imageVariants(reversed)}
                  >
                    <div className="max-w-sm mx-auto lg:max-w-none">
                      <motion.div
                        className="relative"
                        
                        
                      >
                        <div className="relative aspect-square bg-white border border-black/10 overflow-hidden">
                          <img
                            src={p.image}
                            alt={p.name}
                            className="w-full h-full object-cover"
                            onError={(e) => {
                              e.currentTarget.style.display = "none";
                              e.currentTarget.nextElementSibling.style.display = "flex";
                            }}
                          />
                          <div className="hidden absolute inset-0 items-center justify-center text-[#181513]/25 bg-[#F8F5F0]">
                            <PackageSearch className="w-10 h-10" strokeWidth={1.5} />
                          </div>
                        </div>

                        {/* Genuine-parts stamp — echoes the About page's signature mark */}
                        <div
                          className={`absolute -top-5 ${
                            reversed ? "-right-5" : "-left-5"
                          } w-16 h-16 sm:w-[4.5rem] sm:h-[4.5rem] rounded-full bg-[#F8F5F0] border-2 border-dashed border-[#C8102E]/70 flex flex-col items-center justify-center text-center rotate-[-6deg] shadow-[0_2px_10px_rgba(0,0,0,0.08)]`}
                        >
                          <BadgeCheck className="w-4 h-4 text-[#C8102E]" strokeWidth={1.75} />
                          <span className="text-[7px] font-bold uppercase tracking-[0.15em] text-[#C8102E] mt-0.5 leading-none">
                            Genuine
                          </span>
                        </div>
                      </motion.div>
                    </div>
                  </motion.div>

                  {/* TEXT */}
                  <motion.div
                    className="w-full lg:w-1/2"
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.35 }}
                    variants={textVariants(reversed)}
                  >
                    <p className="text-sm font-semibold tracking-[0.2em] uppercase text-[#C8102E] mb-3">
                      {p.tag}
                    </p>
                    <h3 className="font-bold uppercase text-3xl sm:text-4xl leading-tight mb-2">
                      {p.name}
                    </h3>
                    
                    <p className="text-[#181513]/70 leading-relaxed max-w-md">
                      {p.desc}
                    </p>
                  </motion.div>
                </div>
              </div>
            );
          })}
        </section>
        <section className="border-b border-black/10">
  <div className="max-w-6xl mx-auto px-5 sm:px-6 lg:px-10 py-16 sm:py-20 text-center">
    <h3 className="font-bold uppercase text-2xl sm:text-3xl tracking-tight mb-4">
      Looking for something else?
    </h3>
    <p className="text-[#181513]/70 max-w-xl mx-auto mb-8 leading-relaxed">
      We stock 200+ genuine auto parts beyond what's listed here.
      Reach out on WhatsApp and we'll help you find the exact part you need.
    </p>
    <a
      href="https://wa.me/923350099880"
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-2 bg-[#25D366] text-white font-semibold uppercase tracking-wide px-8 py-4 rounded-full shadow-lg hover:scale-105 hover:shadow-xl transition-all duration-300"
    >
      <FaWhatsapp size={20} />
      For More Products, Contact Here
    </a>
  </div>
</section>
      </div>
      <Footer />
    </>
  );
}