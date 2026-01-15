"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";

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
        <section id="skills" className="py-20 md:py-32 px-6 md:px-12 max-w-7xl mx-auto relative">
            {/* Section Divider */}
            <div className="section-divider mb-16">
                <Star className="section-divider-star" />
            </div>

            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-4xl md:text-5xl font-bold font-display mb-6 text-foreground"
            >
                Skills & Technologies
            </motion.h2>

            {/* Blue Accent Line */}
            <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: "80px" }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="h-1 bg-canton mb-16 dark:hidden"
            />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {Object.entries(skillsData).map(([category, skills], index) => (
                    <motion.div
                        key={category}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="canton-card p-6 hover:shadow-lg transition-shadow duration-300"
                    >
                        <h3 className="text-lg font-bold mb-4 text-foreground flex items-center gap-2">
                            <Star className="w-4 h-4 text-accent fill-current shrink-0" />
                            {category}
                        </h3>
                        <div className="flex flex-wrap gap-2">
                            {skills.map((skill) => (
                                <span
                                    key={skill}
                                    className="px-3 py-1.5 rounded-full text-xs md:text-sm font-medium border transition-all duration-300 cursor-default hover:scale-105"
                                    style={{
                                        backgroundColor: '#ffffff',
                                        borderColor: '#e5e7eb',
                                        color: '#003049',
                                    }}
                                    onMouseEnter={(e) => {
                                        e.currentTarget.style.borderColor = '#C1121F';
                                        e.currentTarget.style.backgroundColor = '#FFF5F5';
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.borderColor = '#e5e7eb';
                                        e.currentTarget.style.backgroundColor = '#ffffff';
                                    }}
                                >
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* Bottom Red Accent Line */}
            <div className="accent-line-red mt-16 dark:hidden" />
        </section>
    );
}
