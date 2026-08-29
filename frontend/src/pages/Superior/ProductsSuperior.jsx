import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  BadgeCheck,
  PackageSearch,
  ShieldCheck,
  Truck,
  Wrench,
  Filter,
  BatteryCharging,
  Cog,
  Users,
  Gauge,
  ArrowRight,
  Sparkles,
} from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

import Navbar from "../../components/Superior/Navbar";
import Footer from "../../components/Superior/Footer";
import CarBrands from "../../components/Superior/CarBrands";

/**
 * SuperiorProducts.jsx — Superior
 * Palette: blue (#2563A6) — primary/trust, headings
 *          amber / copper (#D97706) — accent, energy, CTAs
 *          charcoal / steel gray (#4B5563) — supporting, eyebrows
 *          white / off-white — base
 */

const stats = [
  { value: "20+", label: "Years in the industry" },
  { value: "200+", label: "Genuine parts imported" },
  { value: "03", label: "Major vehicle makes" },
  { value: "PK", label: "Nationwide distribution" },
];

const categories = [
  {
    icon: Cog,
    name: "Engine and Braking parts",
    desc: "Flywheel rings, brake master cylinders and wheel cylinders to power core functions of a vehicle.",
  },
  {
    icon: Gauge,
    name: "Suspension parts",
    desc: "Linker Z, tie rod, ball joint and CV joint for a smoother ride.",
  },
  {
    icon: BatteryCharging,
    name: "Electrical parts",
    desc: "Ignition coil, reverse, ignition and temperature switches supporting car functions.",
  },
  {
    icon: Filter,
    name: "Filters",
    desc: "Fuel filters for a range of cars that protect the engine long-term.",
  },
];

const values = [
  {
    icon: ShieldCheck,
    title: "Genuine, every time",
    desc: "Every part is sourced from reputable manufacturers — no shortcuts, no substitutes.",
  },
  {
    icon: Truck,
    title: "Nationwide reach",
    desc: "A distribution network built over two decades keeps stock moving and on time.",
  },
  {
    icon: Wrench,
    title: "Built for the trade",
    desc: "Stocked and priced for wholesalers, retailers, workshops and professionals.",
  },
  {
    icon: Users,
    title: "Customer-first",
    desc: "Reliability and satisfaction shape every sourcing and delivery decision we make.",
  },
];

