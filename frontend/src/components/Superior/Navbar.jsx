import React, { useState } from "react";

import { Link } from "react-router-dom";

import { ChevronDown, Menu, X } from "lucide-react";

// Brand blue
const BRAND_BLUE = "#2563A6";

// Edit these arrays to change links / dropdown items.
// All internal paths are absolute (start with "/") so routing works
// correctly no matter which page you're currently on.

const NAV_LINKS = [
  { label: "Home", href: "/" },

  { label: "Products", href: "/s/products" },

  {
    label: "More Brands",
    dropdown: [
      { label: "UniPerfect", href: "/" },
    ],
  },

  { label: "Contact Us", scrollToBottom: true },
];

function DesktopDropdown({ label, items }) {
  return (
    <div className="group relative">
      <button
        type="button"
        className="flex items-center gap-1 py-2 text-base font-medium text-white transition-colors hover:text-white/80 focus:outline-none focus-visible:text-white/80"
      >
        {label}
        <ChevronDown
          size={16}
          className="mt-px transition-transform duration-200 group-hover:rotate-180 group-focus-within:rotate-180"
        />
      </button>

      <div className="invisible absolute left-0 top-full z-[9999] w-56 translate-y-1 pt-3 opacity-0 pointer-events-none transition-all duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 group-hover:pointer-events-auto group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100 group-focus-within:pointer-events-auto">
        <div className="overflow-hidden rounded-xl border border-slate-100 bg-white py-2 shadow-xl">
          {items.map((item) => (
            <Link
              key={item.label}
              to={item.href}
              className="block px-4 py-2.5 text-base text-[#E50E37] transition-colors hover:bg-[#FDECEF] hover:text-[#C00C2E]"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

function MobileDropdown({ label, items }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-white/20">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        className="flex w-full items-center justify-between py-3 text-left text-base font-medium text-white"
        aria-expanded={open}
      >
        {label}

        <ChevronDown
          size={16}
          className={`transition-transform duration-200 ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>

      {open && (
  <div className="border-t border-white/10">
    {items.map((item) => (
      <Link
        key={item.label}
        to={item.href}
        className="block border-b border-white/10 py-3 pl-5 text-base font-medium text-[#E50E37] transition-colors hover:bg-white/10"
      >
        {item.label}
      </Link>
    ))}
  </div>
)}
    </div>
  );
}
export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  // Scroll smoothly to the bottom of the page
  const scrollToBottom = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    });

    // Close mobile menu
    setMobileOpen(false);
  };

  return (
    <header
      className="sticky top-0 z-50 w-full shadow-md"
      style={{ backgroundColor: BRAND_BLUE }}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-2">
        {/* Logo — drop your real logo file in here (e.g. an <img> tag) */}
        <Link to="/" className="flex items-center gap-3">
          <img
            src="/sp_logo_new.png"
            alt="Company logo"
            className="max-h-18 max-w-40 rounded-md"
          />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) =>
            link.dropdown ? (
              <DesktopDropdown
                key={link.label}
                label={link.label}
                items={link.dropdown}
              />
            ) : link.scrollToBottom ? (
              <button
                key={link.label}
                type="button"
                onClick={scrollToBottom}
                className="py-2 text-base font-medium text-white transition-colors hover:text-white/80"
              >
                {link.label}
              </button>
            ) : (
              <Link
                key={link.label}
                to={link.href}
                className="py-2 text-base font-medium text-white transition-colors hover:text-white/80"
              >
                {link.label}
              </Link>
            )
          )}
        </nav>

        {/* Mobile toggle */}
        <button
          type="button"
          onClick={() => setMobileOpen((o) => !o)}
          className="text-white md:hidden"
          aria-label="Toggle menu"
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile nav (tap to expand dropdowns, since there's no hover on touch) */}
      {mobileOpen && (
        <nav className="border-t border-white/20 px-6 md:hidden">
          {NAV_LINKS.map((link) =>
            link.dropdown ? (
              <MobileDropdown
                key={link.label}
                label={link.label}
                items={link.dropdown}
              />
            ) : link.scrollToBottom ? (
              <button
                key={link.label}
                type="button"
                onClick={scrollToBottom}
                className="block w-full border-b border-white/20 py-3 text-left text-base font-medium text-white"
              >
                {link.label}
              </button>
            ) : (
              <Link
                key={link.label}
                to={link.href}
                className="block border-b border-white/20 py-3 text-base font-medium text-white"
              >
                {link.label}
              </Link>
            )
          )}
        </nav>
      )}
    </header>
  );
}