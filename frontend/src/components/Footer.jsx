import { useState } from "react";
import {
    Phone,
    Mail,
    MapPin,
    ChevronDown,
    ChevronUp,
} from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
export default function Footer() {
    const [productsOpen, setProductsOpen] = useState(false);
    const [brandsOpen, setBrandsOpen] = useState(false);

    return (
        <footer className="border-t bg-white">
            <div className="max-w-7xl mx-auto px-6 py-14">
                <div className="grid md:grid-cols-3 gap-12">
                    {/* Left */}
                    <div>
                        <h2 className="text-3xl font-bold text-[#C8102E] mb-6">
                            Uni Perfect
                        </h2>

                        <p className="text-gray-600 leading-8 max-w-sm">
                            Importing and distributing 200+ genuine, high-quality auto
                            spare parts for Toyota, Honda, Suzuki and more — trusted by
                            wholesalers, retailers and workshops across Pakistan.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-2xl font-semibold text-[#C8102E] mb-6">
                            Quick Links
                        </h3>

                        <ul className="space-y-4 text-gray-600">
                            <li>
                                <a href="#" className="hover:text-[#C8102E] transition">
                                    Home
                                </a>
                            </li>

                            <li>
                                <a href="#" className="hover:text-[#C8102E] transition">
                                    About Us
                                </a>
                            </li>

                            {/* Products */}
                            <li>
                                <button
                                    onClick={() => setProductsOpen(!productsOpen)}
                                    className="flex items-center justify-between w-48 hover:text-[#C8102E] transition"
                                >
                                    <span>Our Products</span>
                                    {productsOpen ? (
                                        <ChevronUp size={16} />
                                    ) : (
                                        <ChevronDown size={16} />
                                    )}
                                </button>

                                {productsOpen && (
                                    <ul className="mt-3 ml-4 space-y-2 text-sm text-gray-500">
                                        <li>
                                            <a href="#" className="hover:text-[#C8102E]">
                                                Engine Components
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" className="hover:text-[#C8102E]">
                                                Suspension Parts
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" className="hover:text-[#C8102E]">
                                                Electrical Parts & Filters
                                            </a>
                                        </li>
                                    </ul>
                                )}
                            </li>

                            {/* Brands */}
                            <li>
                                <button
                                    onClick={() => setBrandsOpen(!brandsOpen)}
                                    className="flex items-center justify-between w-48 hover:text-[#C8102E] transition"
                                >
                                    <span>Vehicles We Cover</span>
                                    {brandsOpen ? (
                                        <ChevronUp size={16} />
                                    ) : (
                                        <ChevronDown size={16} />
                                    )}
                                </button>

                                {brandsOpen && (
                                    <ul className="mt-3 ml-4 space-y-2 text-sm text-gray-500">
                                        <li>
                                            <a href="#" className="hover:text-[#C8102E]">
                                                Toyota
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" className="hover:text-[#C8102E]">
                                                Honda
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" className="hover:text-[#C8102E]">
                                                Suzuki & More
                                            </a>
                                        </li>
                                    </ul>
                                )}
                            </li>

                            <li>
                                <a href="#" className="hover:text-[#C8102E] transition">
                                    Contact Us
                                </a>
                            </li>

                            <li>
                                <a href="#" className="hover:text-[#C8102E] transition">
                                    Privacy Policy
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="text-2xl font-semibold text-[#C8102E] mb-6">
                            Contact Us
                        </h3>

                        <div className="space-y-5 text-gray-700">
                            {/* Phone */}
                            <a
                                href="tel:+923212699997"
                                className="flex items-start gap-3 hover:text-[#C8102E] transition"
                            >
                                <Phone size={18} className="mt-1 shrink-0" />
                                <span>03212699997</span>
                            </a>

                            <a
                                href="https://mail.google.com/mail/?view=cm&fs=1&to=umair@thedisruptlabs.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-start gap-3 hover:text-[#C8102E] transition"
                            >
                                <Mail size={18} className="mt-1 shrink-0" />
                                <span>umair@thedisruptlabs.com</span>
                            </a>

                            {/* Karachi */}
                            <div>
                                <h4 className="font-semibold text-[#C8102E] mb-2">
                                    Karachi
                                </h4>

                                <a
                                    href="https://maps.google.com/?q=Ruby+Plaza+Karachi"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex gap-3 hover:text-[#C8102E] transition"
                                >
                                    <MapPin size={18} className="mt-1 shrink-0" />
                                    <span>
                                        G-92 Ruby Plaza, Magazine Lane, near Preedy Quarters,
                                        M.A. Jinnah Road, Karachi
                                    </span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="border-t mt-12 pt-6 text-center text-sm text-gray-500">
                    © {new Date().getFullYear()} Uni Perfect. All rights reserved.
                </div>
            </div>
            {/* Floating WhatsApp Button */}
            <div className="fixed bottom-6 right-6 z-50">
                <a
                    href="https://wa.me/923350099880"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Chat on WhatsApp"
                    className="flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-xl transition-all duration-300 hover:scale-110 hover:shadow-2xl"
                >
                    <FaWhatsapp size={30} />
                </a>
            </div>
        </footer>
    );
}