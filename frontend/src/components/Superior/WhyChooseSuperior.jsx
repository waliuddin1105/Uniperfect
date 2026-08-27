import React from "react";

import { motion } from "framer-motion";

/**
 * WhyChooseSuperior.jsx
 * Palette: blue (#2563A6) + white
 */

const stats = [
  {
    value: "20+",
    label: "Years",
    desc: "Two decades importing and distributing genuine parts you can install with confidence.",
  },
  {
    value: "200+",
    label: "Parts Imported",
    desc: "Sourced from reputable manufacturers — no shortcuts, no substitutes, ever.",
  },
  {
    value: "PK",
    label: "Nationwide",
    desc: "A distribution network built over 20+ years keeps stock moving and on time.",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
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
      staggerChildren: 0.12,
    },
  },
};

export default function WhyChooseSuperior() {
  return (
    <section className="bg-[#F4F8FC]">
      <div className="max-w-6xl mx-auto px-5 sm:px-6 lg:px-10 py-16 sm:py-20 lg:py-28 grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">

        {/* LEFT — copy + CTA */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.4 }}
          variants={stagger}
        >
          <motion.p
            variants={fadeUp}
            className="text-sm sm:text-base font-semibold tracking-[0.2em] uppercase text-[#2563A6] mb-4"
          >
            Why Choose Us
          </motion.p>

          <motion.h2
            variants={fadeUp}
            className="font-bold uppercase leading-[1.05] text-4xl sm:text-5xl tracking-tight mb-6 text-[#2563A6]"
          >
            The Reason Workshops
            <br />
            Trust <span className="text-[#2563A6]">Superior</span>.
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="text-slate-600 leading-relaxed max-w-md mb-8"
          >
            We import and distribute genuine, OEM-quality auto spare parts
            for Toyota, Honda, Suzuki and other popular models — backed by
            a nationwide network built to get the right part to the right
            hands, on time, every time.
          </motion.p>

          <motion.a
            href="/s/products"
            variants={fadeUp}
            className="inline-block bg-[#2563A6] text-white font-semibold uppercase text-sm tracking-wide px-8 py-4 rounded-full hover:bg-[#1D4F85] transition-colors duration-300"
          >
            Discover Our Products
          </motion.a>
        </motion.div>

        {/* RIGHT — stacked stat rows */}
        <motion.div
          className="flex flex-col divide-y divide-[#2563A6]/10"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          variants={stagger}
        >
          {stats.map((s) => (
            <motion.div
              key={s.label}
              variants={fadeUp}
              className="grid grid-cols-[auto_1px_1fr] gap-6 sm:gap-8 items-center py-7 first:pt-0 last:pb-0"
            >
              {/* Number + label */}
              <div className="min-w-[6.5rem] sm:min-w-[7.5rem]">
                <div className="font-bold text-[#2563A6] text-4xl sm:text-5xl leading-none">
                  {s.value}
                </div>

                <div className="mt-2 font-semibold uppercase text-sm tracking-wide text-[#2563A6]">
                  {s.label}
                </div>
              </div>

              {/* Divider */}
              <span
                className="self-stretch w-px bg-[#2563A6]/10"
                aria-hidden="true"
              />

              {/* Blurb */}
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                {s.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}