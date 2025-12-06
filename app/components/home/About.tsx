"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function About() {
    return (
        <section id="about" className="py-20 md:py-32 px-6 md:px-12 max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row gap-12 md:gap-24 items-start">
                {/* Left Column - Image */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="w-full md:w-[40%] flex justify-center md:justify-start"
                >
                    <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96">
                        <Image
                            src="/images/about-illustration.png"
                            alt="Vinayak Agrawal Illustration"
                            fill
                            className="object-contain dark:invert"
                        />
                    </div>
                </motion.div>

                {/* Right Column - Bio */}
                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="w-full md:w-[60%] space-y-6 text-base md:text-lg leading-relaxed text-muted-foreground"
                >
                    <h2 className="text-4xl md:text-5xl font-bold font-display text-foreground mb-8">About Me</h2>

                    <p>
                        I started coding during my B.Tech journey, initially driven by
                        curiosity and a desire to understand how real-world products
                        actually work behind the scenes. What began with basic programming
                        quickly evolved into building full-stack applications, experimenting
                        with AI systems, and thinking deeply about how software decisions
                        translate into real user impact.
                    </p>

                    <p>
                        I'm currently pursuing <strong className="text-foreground font-semibold">B.Tech</strong>, and alongside my
                        coursework, I spend most of my time building, breaking, and
                        rebuilding systems — web apps, AI pipelines, and backend services —
                        until they make sense not just syntactically, but architecturally.
                    </p>

                    <p>
                        I'm driven by problems where <strong className="text-foreground font-semibold">logic meets scale</strong>:
                        systems that must be reliable, explainable, and actually useful. I'm
                        especially excited by problems involving <strong className="text-foreground font-semibold">AI integration in real products</strong>, where the challenge isn't just model accuracy, but
                        orchestration, reliability, deployment, and user experience.
                    </p>

                    <p>
                        Right now, my primary focus is on <strong className="text-foreground font-semibold">AI-powered application development</strong> and <strong className="text-foreground font-semibold">full-stack engineering</strong>. I'm deeply interested in:
                    </p>

                    <ul className="list-disc list-inside space-y-2 ml-2">
                        <li>
                            Building end-to-end AI systems (from data ingestion to model
                            inference to frontend delivery)
                        </li>
                        <li>
                            Designing scalable, production-ready web applications using modern
                            frameworks
                        </li>
                    </ul>

                    <p className="pt-4">
                        My long-term interests sit at the intersection of <strong className="text-foreground font-semibold">AI/ML, full-stack systems, and applied problem-solving</strong> — where engineering decisions
                        matter more than demos, and clarity matters more than cleverness.
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
