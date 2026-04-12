"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Mail, Github, Twitter } from "lucide-react";

export default function Contact() {
    return (
        <section id="contact" className="relative py-24 md:py-40 px-6 md:px-12 max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-[1.2fr_1fr] gap-16 md:gap-20">
                {/* Left — main content */}
                <div>
                    <motion.span
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="mono-label mb-4 block"
                    >
                        <span className="inline-block w-6 h-[1px] bg-accent mr-3 align-middle" />
                        Get In Touch
                    </motion.span>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="text-5xl md:text-7xl font-display italic text-foreground mb-6"
                    >
                        Let&rsquo;s talk.
                    </motion.h2>

                    <motion.div
                        initial={{ scaleX: 0 }}
                        whileInView={{ scaleX: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="accent-rule mb-10 origin-left"
                    />

                    {/* Email — hero element */}
                    <motion.a
                        href="mailto:vinayakagrawalw@gmail.com"
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="group inline-flex items-center gap-3 hover-underline"
                    >
                        <Mail className="w-5 h-5 md:w-6 md:h-6 text-accent shrink-0" />
                        <span className="text-xl md:text-3xl lg:text-4xl font-display italic text-foreground group-hover:text-accent transition-colors duration-300 break-all">
                            vinayakagrawalw@gmail.com
                        </span>
                    </motion.a>

                    {/* Availability note */}
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.5 }}
                        className="text-foreground-secondary font-light mt-8 text-base max-w-md"
                    >
                        Open to full-stack development, AI engineering, and product roles
                        at early-stage startups. Let&rsquo;s build something meaningful.
                    </motion.p>
                </div>

                {/* Right — links and social */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="flex flex-col gap-0 md:mt-20"
                >
                    {/* Social links as luxury list */}
                    {[
                        {
                            label: "X / Twitter",
                            href: "https://x.com/agrawalvinayak7",
                            icon: <Twitter className="w-4 h-4" />,
                            desc: "Thoughts in public",
                        },
                        {
                            label: "GitHub",
                            href: "https://github.com/agrawalvinayak7",
                            icon: <Github className="w-4 h-4" />,
                            desc: "Open source & projects",
                        },
                        {
                            label: "Resume",
                            href: "/Vinayak_Agrawal_Resume.pdf",
                            icon: <ArrowUpRight className="w-4 h-4" />,
                            desc: "Full background",
                        },
                    ].map((link, i) => (
                        <a
                            key={link.label}
                            href={link.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group flex items-center justify-between py-5 border-b border-border hover:bg-accent-soft transition-colors duration-500 px-4 -mx-4"
                        >
                            <div className="flex items-center gap-4">
                                <span className="text-muted group-hover:text-accent transition-colors duration-300">
                                    {link.icon}
                                </span>
                                <div>
                                    <span className="text-foreground group-hover:text-accent transition-colors duration-300 font-medium text-sm">
                                        {link.label}
                                    </span>
                                    <span className="block text-muted text-xs font-light">
                                        {link.desc}
                                    </span>
                                </div>
                            </div>
                            <ArrowUpRight className="w-3.5 h-3.5 text-muted group-hover:text-accent group-hover:rotate-45 transition-all duration-300" />
                        </a>
                    ))}
                </motion.div>
            </div>

            {/* Footer line */}
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="mt-24 pt-8 border-t border-border flex items-center justify-between"
            >
                <span className="mono-label">
                    &copy; {new Date().getFullYear()} Vinayak Agrawal
                </span>
                <span className="mono-label">
                    Built with intention
                </span>
            </motion.div>
        </section>
    );
}
