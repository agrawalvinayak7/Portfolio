"use client";

import { motion } from "framer-motion";
import { Mail, Github, Twitter, ArrowRight, Star } from "lucide-react";

export default function Contact() {
    return (
        <section id="contact" className="py-20 md:py-32 px-6 md:px-12 max-w-7xl mx-auto mb-20 relative">
            {/* Section Divider */}
            <div className="section-divider mb-16 max-w-2xl">
                <Star className="section-divider-star" />
            </div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="flex flex-col items-start max-w-2xl"
            >
                <h2 className="text-4xl md:text-5xl font-bold font-display mb-6 text-foreground flex items-center gap-3">
                    <Star className="w-8 h-8 text-accent fill-current" />
                    Let's Connect
                </h2>

                {/* Blue Accent Line */}
                <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: "60px" }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="h-1 bg-canton mb-8 dark:hidden"
                />

                <p className="text-lg md:text-xl text-muted mb-12 leading-relaxed">
                    I'm currently open to full-stack development, SDE, and ML engineering
                    opportunities, especially at startups and AI-focused companies.
                </p>

                <a
                    href="mailto:vinayakagrawalw@gmail.com"
                    className="text-2xl md:text-4xl font-bold font-display text-foreground hover:text-accent transition-colors flex items-center gap-4 mb-12 group"
                >
                    <Mail className="w-6 h-6 md:w-8 md:h-8 text-accent" />
                    vinayakagrawalw@gmail.com
                    <ArrowRight className="w-6 h-6 md:w-8 md:h-8 group-hover:-rotate-45 group-hover:text-accent transition-transform duration-300" />
                </a>

                {/* Canton-style social links */}
                <div className="flex items-center gap-6">
                    <a
                        href="https://x.com/agrawalvinayak7"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 px-6 py-3 bg-white border-2 border-canton text-foreground font-medium rounded-lg hover:border-accent hover:text-accent transition-all dark:bg-neutral-900 dark:border-neutral-700"
                    >
                        <Twitter className="w-5 h-5" />
                        X
                    </a>
                    <a
                        href="https://github.com/agrawalvinayak7"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 px-6 py-3 bg-white border-2 border-canton text-foreground font-medium rounded-lg hover:border-accent hover:text-accent transition-all dark:bg-neutral-900 dark:border-neutral-700"
                    >
                        <Github className="w-5 h-5" />
                        GitHub
                    </a>
                </div>
            </motion.div>

            {/* Bottom Red Accent Line */}
            <div className="accent-line-red mt-16 dark:hidden" />
        </section>
    );
}
