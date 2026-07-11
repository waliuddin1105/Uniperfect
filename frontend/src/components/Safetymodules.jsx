import React from "react";
import { Home, Eye, AlertTriangle, Bell } from "lucide-react";

// Custom icons for the two that aren't in lucide-react, drawn in the same
// thin-stroke style so they match the rest visually.
function HardHatIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M4 16v-1a8 8 0 0 1 16 0v1" />
      <path d="M2 16h20" />
      <path d="M12 7V5" />
      <path d="M9 9.5V7M15 9.5V7" />
    </svg>
  );
}

function ForkliftIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <circle cx="7" cy="17" r="2" />
      <circle cx="16" cy="17" r="2" />
      <path d="M5 17V9h5l2 4h5" />
      <path d="M9 17h5" />
      <path d="M9 9V5h3" />
    </svg>
  );
}

// Edit the title/description text below to match your final copy —
// the last two cards were cut off in the reference screenshot, so I've
// written plausible full sentences that you should double check.
const MODULES = [
  {
    title: "PPE Module",
    description:
      "PPE is crucial for ensuring worker safety. Helmets, vests, boots, masks, and other gear are monitored to maintain a safe environment.",
    icon: HardHatIcon,
  },
  {
    title: "Housekeeping Module",
    description:
      "Clear pathways, unblocked emergency exits, and prompt spill cleanup are essential for preventing accidents.",
    icon: Home,
  },
  {
    title: "Area Controls Module",
    description:
      "AI monitoring ensures operator presence and restricted access, attention to suspended loads, machine proximity, and worker counts for safety.",
    icon: Eye,
  },
  {
    title: "Forklift Controls Module",
    description:
      "Forklift safety is paramount. We ensure safe distances, proper loading, and clear pathways to prevent collisions and accidents on site.",
    icon: ForkliftIcon,
  },
  {
    title: "Other Safety Alerts Module",
    description:
      "Machine guards, closed electrical panels, staircase rails, and camera obstructions are monitored to flag hazards before they cause harm.",
    icon: AlertTriangle,
  },
  {
    title: "Emergency Situation Module",
    description:
      "During emergencies, we track person counts, respond to worker incidents, and alert teams instantly to speed up evacuation and response.",
    icon: Bell,
  },
];

function ModuleCard({ title, description, icon: Icon }) {
  return (
    <div
      className="
        group rounded-2xl border border-red-100 bg-white p-6 
        shadow-sm transition-all duration-300 
        hover:bg-red-700 hover:shadow-lg
      "
    >
      <h3
        className="
          text-lg font-bold text-red-800 
          transition-colors duration-300 
          group-hover:text-white
        "
      >
        {title}
      </h3>

      <div
        className="
          mt-4 flex h-16 w-16 items-center justify-center rounded-full 
          bg-red-700 transition-colors duration-300
          group-hover:bg-white
        "
      >
        <Icon
          className="
            h-7 w-7 text-white 
            transition-colors duration-300
            group-hover:text-red-700
          "
        />
      </div>

      <div
        className="
          mt-4 h-px w-10 bg-red-200 
          transition-colors duration-300
          group-hover:bg-red-300
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
        <h2 className="text-center text-2xl font-bold leading-snug text-red-600 md:text-3xl">
  The Disrupt Labs Use AI-Powered Video Analytics
  <br />
  To Enhance Workplace Safety!
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