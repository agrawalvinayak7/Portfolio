"use client";

import { motion } from "framer-motion";

const placeholders = [
    { number: "01", title: "On building AI products that actually ship", tag: "Product" },
    { number: "02", title: "Why I think in systems, not features", tag: "Engineering" },
    { number: "03", title: "Full-stack lessons from early-stage building", tag: "Startup" },
];

export default function Blog() {
    return (
        <section id="writing" className="relative section-elevated">
            <div className="absolute inset-0 dot-pattern opacity-20 pointer-events-none" />

            <div className="relative py-24 md:py-40 px-6 md:px-12 max-w-5xl mx-auto">
                {/* Header */}
                <motion.span
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="mono-label mb-4 block"
                >
                    <span className="inline-block w-6 h-[1px] bg-accent mr-3 align-middle" />
                    Thoughts &amp; Essays
                </motion.span>

                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="text-5xl md:text-7xl font-display italic text-foreground mb-4"
                >
                    Writing
                </motion.h2>

                <motion.div
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="accent-rule mb-4 origin-left"
                />

                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="text-foreground-secondary text-base font-light mb-12 max-w-md"
                >
                    Essays on building, shipping, and thinking about products. Coming soon.
                </motion.p>

                {/* Placeholder article slots */}
                <div>
                    {placeholders.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                            className="group flex items-center gap-4 md:gap-8 py-6 border-b border-border hover:bg-accent-soft transition-colors duration-500 px-2"
                        >
                            {/* Number */}
                            <span className="mono-label text-border-strong w-8 shrink-0">
                                {item.number}
                            </span>

                            {/* Title */}
                            <span className="flex-1 text-border-strong group-hover:text-foreground-secondary text-base md:text-lg font-light transition-colors duration-500">
                                {item.title}
                            </span>

                            {/* Tag */}
                            <span className="hidden md:block px-3 py-1 rounded-full border border-border text-border-strong text-[10px] uppercase tracking-wider font-mono">
                                {item.tag}
                            </span>

                            {/* Coming soon marker */}
                            <span className="mono-label text-border-strong shrink-0">
                                Soon
                            </span>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
