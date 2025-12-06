"use client";

import { ArrowUp, Github, Mail, Twitter } from "lucide-react";
import { cn } from "@/lib/utils";

export default function Footer() {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <footer className="w-full py-10 bg-neutral-100 dark:bg-neutral-900 border-t border-neutral-200 dark:border-neutral-800 transition-colors">
            <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="text-sm text-muted-foreground">
                    © {new Date().getFullYear()} Vinayak Agrawal
                </div>

                <div className="flex items-center gap-6">
                    <a
                        href="mailto:vinayakagrawalw@gmail.com"
                        className="text-muted-foreground hover:text-accent transition-colors"
                        aria-label="Email"
                    >
                        <Mail className="w-5 h-5" />
                    </a>
                    <a
                        href="https://x.com/agrawalvinayak7"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-accent transition-colors"
                        aria-label="Twitter"
                    >
                        <Twitter className="w-5 h-5" />
                    </a>
                    <a
                        href="https://github.com/agrawalvinayak7"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-accent transition-colors"
                        aria-label="GitHub"
                    >
                        <Github className="w-5 h-5" />
                    </a>
                </div>

                <button
                    onClick={scrollToTop}
                    className="flex items-center gap-2 text-sm font-medium hover:text-accent transition-colors group"
                >
                    Back to top
                    <ArrowUp className="w-4 h-4 group-hover:-translate-y-1 transition-transform" />
                </button>
            </div>
        </footer>
    );
}
