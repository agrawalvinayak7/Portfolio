"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export default function About() {
    return (
        <section id="about" className="relative py-24 md:py-40 px-6 md:px-12 max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-[1fr_1.5fr] gap-12 md:gap-20 items-start">
                {/* Left — header and decorative */}
                <div>
                    <motion.span
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="mono-label mb-4 block"
                    >
                        <span className="inline-block w-6 h-[1px] bg-accent mr-3 align-middle" />
                        Who I Am
                    </motion.span>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="text-5xl md:text-7xl font-display italic text-foreground mb-6"
                    >
                        About
                    </motion.h2>

                    <motion.div
                        initial={{ scaleX: 0 }}
                        whileInView={{ scaleX: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="accent-rule mb-10 origin-left"
                    />

                    {/* Decorative large quote mark */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.5 }}
                        className="hidden md:block"
                    >
                        <span
                            className="ghost-text block"
                            style={{ fontSize: "12rem", lineHeight: "0.7" }}
                            aria-hidden="true"
                        >
                            &ldquo;
                        </span>
                    </motion.div>
                </div>

                {/* Right — content */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, delay: 0.3 }}
                    className="md:pt-8"
                >
                    <div className="luxury-border p-8 md:p-10 space-y-6">
                        <p className="text-xl md:text-2xl font-display italic leading-relaxed text-foreground">
                            I build software products end-to-end — from system design to deployment.
                            I use AI not as a buzzword but as a daily tool to move faster and think clearer.
                        </p>
                        <p className="text-lg text-foreground-secondary font-light leading-relaxed">
                            Currently pursuing B.Tech while shipping production applications.
                            I think in systems, not features — and I care about the craft
                            of turning ideas into reliable, scalable products.
                        </p>
                        <p className="text-lg text-foreground-secondary font-light leading-relaxed">
                            Looking for early-stage teams where engineering decisions shape the product.
                        </p>
                    </div>

                    {/* Resume CTA */}
                    <motion.a
                        href="/Vinayak_Agrawal_Resume.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.6 }}
                        className="inline-flex items-center gap-2 mt-8 text-accent hover:text-accent-hover transition-colors group"
                    >
                        <span className="mono-label text-accent group-hover:text-accent-hover transition-colors">
                            Read full resume
                        </span>
                        <ArrowUpRight className="w-3.5 h-3.5 group-hover:rotate-45 transition-transform duration-300" />
                    </motion.a>
                </motion.div>
            </div>
        </section>
    );
}
