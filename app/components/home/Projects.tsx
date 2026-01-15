"use client";

import { projects } from "@/data/projectsData";
import { ProjectItem } from "./ProjectItem";
import { motion } from "framer-motion";
import { Star } from "lucide-react";

export default function Projects() {
    return (
        <section id="projects" className="py-20 md:py-32 px-6 md:px-12 max-w-7xl mx-auto relative">
            {/* Section Divider */}
            <div className="section-divider mb-16">
                <Star className="section-divider-star" />
            </div>

            <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-4xl md:text-5xl font-bold font-display mb-6 text-foreground"
            >
                Selected Work
            </motion.h2>

            {/* Blue Accent Line */}
            <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: "80px" }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="h-1 bg-canton mb-20 dark:hidden"
            />

            <div className="space-y-32 md:space-y-40">
                {projects.map((project) => (
                    <ProjectItem key={project.id} project={project} />
                ))}
            </div>

            {/* Bottom Red Accent Line */}
            <div className="accent-line-red mt-16 dark:hidden" />
        </section>
    );
}
