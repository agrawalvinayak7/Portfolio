import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function BlogPage() {
    return (
        <main className="min-h-screen pt-32 pb-20 px-6 md:px-12 max-w-5xl mx-auto">
            <Link
                href="/"
                className="inline-flex items-center gap-2 text-muted hover:text-accent transition-colors mb-16 group text-sm font-sans"
            >
                <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                Home
            </Link>

            <h1 className="text-5xl md:text-6xl font-display italic text-foreground mb-4">
                Writing
            </h1>

            <div className="h-[2px] w-16 bg-accent mb-12" />

            <p className="text-xl text-foreground-secondary font-light max-w-2xl">
                Essays on building, shipping, and thinking about products.
                <br />
                <span className="text-muted">Coming soon.</span>
            </p>
        </main>
    );
}
