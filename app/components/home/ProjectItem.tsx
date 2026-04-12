"use client";

import { Project } from "@/data/projectsData";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export function ProjectItem({ project, index }: { project: Project; index: number }) {
    const stack = [
        ...(project.techStack.aiml || []),
        ...(project.techStack.frontend || []),
        ...(project.techStack.backend || []),
    ].slice(0, 4);

    const number = String(index + 1).padStart(2, "0");

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10% 0px" }}
            transition={{ duration: 0.5, delay: index * 0.05 }}
        >
            <Link
                href={`/projects/${project.slug}`}
                className="group grid grid-cols-[1fr] md:grid-cols-[auto_1fr_auto] gap-4 md:gap-12 items-center py-8 md:py-10 border-b border-border hover:bg-accent-soft transition-colors duration-500"
            >
                {/* Number */}
                <span className="hidden md:block text-6xl lg:text-7xl font-display italic text-border-strong group-hover:text-accent transition-colors duration-500 leading-none w-24">
                    {number}
                </span>

                {/* Info */}
                <div className="flex flex-col gap-2 min-w-0">
                    <div className="flex items-center gap-3 flex-wrap">
                        <span className="md:hidden text-base font-display italic text-muted">
                            {number}
                        </span>
                        <h3 className="text-2xl md:text-3xl lg:text-4xl font-display italic text-foreground group-hover:text-accent transition-colors duration-500">
                            {project.title}
                        </h3>
                        {project.status === "ongoing" && (
                            <span className="shrink-0 text-[10px] px-2.5 py-1 uppercase tracking-wider text-accent border border-accent/30 rounded-full font-mono font-medium">
                                In Dev
                            </span>
                        )}
                    </div>

                    <p className="text-foreground-secondary text-sm md:text-base font-light line-clamp-1 pr-4">
                        {project.shortDescription}
                    </p>

                    <div className="flex flex-wrap gap-x-3 gap-y-1 mt-1">
                        {stack.map((tech, i) => (
                            <span key={tech} className="mono-label flex items-center gap-2">
                                {i > 0 && <span className="w-1 h-1 rounded-full bg-border-strong" />}
                                {tech}
                            </span>
                        ))}
                    </div>
                </div>

                {/* Arrow */}
                <div className="hidden md:flex items-center justify-center w-12 h-12 rounded-full border border-border group-hover:border-accent group-hover:bg-accent transition-all duration-500">
                    <ArrowUpRight className="w-4 h-4 text-muted group-hover:text-background group-hover:rotate-45 transition-all duration-500" />
                </div>

                {/* Mobile arrow */}
                <div className="md:hidden absolute right-0 top-8">
                    <ArrowUpRight className="w-5 h-5 text-muted group-hover:text-accent transition-colors duration-300" />
                </div>
            </Link>
        </motion.div>
    );
}
