import React from "react";
import { motion } from "framer-motion";
import {
  ShieldCheck,
  Truck,
  Wrench,
  Filter,
  BatteryCharging,
  Cog,
  Users,
  BadgeCheck,
  Gauge,
} from "lucide-react";

/**
 * About.jsx — Uni Perfect
 * Palette: red (#C8102E) + ink (#181513) on warm white (#F8F5F0)
 * Signature element: rotated "genuine parts" certification stamp,
 * echoing the customs/inspection stamps that matter in an import business
 * built on trust against counterfeit parts.
 */

const stats = [
  { value: "20+", label: "Years in the industry" },
  { value: "200+", label: "Genuine parts imported" },
  { value: "03", label: "Major vehicle makes" },
  { value: "PK", label: "Nationwide distribution" },
];

const categories = [
  { icon: Cog, name: "Engine components", desc: "Gaskets, belts, pistons and core internals built to spec." },
  { icon: Gauge, name: "Suspension parts", desc: "Bushings, shocks and links for a smoother, safer ride." },
  { icon: BatteryCharging, name: "Electrical parts", desc: "Sensors, relays and wiring components that just work." },
  { icon: Filter, name: "Filters", desc: "Oil, air and fuel filters that protect the engine long-term." },
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

// Shared scroll-reveal variants
const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

export default function About() {
  return (
    <div className="bg-[#F8F5F0] text-[#181513] overflow-hidden">
      {/* HERO */}
      <section className="relative border-b border-black/10">
        <div className="max-w-6xl mx-auto px-5 sm:px-6 lg:px-10 pt-16 pb-12 sm:pt-20 sm:pb-16 lg:pt-28 lg:pb-20 grid lg:grid-cols-[1.3fr_0.7fr] gap-14 items-center">
          <motion.div initial="hidden" animate="show" variants={stagger}>
            <motion.p
              variants={fadeUp}
              className="text-sm sm:text-base font-semibold tracking-[0.2em] uppercase text-[#C8102E] mb-5"
            >
              Karachi, Pakistan — Auto Parts Import &amp; Distribution
            </motion.p>
            <motion.h1
              variants={fadeUp}
              className="font-bold uppercase leading-[0.95] text-[13vw] sm:text-6xl lg:text-7xl tracking-tight"
            >
              Pakistan's
              
              workshops <span className="text-[#C8102E]">trust</span>.
            </motion.h1>
            <motion.p
              variants={fadeUp}
              className="mt-7 text-lg leading-relaxed text-[#181513]/80 max-w-xl"
            >
              For over 20 years, Uni Perfect has imported and distributed
              premium-quality auto spare parts for Toyota, Honda, Suzuki and
              other popular models — backed by a nationwide network built to
              get the right part to the right hands, on time.
            </motion.p>
          </motion.div>

          {/* Signature stamp element */}
          <motion.div
            className="flex justify-center lg:justify-end"
            initial={{ opacity: 0, scale: 0.85, rotate: 8 }}
            animate={{ opacity: 1, scale: 1, rotate: -6 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
          >
            <motion.div
              className="relative w-44 h-44 sm:w-52 sm:h-52 shrink-0"
              animate={{ rotate: [-6, -3, -6] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            >
              <div className="absolute inset-0 rounded-full border-[3px] border-dashed border-[#C8102E]/70" />
              <div className="absolute inset-3 rounded-full border border-[#C8102E]/40" />
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
                <BadgeCheck className="w-7 h-7 text-[#C8102E] mb-1" strokeWidth={1.75} />
                <span className="font-bold uppercase text-[13px] tracking-wide leading-tight text-[#C8102E]">
                  Genuine
                  <br />
                  Parts
                </span>
                <span className="text-[9px] font-semibold tracking-[0.2em] uppercase text-[#181513]/60 mt-1">
                  Uni Perfect · Est.
                </span>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Stats strip */}
        <div className="border-t border-black/10 bg-[#181513] text-[#F8F5F0]">
          <motion.div
            className="max-w-6xl mx-auto px-6 lg:px-10 grid grid-cols-2 sm:grid-cols-4 divide-x divide-white/15"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.4 }}
            variants={stagger}
          >
            {stats.map((s) => (
              <motion.div key={s.label} variants={fadeUp} className="py-6 px-4 sm:px-6">
                <div className="text-2xl sm:text-3xl font-bold text-[#C8102E]">
                  {s.value}
                </div>
                <div className="text-xs sm:text-sm text-[#F8F5F0]/70 mt-1 leading-snug">
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
          <p className="text-sm sm:text-base font-semibold tracking-[0.2em] uppercase text-[#C8102E] mb-3">
            Our Story
          </p>
          <h2 className="font-bold uppercase text-3xl sm:text-4xl leading-tight">
            Two decades of
            <br />
            keeping vehicles running.
          </h2>
        </motion.div>
        <motion.div
          className="space-y-5 text-[#181513]/80 leading-relaxed"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          variants={stagger}
        >
          <motion.p variants={fadeUp}>
            Based in Karachi, Uni Perfect has earned its reputation the slow
            way — one reliable shipment, one satisfied workshop, one repeat
            order at a time. We specialize in importing more than 200 genuine
            and high-quality replacement parts for a wide range of Toyota,
            Honda, Suzuki and other popular vehicle models sold across
            Pakistan.
          </motion.p>
          <motion.p variants={fadeUp}>
            Our portfolio is built for the people who keep the country
            moving: wholesalers, retailers, workshops and automotive
            professionals who need parts they can install with confidence.
            Every product is sourced from reputable manufacturers, so
            performance and durability aren't a gamble.
          </motion.p>
          <motion.p variants={fadeUp}>
            A nationwide distribution network, refined over 20+ years, means
            consistent availability and timely delivery — whether you're
            restocking a retail counter in Lahore or fixing a fleet vehicle
            in Quetta.
          </motion.p>
        </motion.div>
      </section>

      {/* CATEGORIES */}
      <section className="bg-white border-y border-black/10">
        <div className="max-w-6xl mx-auto px-5 sm:px-6 lg:px-10 py-12 sm:py-16 lg:py-24">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.4 }}
            variants={fadeUp}
          >
            <p className="text-sm sm:text-base font-semibold tracking-[0.2em] uppercase text-[#C8102E] mb-3">
              What We Supply
            </p>
            <h2 className="font-bold uppercase text-3xl sm:text-4xl mb-10 max-w-xl leading-tight">
              Essential parts, across the whole vehicle.
            </h2>
          </motion.div>
          <motion.div
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-black/10 border border-black/10"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            variants={stagger}
          >
            {categories.map((c) => (
              <motion.div
                key={c.name}
                variants={fadeUp}
                whileHover={{ y: -4 }}
                transition={{ duration: 0.25 }}
                className="bg-white p-6 flex flex-col gap-4"
              >
                <c.icon className="w-6 h-6 text-[#C8102E]" strokeWidth={1.75} />
                <div>
                  <h3 className="font-bold uppercase text-base tracking-wide">
                    {c.name}
                  </h3>
                  <p className="text-sm text-[#181513]/65 mt-2 leading-relaxed">
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
          <p className="text-sm sm:text-base font-semibold tracking-[0.2em] uppercase text-[#C8102E] mb-3">
            Why Uni Perfect
          </p>
          <h2 className="font-bold uppercase text-3xl sm:text-4xl mb-10 max-w-xl leading-tight">
            Quality, reliability, satisfaction.
          </h2>
        </motion.div>
        <motion.div
          className="grid sm:grid-cols-2 gap-6"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={stagger}
        >
          {values.map((v) => (
            <motion.div
              key={v.title}
              variants={fadeUp}
              whileHover={{ y: -4, borderColor: "rgba(200,16,46,0.4)" }}
              transition={{ duration: 0.25 }}
              className="flex gap-5 p-6 border border-black/10 bg-white"
            >
              <div className="w-11 h-11 rounded-full bg-[#C8102E]/10 flex items-center justify-center shrink-0">
                <v.icon className="w-5 h-5 text-[#C8102E]" strokeWidth={1.75} />
              </div>
              <div>
                <h3 className="font-bold uppercase text-base tracking-wide">
                  {v.title}
                </h3>
                <p className="text-sm text-[#181513]/65 mt-2 leading-relaxed">
                  {v.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>
    </div>
  );
}