"use client";

import { motion } from "framer-motion";
import { Mail, Github, Twitter, ArrowRight } from "lucide-react";

export default function Contact() {
    return (
        <section id="contact" className="py-20 md:py-32 px-6 md:px-12 max-w-7xl mx-auto mb-20">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="flex flex-col items-start max-w-2xl"
            >
                <h2 className="text-4xl md:text-5xl font-bold font-display mb-8">Let's Connect</h2>

                <p className="text-lg md:text-xl text-muted-foreground mb-12 leading-relaxed">
                    I'm currently open to full-stack development, SDE, and ML engineering
                    opportunities, especially at startups and AI-focused companies.
                </p>

                <a
                    href="mailto:vinayakagrawalw@gmail.com"
                    className="text-2xl md:text-4xl font-bold font-display hover:text-accent transition-colors flex items-center gap-4 mb-12 group"
                >
                    vinayakagrawalw@gmail.com
                    <ArrowRight className="w-6 h-6 md:w-8 md:h-8 group-hover:-rotate-45 transition-transform duration-300" />
                </a>

                <div className="flex items-center gap-8">
                    <a
                        href="https://x.com/agrawalvinayak7"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-lg font-medium hover:text-accent transition-colors"
                    >
                        <Twitter className="w-5 h-5" />
                        X / Twitter
                    </a>
                    <a
                        href="https://github.com/agrawalvinayak7"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-lg font-medium hover:text-accent transition-colors"
                    >
                        <Github className="w-5 h-5" />
                        GitHub
                    </a>
                </div>
            </motion.div>
        </section>
    );
}
