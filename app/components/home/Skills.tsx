"use client";

import { motion } from "framer-motion";

const skillsData = {
    "Programming Languages": ["TypeScript", "JavaScript", "Python", "C++"],
    "Frontend & Frameworks": ["React", "Next.js", "Tailwind CSS", "Shadcn UI", "Framer Motion"],
    "Backend": ["Node.js", "Express.js", "PyTorch", "FastAPI", "uvicorn", "Next.js"],
    "AI/ML & Generative AI": ["AWS (Model hosting)", "Sentiment Analysis", "Hugging Face"],
    "Databases": ["PostgreSQL", "SQLite", "Supabase", "MongoDB"],
    "Cloud & DevOps": ["Vercel", "AWS", "Git & GitHub", "Turborepo"]
};

export default function Skills() {
    return (
        <section id="skills" className="py-20 md:py-32 px-6 md:px-12 max-w-7xl mx-auto">
            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-4xl md:text-5xl font-bold font-display mb-16"
            >
                Skills & Technologies
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                {Object.entries(skillsData).map(([category, skills], index) => (
                    <motion.div
                        key={category}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                        <h3 className="text-xl font-medium mb-4 text-muted-foreground">{category}</h3>
                        <div className="flex flex-wrap gap-3">
                            {skills.map((skill) => (
                                <span
                                    key={skill}
                                    className="px-4 py-2 bg-neutral-100 dark:bg-neutral-900 rounded-full text-sm font-medium border border-transparent hover:border-accent hover:scale-105 transition-all duration-300 cursor-default"
                                >
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
