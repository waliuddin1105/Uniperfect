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
    const [solutionsOpen, setSolutionsOpen] = useState(false);
    const [resourcesOpen, setResourcesOpen] = useState(false);

    return (
        <footer className="border-t bg-white">
            <div className="max-w-7xl mx-auto px-6 py-14">
                <div className="grid md:grid-cols-3 gap-12">
                    {/* Left */}
                    <div>
                        <h2 className="text-3xl font-bold text-[#1b2b6b] mb-6">
                            The Disrupt Labs
                        </h2>

                        <p className="text-gray-600 leading-8 max-w-sm">
                            Upgrade Your Existing CCTV Infrastructure With Artificial
                            Intelligence For Proactive Industrial Safety.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-2xl font-semibold text-[#1b2b6b] mb-6">
                            Quick Links
                        </h3>

                        <ul className="space-y-4 text-gray-600">
                            <li>
                                <a href="#" className="hover:text-blue-700 transition">
                                    Home
                                </a>
                            </li>

                            <li>
                                <a href="#" className="hover:text-blue-700 transition">
                                    Safety AI Use Cases
                                </a>
                            </li>

                            {/* Solutions */}
                            <li>
                                <button
                                    onClick={() => setSolutionsOpen(!solutionsOpen)}
                                    className="flex items-center justify-between w-48 hover:text-blue-700 transition"
                                >
                                    <span>Solutions</span>
                                    {solutionsOpen ? (
                                        <ChevronUp size={16} />
                                    ) : (
                                        <ChevronDown size={16} />
                                    )}
                                </button>

                                {solutionsOpen && (
                                    <ul className="mt-3 ml-4 space-y-2 text-sm text-gray-500">
                                        <li>
                                            <a href="#" className="hover:text-blue-700">
                                                AI Monitoring
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" className="hover:text-blue-700">
                                                Smart Cameras
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" className="hover:text-blue-700">
                                                Safety Analytics
                                            </a>
                                        </li>
                                    </ul>
                                )}
                            </li>

                            <li>
                                <a href="#" className="hover:text-blue-700 transition">
                                    About Us
                                </a>
                            </li>

                            {/* Resources */}
                            <li>
                                <button
                                    onClick={() => setResourcesOpen(!resourcesOpen)}
                                    className="flex items-center justify-between w-48 hover:text-blue-700 transition"
                                >
                                    <span>Resources</span>
                                    {resourcesOpen ? (
                                        <ChevronUp size={16} />
                                    ) : (
                                        <ChevronDown size={16} />
                                    )}
                                </button>

                                {resourcesOpen && (
                                    <ul className="mt-3 ml-4 space-y-2 text-sm text-gray-500">
                                        <li>
                                            <a href="#" className="hover:text-blue-700">
                                                Blogs
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" className="hover:text-blue-700">
                                                Case Studies
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" className="hover:text-blue-700">
                                                White Papers
                                            </a>
                                        </li>
                                    </ul>
                                )}
                            </li>

                            <li>
                                <a href="#" className="hover:text-blue-700 transition">
                                    Contact Us
                                </a>
                            </li>

                            <li>
                                <a href="#" className="hover:text-blue-700 transition">
                                    Privacy Policy
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="text-2xl font-semibold text-[#1b2b6b] mb-6">
                            Contact Us
                        </h3>

                        <div className="space-y-5 text-gray-700">
                            {/* Phone */}
                            <a
                                href="tel:+923212699997"
                                className="flex items-start gap-3 hover:text-blue-700 transition"
                            >
                                <Phone size={18} className="mt-1 shrink-0" />
                                <span>03212699997</span>
                            </a>

                            <a
                                href="https://mail.google.com/mail/?view=cm&fs=1&to=umair@thedisruptlabs.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-start gap-3 hover:text-blue-700 transition"
                            >
                                <Mail size={18} className="mt-1 shrink-0" />
                                <span>umair@thedisruptlabs.com</span>
                            </a>

                            {/* UAE */}
                            <div>
                                <h4 className="font-semibold text-[#1b2b6b] mb-2">UAE</h4>

                                <a
                                    href="https://maps.google.com/?q=In5+Tech+Dubai"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex gap-3 hover:text-blue-700 transition"
                                >
                                    <MapPin size={18} className="mt-1 shrink-0" />
                                    <span>In5 Tech, Dubai, UAE</span>
                                </a>
                            </div>

                            {/* Saudi Arabia */}
                            <div>
                                <h4 className="font-semibold text-[#1b2b6b] mb-2">
                                    Saudi Arabia
                                </h4>

                                <a
                                    href="https://maps.google.com/?q=KFUPM+Dhahran"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex gap-3 hover:text-blue-700 transition"
                                >
                                    <MapPin size={18} className="mt-1 shrink-0" />
                                    <span>
                                        Office no: 40, building no: 8783, Dhahran Techno Valley,
                                        KFUPM, Dhahran, Saudi Arabia
                                    </span>
                                </a>
                            </div>

                            {/* Pakistan */}
                            <div>
                                <h4 className="font-semibold text-[#1b2b6b] mb-2">
                                    Pakistan
                                </h4>

                                <a
                                    href="https://maps.google.com/?q=Block+3A+Gulistan-e-Johar+Karachi"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex gap-3 hover:text-blue-700 transition"
                                >
                                    <MapPin size={18} className="mt-1 shrink-0" />
                                    <span>
                                        Suite No. B6/1, Block 3A, Gulistan-e-Johar, Karachi
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