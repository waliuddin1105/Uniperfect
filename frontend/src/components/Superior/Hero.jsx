import React from "react";

import { CheckCircle2, XCircle } from "lucide-react";

import { useEffect, useState } from "react";

export default function Hero() {
    const animatedText = "for Every Vehicle";
    const [typedText, setTypedText] = useState("");

    useEffect(() => {
        let index = 0;
        let deleting = false;

        const interval = setInterval(() => {
            if (!deleting) {
                // Typing forward
                setTypedText(animatedText.slice(0, index + 1));
                index++;

                if (index === animatedText.length) {
                    // Pause after completing
                    setTimeout(() => {
                        deleting = true;
                    }, 1500);
                }
            } else {
                // Deleting backward
                setTypedText(animatedText.slice(0, index - 1));
                index--;

                if (index === 0) {
                    deleting = false;
                }
            }
        }, deleting ? 50 : 100);

        return () => clearInterval(interval);
    }, []);

    return (
        <section className="relative h-screen overflow-hidden bg-[#1208FF]">
            <img
                src="/hero-img.jpg"
                className="absolute inset-0 h-full w-full object-cover"
            />

            <div className="absolute inset-0 bg-black/25" />
            <div className="absolute inset-0 bg-black/40" />

            <div className="relative flex h-full mx-auto max-w-7xl items-center px-6 sm:px-10">
                <div className="absolute right-6 top-16 hidden text-right sm:right-10 md:block">
                    <h3 className="max-w-xs text-2xl font-semibold leading-snug text-white">
                        Genuine Parts, Verified Quality
                    </h3>

                    <div className="ml-auto mt-6 h-32 w-px bg-white bg-opacity-40" />
                </div>

                <div className="max-w-xl">
                    <h1 className="text-4xl font-bold leading-tight text-white sm:text-5xl">
                        Genuine Auto Parts
                        <br />

                        <span className="relative inline-block">
                            <span className="invisible">{animatedText}</span>

                            <span className="absolute left-0 top-0 text-[#1208FF]">
                                {typedText}
                            </span>
                        </span>
                    </h1>

                    <p className="mt-4 max-w-md text-sm text-white/80 sm:text-base">
                        Importing And Distributing 200+ Genuine Spare Parts For Toyota,
                        Honda, Suzuki And More — Trusted By Workshops Across Pakistan.
                    </p>

                    <button
                        type="button"
                        className="mt-6 rounded-full bg-[#1208FF] px-6 py-3 text-xs font-semibold uppercase tracking-wider text-white transition-colors hover:bg-[#0D06CC]"
                    >
                        Contact Today
                    </button>
                </div>
            </div>
        </section>
    );
}