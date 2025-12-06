"use client";

import { projects } from "@/data/projectsData";
import { ProjectItem } from "./ProjectItem";
import { motion } from "framer-motion";

export default function Projects() {
    return (
        <section id="projects" className="py-20 md:py-32 px-6 md:px-12 max-w-7xl mx-auto">
            <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-4xl md:text-5xl font-bold font-display mb-20 md:mb-32"
            >
                Selected Work
            </motion.h2>

            <div className="space-y-32 md:space-y-40">
                {projects.map((project) => (
                    <ProjectItem key={project.id} project={project} />
                ))}
            </div>
        </section>
    );
}
