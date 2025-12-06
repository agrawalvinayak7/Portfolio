"use client";

import { Project } from "@/data/projectsData";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

export function ProjectItem({ project }: { project: Project }) {
    // Combine tech stack for preview (limit to 5 items)
    const stack = [
        ...(project.techStack.aiml || []),
        ...(project.techStack.frontend || []),
        ...(project.techStack.backend || []),
    ].slice(0, 5);

    return (
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10% 0px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="group relative w-full grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center"
        >
            {/* Left Side */}
            <div className="flex flex-col items-start order-2 md:order-1 z-20 pointer-events-none md:pointer-events-auto">
                <div className="flex items-center gap-3 mb-4">
                    <span className="text-accent text-sm font-medium font-mono">
                        {project.number}
                    </span>
                    {project.status === "ongoing" && (
                        <span className="text-[10px] sm:text-xs px-2 py-0.5 border border-accent/50 text-accent rounded-full uppercase tracking-wider">
                            In Development
                        </span>
                    )}
                </div>

                <h3 className="text-3xl md:text-5xl font-bold font-display mb-6 group-hover:text-accent transition-colors duration-300">
                    {project.title}
                </h3>
                <p className="text-muted-foreground text-base md:text-lg mb-8 leading-relaxed">
                    {project.shortDescription}
                </p>

                <div className="flex flex-wrap gap-2 mb-8">
                    {stack.map((tech) => (
                        <span
                            key={tech}
                            className="px-3 py-1 bg-neutral-100 dark:bg-neutral-800 rounded-full text-xs md:text-sm font-medium text-muted-foreground whitespace-nowrap"
                        >
                            {tech}
                        </span>
                    ))}
                </div>

                <div className="btn-link inline-flex items-center gap-2 text-accent font-medium mt-auto transition-all group-hover:translate-x-2">
                    View Project <ArrowRight className="w-4 h-4" />
                </div>
            </div>

            {/* Right Side - Image */}
            <div className="order-1 md:order-2 relative aspect-4/3 w-full overflow-hidden rounded-lg bg-neutral-200 dark:bg-neutral-800">
                <Image
                    src={project.thumbnail}
                    alt={project.title}
                    fill
                    className={cn(
                        "object-cover transition-all duration-500",
                        "grayscale group-hover:grayscale-0 group-hover:scale-105",
                        "border-2 border-transparent group-hover:border-accent/50 rounded-lg" // Border effect on prompt? "Border: 0px -> 2px solid #FF3503".
                    )}
                />
                <div className="absolute inset-0 bg-neutral-900/10 dark:bg-neutral-900/20 group-hover:bg-transparent transition-colors duration-300" />
            </div>

            {/* Full Card Link overlay */}
            <Link href={`/projects/${project.slug}`} className="absolute inset-0 z-10" aria-label={`View project ${project.title}`} />
        </motion.div>
    );
}
