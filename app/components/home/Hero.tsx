"use client";

import { motion } from "framer-motion";
import { ArrowDown, Star } from "lucide-react";
import Link from "next/link";

export default function Hero() {
    const tagline = "I like writing software";

    return (
        <section className="relative w-full h-screen overflow-hidden">
            {/* Subtle Star Pattern Background - Light Mode Only */}
            <div className="absolute inset-0 dark:hidden star-pattern opacity-60" />

            {/* Canton (Dark Blue) - Geometric Shape */}
            <div className="absolute right-0 top-0 w-[55%] h-full dark:hidden">
                <motion.div
                    initial={{ x: 100, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="absolute inset-0 bg-canton"
                    style={{
                        clipPath: "polygon(15% 0, 100% 0, 100% 100%, 0% 100%)"
                    }}
                >
                    {/* Animated subtle gradient overlay on canton */}
                    <motion.div
                        animate={{
                            opacity: [0.3, 0.5, 0.3],
                        }}
                        transition={{
                            duration: 8,
                            repeat: Infinity,
                            ease: "easeInOut",
                        }}
                        className="absolute inset-0"
                        style={{
                            background: "radial-gradient(circle at 30% 50%, rgba(102, 155, 188, 0.2) 0%, transparent 50%)"
                        }}
                    />

                    {/* Subtle stars on canton */}
                    <div className="absolute inset-0 opacity-10">
                        {[...Array(6)].map((_, i) => (
                            <Star
                                key={i}
                                className="absolute text-white"
                                style={{
                                    top: `${10 + i * 15}%`,
                                    left: `${20 + (i % 3) * 20}%`,
                                    fontSize: `${12 + (i % 2) * 8}px`,
                                }}
                            />
                        ))}
                    </div>
                </motion.div>
            </div>

            {/* Red Accent Stripe - Top */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-accent dark:hidden" />

            {/* Red Accent Stripe - Bottom of Hero */}
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-accent dark:hidden" />

            {/* Content */}
            <div className="relative z-10 px-6 md:px-12 max-w-7xl mx-auto w-full min-h-screen pt-20 flex flex-col">
                {/* Name and Tagline - Vertically Centered */}
                <div className="flex-1 flex items-center">
                    <div className="max-w-3xl">
                        {/* Name on Cream Background */}
                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            className="text-6xl md:text-[6.5rem] font-bold font-display tracking-tight leading-none text-foreground mb-6"
                        >
                            VINAYAK AGRAWAL
                        </motion.h1>

                        <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: "120px" }}
                            transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
                            className="h-1.5 bg-accent mb-8 dark:hidden"
                        />

                        {/* Tagline */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.8, delay: 0.7 }}
                            className="text-xl md:text-2xl font-display font-medium text-foreground h-8"
                        >
                            {tagline.split("").map((char, index) => (
                                <motion.span
                                    key={index}
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ duration: 0.05, delay: 1 + index * 0.03 }}
                                >
                                    {char}
                                </motion.span>
                            ))}
                        </motion.div>
                    </div>
                </div>
            </div>

            {/* Scroll Indicator with Star - Positioned Absolutely */}
            <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 2.5 }}
                className="absolute bottom-12 left-6 md:left-12 z-10 flex items-center gap-3"
            >
                <Link
                    href="#projects"
                    className="flex items-center gap-3 text-sm font-medium text-muted hover:text-accent transition-colors group"
                >
                    <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                        className="text-accent"
                    >
                        <Star className="w-4 h-4 fill-current" />
                    </motion.div>
                    <span className="relative">
                        Scroll to explore
                        <motion.span
                            className="absolute bottom-0 left-0 h-0.5 bg-accent"
                            initial={{ width: 0 }}
                            whileHover={{ width: "100%" }}
                            transition={{ duration: 0.3 }}
                        />
                    </span>
                    <motion.div
                        animate={{ y: [0, 8, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                        className="group-hover:text-accent"
                    >
                        <ArrowDown className="w-4 h-4" />
                    </motion.div>
                </Link>
            </motion.div>

            {/* Decorative Star on Canton - Light Mode Only */}
            <motion.div
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{
                    duration: 1.2,
                    delay: 1.5,
                    ease: "easeOut",
                    type: "spring"
                }}
                className="absolute right-[20%] top-[25%] dark:hidden opacity-20"
            >
                <Star className="w-32 h-32 text-white fill-current" />
            </motion.div>
        </section >
    );
}