const products = [
  {
    tag: "OEM Quality",
    name: "CV Joint",
    subtitle: "Constant Velocity Joint",
    images: [
      "/superior_prod.jpeg",
      "/sp_prod_2.jpg",
      "/sp_prod_3.jpg",
    ],
    desc: "Engineered to OEM specifications, the Superior CV Joint delivers smooth, reliable power transfer from your transmission to the wheels, even under heavy load and constant steering angles. Precision-machined splines and a durable tripod bearing assembly ensure consistent performance, reduced vibration, and a longer service life than generic aftermarket parts. Every unit undergoes strict quality checks before packaging, so workshops can install with confidence and drivers get a noise-free, shudder-free ride backed by 20+ years of trusted sourcing.",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const imageVariants = {
  hidden: { opacity: 0, x: -56 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

const textVariants = {
  hidden: { opacity: 0, x: 56 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.12 },
  },
};

/** Main image + clickable thumbnail strip, with the OEM stamp on the active image. */
function ProductGallery({ images, name, tag }) {
  const [active, setActive] = useState(0);

  return (
    <div className="max-w-[85%] xs:max-w-sm mx-auto lg:max-w-none">
      <div className="relative">
        <div className="relative aspect-square bg-gradient-to-br from-[#2563A6]/[0.06] to-[#D97706]/[0.04] border border-[#2563A6]/10 overflow-hidden rounded-3xl shadow-[0_20px_50px_-15px_rgba(37,99,166,0.25)]">
          <img
            src={images[active]}
            alt={`${name} — view ${active + 1}`}
            className="w-full h-full object-cover"
            onError={(e) => {
              e.currentTarget.style.display = "none";
              e.currentTarget.nextElementSibling.style.display = "flex";
            }}
          />
          <div className="hidden absolute inset-0 items-center justify-center text-[#2563A6]/25 bg-white">
            <PackageSearch className="w-10 h-10" strokeWidth={1.5} />
          </div>

          {/* subtle corner glow */}
          <div className="pointer-events-none absolute -top-10 -right-10 w-40 h-40 rounded-full bg-[#D97706]/10 blur-3xl" />
        </div>

        {/* OEM-quality stamp */}
        <div className="absolute -top-4 -left-4 sm:-top-6 sm:-left-6 w-14 h-14 sm:w-[4.5rem] sm:h-[4.5rem] lg:w-20 lg:h-20 rounded-full bg-white border-2 border-dashed border-[#D97706]/70 flex flex-col items-center justify-center text-center rotate-[-6deg] shadow-[0_8px_20px_rgba(217,119,6,0.2)]">
          <BadgeCheck className="w-3.5 h-3.5 sm:w-5 sm:h-5 text-[#2563A6]" strokeWidth={1.75} />
          <span className="text-[6px] sm:text-[7.5px] font-bold uppercase tracking-[0.15em] text-[#2563A6] mt-0.5 leading-none px-0.5">
            {tag}
          </span>
        </div>
      </div>

      {/* Thumbnails */}
      {images.length > 1 && (
        <div className="flex items-center justify-center lg:justify-start gap-3 mt-5">
          {images.map((img, i) => (
            <button
              key={img + i}
              type="button"
              onClick={() => setActive(i)}
              aria-label={`Show ${name} image ${i + 1}`}
              aria-current={active === i}
              className={`relative w-14 h-14 sm:w-16 sm:h-16 rounded-xl overflow-hidden border-2 transition-all duration-300 ${
                active === i
                  ? "border-[#D97706] shadow-[0_4px_14px_rgba(217,119,6,0.35)] scale-105"
                  : "border-[#2563A6]/15 hover:border-[#2563A6]/40"
              }`}
            >
              <img
                src={img}
                alt=""
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.currentTarget.style.display = "none";
                }}
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

export default function SuperiorProducts() {
  return (
    <>
      <Navbar />

      <div className="bg-white text-slate-700 overflow-x-hidden">
        {/* HERO */}
        <section className="relative border-b border-[#2563A6]/10 overflow-hidden">
          {/* decorative background elements */}
          <div className="pointer-events-none absolute inset-0 -z-10">
            <div className="absolute top-0 right-0 w-[36rem] h-[36rem] bg-gradient-to-bl from-[#2563A6]/[0.07] via-[#2563A6]/[0.02] to-transparent rounded-full blur-3xl translate-x-1/3 -translate-y-1/3" />
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#D97706]/[0.06] rounded-full blur-3xl -translate-x-1/3 translate-y-1/3" />
            <svg
              className="absolute inset-0 w-full h-full opacity-[0.035]"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <pattern
                  id="grid"
                  width="42"
                  height="42"
                  patternUnits="userSpaceOnUse"
                >
                  <path
                    d="M 42 0 L 0 0 0 42"
                    fill="none"
                    stroke="#2563A6"
                    strokeWidth="1"
                  />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#grid)" />
            </svg>
          </div>

          <div className="max-w-6xl mx-auto px-5 sm:px-6 lg:px-10 pt-16 pb-12 sm:pt-20 sm:pb-16 lg:pt-28 lg:pb-20 grid lg:grid-cols-[1.3fr_0.7fr] gap-14 items-center">
            <motion.div initial="hidden" animate="show" variants={stagger}>
              <motion.div
                variants={fadeUp}
                className="inline-flex items-center gap-2 bg-[#2563A6]/[0.06] border border-[#2563A6]/15 rounded-full px-4 py-1.5 mb-6"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-[#D97706] animate-pulse" />
                <p className="text-[11px] sm:text-sm font-semibold tracking-[0.2em] uppercase text-[#4B5563]">
                  Karachi, Pakistan — Auto Parts Import &amp; Distribution
                </p>
              </motion.div>

              <motion.h1
                variants={fadeUp}
                className="font-bold uppercase leading-[0.95] text-[13vw] sm:text-6xl lg:text-7xl tracking-tight text-[#2563A6]"
              >
                Pakistan's
                <br />
                workshops{" "}
                <span className="relative inline-block">
                  <span className="relative z-10 text-[#D97706]">trust</span>
                  <svg
                    className="absolute -bottom-1 sm:-bottom-2 left-0 w-full"
                    height="12"
                    viewBox="0 0 200 12"
                    preserveAspectRatio="none"
                  >
                    <path
                      d="M2 9C40 3 120 3 198 9"
                      stroke="#D97706"
                      strokeWidth="4"
                      strokeLinecap="round"
                      fill="none"
                      opacity="0.35"
                    />
                  </svg>
                </span>
                .
              </motion.h1>

              <motion.p
                variants={fadeUp}
                className="mt-7 text-lg leading-relaxed text-slate-600 max-w-xl"
              >
                For over 20 years, Superior has imported and distributed
                premium-quality auto spare parts for Toyota, Honda, Suzuki and
                other popular models — backed by a nationwide network built to
                get the right part to the right hands, on time.
              </motion.p>

              <motion.div variants={fadeUp} className="mt-8 flex flex-wrap gap-4">
                
                <a
                  href="https://wa.me/923350099880"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-white text-[#2563A6] font-semibold uppercase tracking-wide text-sm px-6 py-3.5 rounded-full border-2 border-[#2563A6]/20 hover:border-[#D97706]/50 hover:text-[#D97706] transition-all duration-300"
                >
                  <FaWhatsapp size={16} />
                  Chat With Us
                </a>
              </motion.div>
            </motion.div>

            {/* Signature stamp */}
            <motion.div
              className="flex justify-center lg:justify-end"
              initial={{ opacity: 0, scale: 0.85, rotate: 8 }}
              animate={{ opacity: 1, scale: 1, rotate: -6 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
            >
              <motion.div
                className="relative w-44 h-44 sm:w-56 sm:h-56 shrink-0"
                animate={{ rotate: [-6, -3, -6] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              >
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#2563A6]/[0.04] to-[#D97706]/[0.06]" />
                <div className="absolute inset-0 rounded-full border-[3px] border-dashed border-[#D97706]/50" />
                <div className="absolute inset-3 rounded-full border border-[#2563A6]/40" />
                <div className="absolute inset-6 rounded-full bg-white shadow-inner" />

                <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
                  <BadgeCheck className="w-7 h-7 sm:w-8 sm:h-8 text-[#2563A6] mb-1.5" strokeWidth={1.75} />
                  <span className="font-bold uppercase text-[13px] sm:text-sm tracking-wide leading-tight text-[#2563A6]">
                    OEM Quality
                    <br />
                    Products
                  </span>
                  <span className="text-[9px] font-semibold tracking-[0.25em] uppercase text-[#D97706] mt-1.5">
                    Superior · Est.
                  </span>
                </div>
              </motion.div>
            </motion.div>
          </div>

          {/* Stats strip */}
          <div className="border-t border-[#2563A6]/10 bg-gradient-to-r from-[#1E4E8C] via-[#2563A6] to-[#1E4E8C] text-white relative overflow-hidden">
            <div className="absolute inset-0 opacity-20">
              <div className="absolute top-0 left-1/4 w-64 h-64 bg-[#D97706]/30 rounded-full blur-3xl" />
            </div>
            <motion.div
              className="relative max-w-6xl mx-auto px-6 lg:px-10 grid grid-cols-2 sm:grid-cols-4 divide-x divide-white/15"
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.4 }}
              variants={stagger}
            >
              {stats.map((s) => (
                <motion.div key={s.label} variants={fadeUp} className="py-7 px-4 sm:px-6 text-center sm:text-left">
                  <div className="text-2xl sm:text-3xl font-bold text-white flex items-baseline gap-1 justify-center sm:justify-start">
                    {s.value}
                    <span className="w-1.5 h-1.5 rounded-full bg-[#D97706] mb-1" />
                  </div>
                  <div className="text-xs sm:text-sm text-white/70 mt-1 leading-snug">
                    {s.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* STORY */}
        <section className="max-w-6xl mx-auto px-5 sm:px-6 lg:px-10 py-12 sm:py-16 lg:py-24 grid lg:grid-cols-[0.9fr_1.1fr] gap-12 lg:gap-20">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.4 }}
            variants={fadeUp}
          >
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="w-8 h-[2px] bg-[#D97706]" />
              <p className="text-sm sm:text-base font-semibold tracking-[0.2em] uppercase text-[#4B5563]">
                Our Story
              </p>
            </div>
            <h2 className="font-bold uppercase text-3xl sm:text-4xl leading-tight text-[#2563A6]">
              Two decades of
              <br />
              keeping vehicles running.
            </h2>
          </motion.div>

          <motion.div
            className="space-y-5 text-slate-600 leading-relaxed"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            variants={stagger}
          >
            <motion.p variants={fadeUp}>
              Based in Karachi, Superior has earned its reputation the slow
              way — one reliable shipment, one satisfied workshop, one repeat
              order at a time. We specialize in importing more than 200
              genuine and high-quality replacement parts for a wide range of
              Toyota, Honda, Suzuki and other popular vehicle models sold
              across Pakistan.
            </motion.p>

            <motion.p variants={fadeUp}>
              Our portfolio is built for the people who keep the country
              moving: wholesalers, retailers, workshops and automotive
              professionals who need parts they can install with confidence.
              Every product is sourced from reputable manufacturers, so
              performance and durability aren't a gamble.
            </motion.p>

            <motion.p variants={fadeUp}>
              A nationwide distribution network, refined over 20+ years,
              means consistent availability and timely delivery — whether
              you're restocking a retail counter in Lahore or fixing a fleet
              vehicle in Quetta.
            </motion.p>
          </motion.div>
        </section>

        {/* CATEGORIES */}
        <section className="bg-gradient-to-b from-[#2563A6]/[0.025] to-white border-y border-[#2563A6]/10">
          <div className="max-w-6xl mx-auto px-5 sm:px-6 lg:px-10 py-12 sm:py-16 lg:py-24">
            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.4 }}
              variants={fadeUp}
            >
              <div className="inline-flex items-center gap-2 mb-4">
                <span className="w-8 h-[2px] bg-[#D97706]" />
                <p className="text-sm sm:text-base font-semibold tracking-[0.2em] uppercase text-[#4B5563]">
                  What We Supply
                </p>
              </div>
              <h2 className="font-bold uppercase text-3xl sm:text-4xl mb-10 max-w-xl leading-tight text-[#2563A6]">
                Essential parts, across the whole vehicle.
              </h2>
            </motion.div>

            <motion.div
              className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5"
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              variants={stagger}
            >
              {categories.map((c, i) => (
                <motion.div
                  key={c.name}
                  variants={fadeUp}
                  whileHover={{ y: -6 }}
                  transition={{ duration: 0.25 }}
                  className="group relative bg-white rounded-2xl p-6 flex flex-col gap-4 border border-[#2563A6]/10 shadow-[0_2px_10px_rgba(37,99,166,0.04)] hover:shadow-[0_16px_36px_-10px_rgba(37,99,166,0.25)] hover:border-[#D97706]/30 transition-all duration-300 overflow-hidden"
                >
                  <div className="absolute top-0 right-0 w-20 h-20 bg-[#D97706]/0 group-hover:bg-[#D97706]/[0.06] rounded-full blur-2xl transition-all duration-500" />
                  <div className="relative w-12 h-12 rounded-xl bg-[#2563A6]/[0.08] group-hover:bg-[#2563A6] flex items-center justify-center transition-colors duration-300">
                    <c.icon
                      className="w-6 h-6 text-[#2563A6] group-hover:text-white transition-colors duration-300"
                      strokeWidth={1.75}
                    />
                  </div>
                  <div className="relative">
                    <h3 className="font-bold uppercase text-base tracking-wide text-[#2563A6]">
                      {c.name}
                    </h3>
                    <p className="text-sm text-slate-600 mt-2 leading-relaxed">
                      {c.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* VALUES */}
        <section className="max-w-6xl mx-auto px-5 sm:px-6 lg:px-10 py-12 sm:py-16 lg:py-24">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.4 }}
            variants={fadeUp}
          >
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="w-8 h-[2px] bg-[#D97706]" />
              <p className="text-sm sm:text-base font-semibold tracking-[0.2em] uppercase text-[#4B5563]">
                Why Superior
              </p>
            </div>
            <h2 className="font-bold uppercase text-3xl sm:text-4xl mb-10 max-w-xl leading-tight text-[#2563A6]">
              Quality, reliability, satisfaction.
            </h2>
          </motion.div>

          <motion.div
            className="grid sm:grid-cols-2 gap-5"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            variants={stagger}
          >
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                variants={fadeUp}
                whileHover={{ y: -4 }}
                transition={{ duration: 0.25 }}
                className="group flex gap-5 p-6 rounded-2xl border border-[#2563A6]/10 bg-white hover:border-[#D97706]/30 hover:shadow-[0_16px_36px_-10px_rgba(37,99,166,0.2)] transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0 bg-[#2563A6]/[0.08] group-hover:bg-[#D97706] transition-colors duration-300">
                  <v.icon
                    className="w-5 h-5 text-[#2563A6] group-hover:text-white transition-colors duration-300"
                    strokeWidth={1.75}
                  />
                </div>
                <div>
                  <h3 className="font-bold uppercase text-base tracking-wide text-[#2563A6]">
                    {v.title}
                  </h3>
                  <p className="text-sm text-slate-600 mt-2 leading-relaxed">
                    {v.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* PRODUCTS INTRO */}
        <section
          id="products"
          className="relative bg-gradient-to-b from-[#2563A6]/[0.04] via-[#2563A6]/[0.02] to-transparent border-y border-[#2563A6]/10 overflow-hidden"
        >
          <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40rem] h-[40rem] bg-[#D97706]/[0.03] rounded-full blur-3xl" />
          <div className="max-w-6xl mx-auto px-5 sm:px-6 lg:px-10 pt-14 pb-10 sm:pt-20 sm:pb-14 lg:pt-24 lg:pb-16 relative">
            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.4 }}
              variants={stagger}
              className="text-center"
            >
              <motion.div
                variants={fadeUp}
                className="inline-flex items-center gap-2 bg-white border border-[#D97706]/25 rounded-full px-4 py-1.5 mb-4 sm:mb-5 shadow-sm"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-[#D97706]" />
                <p className="text-[11px] sm:text-base font-semibold tracking-[0.2em] uppercase text-[#4B5563]">
                  Genuine Auto Spare Parts
                </p>
              </motion.div>

              <motion.h2
                variants={fadeUp}
                className="font-bold uppercase leading-[0.95] text-[11vw] xs:text-4xl sm:text-5xl lg:text-6xl tracking-tight text-[#2563A6] break-words"
              >
                Our <span className="text-[#D97706]">Products</span>
              </motion.h2>

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
            <div key={p.name} className="border-b border-[#2563A6]/10 relative overflow-hidden">
              <div className="pointer-events-none absolute top-0 right-0 w-96 h-96 bg-[#2563A6]/[0.03] rounded-full blur-3xl translate-x-1/3 -translate-y-1/3" />
              <div className="max-w-6xl mx-auto px-5 sm:px-6 lg:px-10 py-12 sm:py-20 lg:py-24 flex flex-col lg:flex-row items-center justify-center gap-10 sm:gap-12 lg:gap-20 relative">
                {/* IMAGE GALLERY */}
                <motion.div
                  className="w-full lg:w-1/2 max-w-md"
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: 0.35 }}
                  variants={imageVariants}
                >
                  <ProductGallery images={p.images} name={p.name} tag={p.tag} />
                </motion.div>

                {/* TEXT */}
                <motion.div
                  className="w-full lg:w-1/2 max-w-md text-center lg:text-left px-1 sm:px-0"
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: 0.35 }}
                  variants={textVariants}
                >
                  <div className="inline-flex items-center gap-1.5 bg-[#D97706]/10 text-[#D97706] rounded-full px-3 py-1 mb-4">
                    <BadgeCheck className="w-3.5 h-3.5" />
                    <p className="text-xs font-semibold tracking-[0.15em] uppercase">
                      {p.tag}
                    </p>
                  </div>
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

                  <a
                    href="https://wa.me/923350099880"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 inline-flex items-center gap-2 bg-[#2563A6] text-white font-semibold uppercase tracking-wide text-xs sm:text-sm px-5 py-3 rounded-full shadow-[0_10px_26px_-8px_rgba(37,99,166,0.5)] hover:bg-[#D97706] hover:shadow-[0_10px_26px_-8px_rgba(217,119,6,0.5)] transition-all duration-300"
                  >
                    Enquire About This Part
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </motion.div>
              </div>
            </div>
          ))}
        </section>

        {/* CAR BRANDS */}
        <CarBrands />

        {/* CLOSING CTA */}
        <section className="relative border-b border-[#2563A6]/10 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-[#1E4E8C] via-[#2563A6] to-[#1E4E8C]" />
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute top-0 left-1/3 w-72 h-72 bg-[#D97706]/20 rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-white/[0.04] rounded-full blur-3xl" />
            <svg className="absolute inset-0 w-full h-full opacity-[0.06]" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="grid2" width="42" height="42" patternUnits="userSpaceOnUse">
                  <path d="M 42 0 L 0 0 0 42" fill="none" stroke="white" strokeWidth="1" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#grid2)" />
            </svg>
          </div>

          <div className="max-w-6xl mx-auto px-5 sm:px-6 lg:px-10 py-14 sm:py-20 text-center relative">
            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.4 }}
              variants={stagger}
            >
              <motion.div
                variants={fadeUp}
                className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-1.5 mb-5"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-[#D97706]" />
                <p className="text-[11px] sm:text-sm font-semibold tracking-[0.2em] uppercase text-white/80">
                  200+ Parts In Stock
                </p>
              </motion.div>

              <motion.h3
                variants={fadeUp}
                className="font-bold uppercase text-2xl sm:text-3xl lg:text-4xl tracking-tight mb-4 text-white"
              >
                Looking for something else?
              </motion.h3>
              <motion.p
                variants={fadeUp}
                className="text-sm sm:text-base text-white/75 max-w-xl mx-auto mb-8 leading-relaxed px-2 sm:px-0"
              >
                We stock 200+ genuine auto parts beyond what's listed here.
                Reach out on WhatsApp and we'll help you find the exact part
                you need.
              </motion.p>
              <motion.a
              
                variants={fadeUp}
                href="https://wa.me/923350099880"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  inline-flex
                  w-full sm:w-auto
                  max-w-full
                  items-center
                  justify-center
                  gap-2
                  bg-[#D97706]
                  text-white
                  font-semibold
                  uppercase
                  tracking-wide
                  text-xs sm:text-sm md:text-base
                  px-6 sm:px-9
                  py-3.5 sm:py-4
                  rounded-full
                  shadow-[0_14px_34px_-8px_rgba(217,119,6,0.6)]
                  hover:bg-[#B8630A]
                  hover:scale-105
                  hover:shadow-[0_18px_40px_-8px_rgba(217,119,6,0.7)]
                  transition-all
                  duration-300
                  text-center
                  leading-tight
                  whitespace-normal
                "
              >
                <FaWhatsapp size={18} className="shrink-0" />
                <span>For More Products, Contact Here</span>
              </motion.a>
            </motion.div>
          </div>
        </section>
      </div>

      <Footer />
    </>
  );
}