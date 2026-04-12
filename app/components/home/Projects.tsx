"use client";

import { projects } from "@/data/projectsData";
import { ProjectItem } from "./ProjectItem";
import { motion } from "framer-motion";

export default function Projects() {
    return (
        <section id="projects" className="relative py-24 md:py-40 px-6 md:px-12 max-w-7xl mx-auto">
            {/* Section header */}
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
                <div>
                    <motion.span
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="mono-label mb-4 block"
                    >
                        <span className="inline-block w-6 h-[1px] bg-accent mr-3 align-middle" />
                        Selected Work
                    </motion.span>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="text-5xl md:text-7xl font-display italic text-foreground"
                    >
                        Projects
                    </motion.h2>
                </div>

                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="text-foreground-secondary text-base font-light max-w-sm"
                >
                    Products, systems, and experiments — built end-to-end.
                </motion.p>
            </div>

            {/* Accent rule */}
            <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="accent-rule mb-0 origin-left"
            />

            {/* Project list */}
            <div>
                {projects.map((project, index) => (
                    <ProjectItem key={project.id} project={project} index={index} />
                ))}
            </div>
        </section>
    );
}
