import React from "react";
import { CheckCircle2, XCircle } from "lucide-react";
import { useEffect, useState } from "react";


export default function Hero() {
    const animatedText = "for Safer Workplace";
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
        <section className="relative overflow-hidden bg-slate-900">
            <img src="/hero-img.jpg" className="absolute inset-0 h-full w-full object-cover" />
            <div className="absolute inset-0 bg-slate-800/40" />
            <div className="absolute inset-0 bg-black/60" />

            <div className="relative mx-auto max-w-7xl px-6 py-16 sm:px-10 sm:py-20 md:py-28">



                {/* "AI Based Risk Detection" — top right, desktop only */}
                <div className="absolute right-6 top-16 hidden text-right sm:right-10 md:block">
                    <h3 className="max-w-xs text-2xl font-semibold leading-snug text-white">
                        AI Based Risk Detection
                    </h3>
                    <div className="ml-auto mt-6 h-32 w-px bg-white bg-opacity-40" />
                </div>

                {/* Main copy + CTA — bottom left */}
                <div className="mt-28 max-w-xl  ">
                    <p className="text-sm font-medium text-white">Welcome</p>
                    <h1 className="mt-2 text-4xl font-bold leading-tight text-white sm:text-5xl">
                        Computer Vision AI
                        <br />
                        <span>
                            {typedText}
                            
                        </span>
                    </h1>
                    <p className="mt-4 max-w-md text-sm text-slate-200 sm:text-base">
                        Upgrade Your Existing CCTV Infrastructure With Artificial
                        Intelligence For Proactive Industrial Safety.
                    </p>
                    <button
                        type="button"
                        className="mt-6 rounded-full bg-blue-950 px-6 py-3 text-xs font-semibold uppercase tracking-wider text-white transition-colors hover:bg-blue-900"
                    >
                        Contact Today
                    </button>
                </div>
            </div>
        </section>
    );
}