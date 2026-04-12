"use client";

import { motion } from "framer-motion";

const skillsData: Record<string, string[]> = {
    "Languages": ["TypeScript", "JavaScript", "Python", "C++"],
    "Frontend": ["React", "Next.js", "Tailwind CSS", "Framer Motion"],
    "Backend": ["Node.js", "Express.js", "FastAPI", "PyTorch"],
    "AI / ML": ["AWS SageMaker", "Hugging Face", "OpenAI API", "Sentiment Analysis"],
    "Databases": ["PostgreSQL", "MongoDB", "Supabase", "SQLite"],
    "Infrastructure": ["Vercel", "AWS", "Git", "Turborepo"],
};

export default function Skills() {
    return (
        <section id="stack" className="relative section-elevated">
            {/* Fine line background texture */}
            <div className="absolute inset-0 fine-lines opacity-30 pointer-events-none" />

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
                    Technologies
                </motion.span>

                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="text-5xl md:text-7xl font-display italic text-foreground mb-4"
                >
                    Stack
                </motion.h2>

                <motion.div
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="accent-rule mb-16 origin-left"
                />

                {/* Skills Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
                    {Object.entries(skillsData).map(([category, skills], index) => (
                        <motion.div
                            key={category}
                            initial={{ opacity: 0, y: 15 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.1 + index * 0.06 }}
                            className="py-6 px-6 border-b border-border md:odd:border-r md:odd:pr-12 md:even:pl-12 group hover:bg-accent-soft transition-colors duration-500"
                        >
                            <div className="flex items-center gap-3 mb-3">
                                <span className="mono-label text-accent">{String(index + 1).padStart(2, "0")}</span>
                                <h3 className="text-xs uppercase tracking-[0.2em] font-sans font-medium text-muted not-italic">
                                    {category}
                                </h3>
                            </div>
                            <p className="text-foreground font-light text-base leading-relaxed">
                                {skills.join(" / ")}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
