"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { useScroll, motion, useMotionValueEvent, AnimatePresence } from "framer-motion";
import { Moon, Sun, Menu, X, ArrowUpRight } from "lucide-react";
import { useTheme } from "next-themes";

export default function Navbar() {
    const { scrollY } = useScroll();
    const [hidden, setHidden] = useState(false);
    const [prevScroll, setPrevScroll] = useState(0);
    const [scrolled, setScrolled] = useState(false);
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
        setScrolled(latest > 50);
        setPrevScroll(latest);
    });

    const smoothScroll = useCallback((e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
        e.preventDefault();
        const el = document.getElementById(id);
        if (el) {
            el.scrollIntoView({ behavior: "smooth", block: "start" });
            window.history.pushState(null, "", `#${id}`);
        }
        setMobileMenuOpen(false);
    }, []);

    const links = [
        { name: "Projects", id: "projects", number: "01" },
        { name: "Stack", id: "stack", number: "02" },
        { name: "About", id: "about", number: "03" },
        { name: "Writing", id: "writing", number: "04" },
        { name: "Contact", id: "contact", number: "05" },
    ];

    return (
        <motion.nav
            variants={{
                visible: { y: 0 },
                hidden: { y: "-100%" },
            }}
            animate={hidden ? "hidden" : "visible"}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
                scrolled
                    ? "bg-background/90 backdrop-blur-lg border-b border-border shadow-[0_1px_10px_rgba(0,0,0,0.04)]"
                    : "bg-transparent border-b border-transparent"
            }`}
        >
            <div className="max-w-7xl mx-auto px-6 md:px-12 h-16 flex items-center justify-between">
                {/* Logo */}
                <Link
                    href="/"
                    className="text-xl font-display italic text-foreground hover:text-accent transition-colors duration-300"
                    onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                >
                    VA<span className="text-accent">.</span>
                </Link>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center gap-8">
                    {links.map((link) => (
                        <a
                            key={link.name}
                            href={`#${link.id}`}
                            onClick={(e) => smoothScroll(e, link.id)}
                            className="group flex items-center gap-1.5 text-xs font-medium uppercase tracking-[0.15em] text-foreground-secondary hover:text-accent transition-colors duration-300 cursor-pointer"
                        >
                            <span className="text-[9px] text-muted group-hover:text-accent transition-colors font-mono">
                                {link.number}
                            </span>
                            {link.name}
                        </a>
                    ))}

                    {/* Divider */}
                    <div className="w-[1px] h-4 bg-border" />

                    {/* Theme Toggle */}
                    <button
                        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                        className="p-1.5 rounded-full border border-border hover:border-accent hover:text-accent transition-all duration-300"
                        aria-label="Toggle theme"
                    >
                        {mounted && theme === "dark" ? (
                            <Sun className="w-3.5 h-3.5" />
                        ) : (
                            <Moon className="w-3.5 h-3.5" />
                        )}
                    </button>

                    {/* Resume Link */}
                    <a
                        href="/Vinayak_Agrawal_Resume.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.15em] text-accent border border-accent/30 rounded-full hover:bg-accent hover:text-background transition-all duration-300"
                    >
                        Resume
                        <ArrowUpRight className="w-3 h-3" />
                    </a>
                </div>

                {/* Mobile Controls */}
                <div className="flex md:hidden items-center gap-3">
                    <button
                        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                        className="p-1.5 rounded-full border border-border hover:border-accent transition-colors duration-300"
                        aria-label="Toggle theme"
                    >
                        {mounted && theme === "dark" ? (
                            <Sun className="w-3.5 h-3.5" />
                        ) : (
                            <Moon className="w-3.5 h-3.5" />
                        )}
                    </button>

                    <button
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        className="p-1.5 z-50 relative text-foreground"
                        aria-label="Toggle menu"
                    >
                        {mobileMenuOpen ? (
                            <X className="w-5 h-5" />
                        ) : (
                            <Menu className="w-5 h-5" />
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
                        className="fixed inset-0 top-0 bg-background z-40 flex flex-col items-start justify-center px-10 gap-6 md:hidden"
                    >
                        {/* Decorative ghost text in mobile menu */}
                        <div className="absolute right-6 top-[15%] ghost-text select-none" style={{ fontSize: "8rem" }} aria-hidden="true">
                            &rarr;
                        </div>

                        {links.map((link, i) => (
                            <motion.div
                                key={link.name}
                                initial={{ opacity: 0, x: 40 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.1 + i * 0.05, duration: 0.3 }}
                            >
                                <a
                                    href={`#${link.id}`}
                                    onClick={(e) => smoothScroll(e, link.id)}
                                    className="flex items-baseline gap-4 group cursor-pointer"
                                >
                                    <span className="mono-label text-accent">{link.number}</span>
                                    <span className="text-4xl font-display italic text-foreground group-hover:text-accent transition-colors duration-300">
                                        {link.name}
                                    </span>
                                </a>
                            </motion.div>
                        ))}

                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.4 }}
                            className="mt-8 pt-6 border-t border-border w-full"
                        >
                            <a
                                href="/Vinayak_Agrawal_Resume.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 px-5 py-2 text-sm font-medium uppercase tracking-[0.15em] text-accent border border-accent/30 rounded-full hover:bg-accent hover:text-background transition-all duration-300"
                            >
                                Resume
                                <ArrowUpRight className="w-3.5 h-3.5" />
                            </a>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
}
