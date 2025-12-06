"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useScroll, motion, useMotionValueEvent, AnimatePresence } from "framer-motion";
import { Moon, Sun, Menu, X, FileText } from "lucide-react";
import { useTheme } from "next-themes";
import { cn } from "@/lib/utils";

export default function Navbar() {
    const { scrollY } = useScroll();
    const [hidden, setHidden] = useState(false);
    const [prevScroll, setPrevScroll] = useState(0);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => setMounted(true), []);

    useMotionValueEvent(scrollY, "change", (latest) => {
        if (latest > prevScroll && latest > 150) {
            setHidden(true);
        } else {
            setHidden(false);
        }
        setPrevScroll(latest);
    });

    const links = [
        { name: "About", href: "/#about" },
        { name: "Projects", href: "/#projects" },
        { name: "Contact", href: "/#contact" },
    ];

    return (
        <motion.nav
            variants={{
                visible: { y: 0 },
                hidden: { y: "-100%" },
            }}
            animate={hidden ? "hidden" : "visible"}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-neutral-100 dark:border-neutral-900"
        >
            <div className="max-w-7xl mx-auto px-6 md:px-12 h-20 flex items-center justify-between">
                {/* Logo */}
                <Link
                    href="/"
                    className="text-2xl font-bold tracking-tighter font-display hover:text-accent transition-colors"
                    onClick={() => window.scrollTo(0, 0)}
                >
                    VA
                </Link>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center gap-8">
                    {links.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="text-sm font-medium hover:text-accent transition-colors relative group"
                        >
                            {link.name}
                            <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-accent transition-all group-hover:w-full" />
                        </Link>
                    ))}

                    {/* Dark Mode Toggle */}
                    <button
                        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                        className="p-2 rounded-full hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
                        aria-label="Toggle dark mode"
                    >
                        {mounted && theme === "dark" ? (
                            <Sun className="w-5 h-5" />
                        ) : (
                            <Moon className="w-5 h-5" />
                        )}
                    </button>

                    {/* Resume Button */}
                    <a
                        href="/Vinayak_Agrawal_Resume.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 bg-foreground text-background text-sm font-medium rounded-full hover:bg-accent hover:text-white transition-all transform hover:scale-105"
                    >
                        <FileText className="w-4 h-4" />
                        View CV
                    </a>
                </div>

                {/* Mobile Menu Button */}
                <div className="flex md:hidden items-center gap-4">
                    <button
                        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                        className="p-2 rounded-full hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
                        aria-label="Toggle dark mode"
                    >
                        {mounted && theme === "dark" ? (
                            <Sun className="w-5 h-5" />
                        ) : (
                            <Moon className="w-5 h-5" />
                        )}
                    </button>

                    <button
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        className="p-2 z-50 relative"
                        aria-label="Toggle menu"
                    >
                        {mobileMenuOpen ? (
                            <X className="w-6 h-6" />
                        ) : (
                            <Menu className="w-6 h-6" />
                        )}
                    </button>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, x: "100%" }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: "100%" }}
                        transition={{ type: "tween", duration: 0.3 }}
                        className="fixed inset-0 top-0 bg-background z-40 flex flex-col items-center justify-center gap-8 md:hidden"
                    >
                        {links.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                onClick={() => setMobileMenuOpen(false)}
                                className="text-3xl font-bold font-display hover:text-accent transition-colors"
                            >
                                {link.name}
                            </Link>
                        ))}

                        <a
                            href="/Vinayak_Agrawal_Resume.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-4 flex items-center gap-2 px-6 py-3 bg-foreground text-background text-lg font-medium rounded-full hover:bg-accent hover:text-white transition-all"
                        >
                            <FileText className="w-5 h-5" />
                            View CV
                        </a>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
}
