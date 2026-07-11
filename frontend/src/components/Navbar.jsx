import React, { useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";

// Edit these arrays to change links / dropdown items.
// "Resources" items are placeholders since your screenshot only showed
// the "Solutions" dropdown open — swap in your real links.
const NAV_LINKS = [
  { label: "Home", href: "#" },
  { label: "Safety AI Use Cases", href: "#" },
  {
    label: "Solutions",
    dropdown: [
      { label: "Safety AI Solutions", href: "#" },
      { label: "Inspection AI Solutions", href: "#" },
      { label: "Productivity AI Solutions", href: "#" },
    ],
  },
  { label: "About Us", href: "#" },
  {
    label: "Resources",
    dropdown: [
      { label: "Blog", href: "#" },
      { label: "Case Studies", href: "#" },
      { label: "Whitepapers", href: "#" },
    ],
  },
  { label: "Contact Us", href: "#" },
];

function DesktopDropdown({ label, items }) {
  return (
    <div className="group relative">
      <button
        type="button"
        className="flex items-center gap-1 py-2 text-base font-medium text-blue-950 transition-colors hover:text-indigo-600 focus:outline-none focus-visible:text-indigo-600"
      >
        {label}
        <ChevronDown
          size={16}
          className="mt-px transition-transform duration-200 group-hover:rotate-180 group-focus-within:rotate-180"
        />
      </button>

      {/* Padded wrapper closes the hover gap between the trigger and the panel */}
        <div className="invisible absolute left-0 top-full z-9999 w-56 translate-y-1 pt-3 opacity-0 pointer-events-none transition-all duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 group-hover:pointer-events-auto group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100 group-focus-within:pointer-events-auto">
        <div className="overflow-hidden rounded-xl border border-slate-100 bg-white py-2 shadow-xl">
          {items.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="block px-4 py-2.5 text-base text-indigo-500 transition-colors hover:bg-slate-50 hover:text-indigo-700"
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

function MobileDropdown({ label, items }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-slate-100">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        className="flex w-full items-center justify-between py-3 text-left text-base font-medium text-blue-950"
        aria-expanded={open}
      >
        {label}
        <ChevronDown
          size={16}
          className={`transition-transform duration-200 ${open ? "rotate-180" : ""}`}
        />
      </button>
      {open && (
        <div className="pb-2">
          {items.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="block py-2 pl-3 text-base text-indigo-500 hover:text-indigo-700"
            >
              {item.label}
            </a>
          ))}
        </div>
      )}
    </div>
  );
}

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="relative z-50 w-full bg-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* Logo placeholder — drop your real logo in here */}
        <a href="#" className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-md bg-slate-100" />
          <span className="text-sm font-semibold tracking-wide text-slate-400">
            YOUR LOGO
          </span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) =>
            link.dropdown ? (
              <DesktopDropdown key={link.label} label={link.label} items={link.dropdown} />
            ) : (
              <a
                key={link.label}
                href={link.href}
                className="py-2 text-base font-medium text-blue-950 transition-colors hover:text-indigo-600"
              >
                {link.label}
              </a>
            )
          )}
        </nav>

        {/* Mobile toggle */}
        <button
          type="button"
          onClick={() => setMobileOpen((o) => !o)}
          className="text-blue-950 md:hidden"
          aria-label="Toggle menu"
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile nav (tap to expand dropdowns, since there's no hover on touch) */}
      {mobileOpen && (
        <nav className="border-t border-slate-100 px-6 md:hidden">
          {NAV_LINKS.map((link) =>
            link.dropdown ? (
              <MobileDropdown key={link.label} label={link.label} items={link.dropdown} />
            ) : (
              <a
                key={link.label}
                href={link.href}
                className="block border-b border-slate-100 py-3 text-base font-medium text-blue-950"
              >
                {link.label}
              </a>
            )
          )}
        </nav>
      )}

      
    </header>
  );
}