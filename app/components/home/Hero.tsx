"use client";

import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import Link from "next/link";

export default function Hero() {
    const tagline = "I like writing software";

    return (
        <section className="relative w-full h-[80vh] flex flex-col justify-center px-6 md:px-12 max-w-7xl mx-auto grained-bg">
            <div className="flex flex-col items-start space-y-2 z-10">
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="text-5xl md:text-[5rem] font-bold font-display tracking-tight leading-none text-foreground"
                >
                    VINAYAK AGRAWAL
                </motion.h1>


                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                    className="text-xl md:text-2xl font-display font-medium text-foreground mt-4 h-8"
                >
                    {tagline.split("").map((char, index) => (
                        <motion.span
                            key={index}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.05, delay: 1 + index * 0.05 }}
                        >
                            {char}
                        </motion.span>
                    ))}
                </motion.div>
            </div>

            <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 2.5 }}
                className="absolute bottom-12 left-6 md:left-12"
            >
                <Link
                    href="#projects"
                    className="flex items-center gap-2 text-sm text-muted-foreground hover:text-accent transition-colors group"
                >
                    Scroll to explore
                    <ArrowDown className="w-4 h-4 animate-bounce group-hover:text-accent" />
                </Link>
            </motion.div>
        </section>
    );
}
