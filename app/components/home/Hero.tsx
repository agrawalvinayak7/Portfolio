"use client";

import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

export default function Hero() {
    return (
        <section className="relative w-full min-h-screen flex items-center overflow-hidden">
            {/* Fine grid background */}
            <div className="absolute inset-0 fine-grid opacity-50" />

            {/* Oversized ghost text — decorative background element */}
            <motion.div
                initial={{ opacity: 0, x: 80 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1.2, ease: "easeOut", delay: 0.3 }}
                className="absolute right-[-5%] top-[10%] ghost-text select-none pointer-events-none hidden md:block"
                style={{ fontSize: "clamp(15rem, 25vw, 30rem)" }}
                aria-hidden="true"
            >
                VA
            </motion.div>

            {/* Floating accent line — vertical decorative */}
            <motion.div
                initial={{ height: 0 }}
                animate={{ height: "120px" }}
                transition={{ duration: 1, delay: 1, ease: "easeOut" }}
                className="absolute left-6 md:left-12 top-[20%] w-[1px] bg-accent hidden md:block"
            />

            {/* Dot cluster — decorative */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.4 }}
                transition={{ duration: 1.5, delay: 1.5 }}
                className="absolute right-[15%] bottom-[20%] w-32 h-32 dot-pattern hidden lg:block"
            />

            {/* Content */}
            <div className="relative z-10 px-6 md:px-12 max-w-7xl mx-auto w-full pt-16">
                {/* Mono label */}
                <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="mono-label mb-10"
                >
                    <span className="inline-block w-8 h-[1px] bg-accent mr-3 align-middle" />
                    Software Developer &amp; Product Builder
                </motion.p>

                {/* Name — large editorial */}
                <div>
                    <motion.h1
                        initial={{ y: "100%" }}
                        animate={{ y: 0 }}
                        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                        className="font-display italic text-foreground leading-[0.9] tracking-[-0.03em]"
                        style={{ fontSize: "clamp(3.5rem, 10vw, 10rem)" }}
                    >
                        Vinayak
                    </motion.h1>
                </div>
                <div>
                    <motion.h1
                        initial={{ y: "100%" }}
                        animate={{ y: 0 }}
                        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
                        className="font-display italic text-foreground leading-[0.9] tracking-[-0.03em]"
                        style={{ fontSize: "clamp(3.5rem, 10vw, 10rem)" }}
                    >
                        Agrawal
                    </motion.h1>
                </div>

                {/* Accent line + year */}
                <div className="flex items-center gap-4 mt-10">
                    <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: "6rem" }}
                        transition={{ duration: 0.7, delay: 0.6, ease: "easeOut" }}
                        className="h-[2px] bg-accent"
                    />
                    <motion.span
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.9 }}
                        className="mono-label"
                    >
                        Portfolio 2025
                    </motion.span>
                </div>

                {/* Tagline */}
                <motion.p
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.9 }}
                    className="text-lg md:text-xl text-foreground-secondary font-light mt-8 max-w-lg leading-relaxed"
                >
                    I build products that work.
                    <br />
                    <span className="text-accent font-normal">I use AI to build them faster.</span>
                </motion.p>

                {/* CTA — subtle scroll prompt */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 1.8 }}
                    className="mt-16 flex items-center gap-3"
                >
                    <a href="#projects" className="flex items-center gap-3 group">
                        <span className="mono-label group-hover:text-accent transition-colors">
                            Explore work
                        </span>
                        <motion.div
                            animate={{ y: [0, 6, 0] }}
                            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                        >
                            <ArrowDown className="w-3.5 h-3.5 text-muted group-hover:text-accent transition-colors" />
                        </motion.div>
                    </a>
                </motion.div>
            </div>

            {/* Bottom border accent */}
            <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 1.2, delay: 1.2, ease: "easeOut" }}
                className="absolute bottom-0 left-0 right-0 h-[1px] bg-border origin-left"
            />
        </section>
    );
}
