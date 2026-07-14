import React from "react";
import {
  ShieldCheck,
  Boxes,
  Truck,
  ClipboardCheck,
  BadgeCheck,
  Headset,
} from "lucide-react";

const MODULES = [
  {
    title: "Genuine Parts Verification",
    description:
      "Every part entering our inventory is checked against manufacturer specifications, so counterfeit or substandard components never reach your workshop.",
    icon: ShieldCheck,
  },
  {
    title: "Inventory & Stock",
    description:
      "Real-time stock tracking across 200+ parts for Toyota, Honda, Suzuki and more keeps popular components available and orders moving.",
    icon: Boxes,
  },
  {
    title: "Nationwide Distribution",
    description:
      "A logistics network spanning Pakistan ensures wholesalers, retailers and workshops receive shipments reliably and on schedule.",
    icon: Truck,
  },
  {
    title: "Order Processing",
    description:
      "From purchase order to dispatch, every order is verified and packed to spec before it leaves our Karachi warehouse.",
    icon: ClipboardCheck,
  },
  {
    title: "Quality Assurance",
    description:
      "Parts are sourced only from reputable manufacturers, then quality-checked before distribution so performance is never a gamble.",
    icon: BadgeCheck,
  },
  {
    title: "Customer Support",
    description:
      "Our team helps wholesalers, retailers and workshop owners find the right part fast, backed by decades of automotive expertise.",
    icon: Headset,
  },
];

function ModuleCard({ title, description, icon: Icon }) {
  return (
    <div
      className="
        group rounded-2xl border border-[#C8102E]/15 bg-white p-6 
        shadow-sm transition-all duration-300 
        hover:bg-[#C8102E] hover:shadow-lg
      "
    >
      <h3
        className="
          text-lg font-bold text-[#8C0E20] 
          transition-colors duration-300 
          group-hover:text-white
        "
      >
        {title}
      </h3>

      <div
        className="
          mt-4 flex h-16 w-16 items-center justify-center rounded-full 
          bg-[#C8102E] transition-colors duration-300
          group-hover:bg-white
        "
      >
        <Icon
          className="
            h-7 w-7 text-white 
            transition-colors duration-300
            group-hover:text-[#C8102E]
          "
        />
      </div>

      <div
        className="
          mt-4 h-px w-10 bg-[#C8102E]/20 
          transition-colors duration-300
          group-hover:bg-[#C8102E]/30
        "
      />

      <p
        className="
          mt-4 text-slate-500 
          transition-colors duration-300
          group-hover:text-white
        "
      >
        {description}
      </p>
    </div>
  );
}
export default function SafetyModules() {
  return (
    <section className="w-full bg-white px-6 py-16">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-center text-2xl font-bold leading-snug text-[#C8102E] md:text-3xl">
          Uni Perfect Delivers Genuine Auto Parts
          <br />
          You Can Rely On, Nationwide!
        </h2>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
          {MODULES.map((module) => (
            <ModuleCard
              key={module.title}
              title={module.title}
              description={module.description}
              icon={module.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
}