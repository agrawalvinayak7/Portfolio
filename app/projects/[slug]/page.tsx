import { projects } from "@/data/projectsData";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Github, ExternalLink, ArrowUpRight } from "lucide-react";

export async function generateStaticParams() {
    return projects.map((project) => ({
        slug: project.slug,
    }));
}

export default async function ProjectPage(props: { params: Promise<{ slug: string }> }) {
    const params = await props.params;
    const projectIndex = projects.findIndex((p) => p.slug === params.slug);

    if (projectIndex === -1) {
        notFound();
    }

    const project = projects[projectIndex];
    const nextProject = projects[(projectIndex + 1) % projects.length];
    const prevProject = projects[(projectIndex - 1 + projects.length) % projects.length];
    const number = String(projectIndex + 1).padStart(2, "0");

    return (
        <main className="min-h-screen pt-32 pb-20 px-6 md:px-12 max-w-6xl mx-auto">
            {/* Back Navigation */}
            <Link
                href="/#projects"
                className="inline-flex items-center gap-2 text-muted hover:text-accent transition-colors duration-300 mb-16 group mono-label"
            >
                <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-1 transition-transform duration-300" />
                Back to Projects
            </Link>

            {/* Header */}
            <div className="relative mb-16">
                {/* Ghost number */}
                <span
                    className="absolute -top-8 -left-4 ghost-text select-none pointer-events-none hidden md:block"
                    style={{ fontSize: "10rem", lineHeight: "0.85" }}
                    aria-hidden="true"
                >
                    {number}
                </span>

                <div className="relative">
                    <div className="flex items-center gap-4 mb-6">
                        <span className="mono-label text-accent">{number}</span>
                        <span className="px-3 py-1 rounded-full border border-border text-[10px] font-mono font-medium uppercase tracking-wider">
                            {project.status === "completed" ? `Completed ${project.year}` : "In Development"}
                        </span>
                    </div>

                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-display italic text-foreground mb-6">
                        {project.title}
                    </h1>

                    <div className="accent-rule mb-8 max-w-[100px]" />

                    <p className="text-xl md:text-2xl text-foreground-secondary font-light max-w-3xl leading-relaxed">
                        {project.shortDescription}
                    </p>
                </div>
            </div>

            {/* Hero Image */}
            <div className="relative aspect-video w-full rounded-lg overflow-hidden bg-background-secondary mb-20 border border-border corner-marks image-reveal">
                <Image
                    src={project.thumbnail}
                    alt={project.title}
                    fill
                    className="object-cover"
                    priority
                />
            </div>

            {/* Content Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 lg:gap-20 mb-32">
                {/* Main Content */}
                <div className="lg:col-span-2 space-y-16">
                    <section>
                        <h2 className="text-2xl md:text-3xl font-display italic text-foreground mb-2">Overview</h2>
                        <div className="accent-rule mb-6 max-w-[60px]" />
                        <p className="text-base text-foreground-secondary font-light leading-relaxed whitespace-pre-line">
                            {project.longDescription}
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl md:text-3xl font-display italic text-foreground mb-2">Key Features</h2>
                        <div className="accent-rule mb-6 max-w-[60px]" />
                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-5">
                            {project.features.map((feature, idx) => (
                                <li key={idx} className="flex gap-4 items-start p-4 border border-border rounded-lg hover:bg-accent-soft transition-colors duration-500">
                                    <span className="mono-label text-accent mt-0.5 shrink-0">
                                        {String(idx + 1).padStart(2, "0")}
                                    </span>
                                    <span className="text-foreground-secondary font-light text-sm">{feature}</span>
                                </li>
                            ))}
                        </ul>
                    </section>

                    {project.metrics && project.metrics.length > 0 && (
                        <section>
                            <h2 className="text-2xl md:text-3xl font-display italic text-foreground mb-2">Impact</h2>
                            <div className="accent-rule mb-6 max-w-[60px]" />
                            <div className="flex flex-wrap gap-4">
                                {project.metrics.map((metric, idx) => (
                                    <div
                                        key={idx}
                                        className="luxury-border p-5 rounded-lg"
                                    >
                                        <span className="text-base font-medium text-foreground">{metric}</span>
                                    </div>
                                ))}
                            </div>
                        </section>
                    )}
                </div>

                {/* Sidebar */}
                <div className="space-y-10">
                    {/* Links */}
                    <div className="flex flex-col gap-3">
                        {project.links.demo && (
                            <a
                                href={project.links.demo}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-full py-3.5 bg-foreground text-background font-sans text-sm font-medium rounded-lg hover:bg-accent transition-colors duration-300 flex items-center justify-center gap-2 group"
                            >
                                Launch Demo
                                <ExternalLink className="w-3.5 h-3.5 group-hover:rotate-45 transition-transform duration-300" />
                            </a>
                        )}
                        {project.links.github && (
                            <a
                                href={project.links.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-full py-3.5 border border-border font-sans text-sm font-medium rounded-lg hover:border-accent hover:text-accent transition-all duration-300 flex items-center justify-center gap-2"
                            >
                                View Code
                                <Github className="w-3.5 h-3.5" />
                            </a>
                        )}
                        {project.links.live && (
                            <a
                                href={project.links.live}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-full py-3.5 border border-border font-sans text-sm font-medium rounded-lg hover:border-accent hover:text-accent transition-all duration-300 flex items-center justify-center gap-2"
                            >
                                View Live
                                <ExternalLink className="w-3.5 h-3.5" />
                            </a>
                        )}
                    </div>

                    {/* Tech Stack */}
                    <div className="luxury-border p-6 rounded-lg">
                        <h3 className="mono-label text-accent mb-6">
                            Technologies
                        </h3>
                        <div className="space-y-5">
                            {project.techStack.frontend && (
                                <div>
                                    <div className="mono-label mb-2">Frontend</div>
                                    <p className="text-foreground font-light text-sm">
                                        {project.techStack.frontend.join(", ")}
                                    </p>
                                </div>
                            )}
                            {project.techStack.backend && (
                                <div>
                                    <div className="mono-label mb-2">Backend</div>
                                    <p className="text-foreground font-light text-sm">
                                        {project.techStack.backend.join(", ")}
                                    </p>
                                </div>
                            )}
                            {project.techStack.aiml && (
                                <div>
                                    <div className="mono-label mb-2">AI / ML</div>
                                    <p className="text-foreground font-light text-sm">
                                        {project.techStack.aiml.join(", ")}
                                    </p>
                                </div>
                            )}
                            {project.techStack.database && (
                                <div>
                                    <div className="mono-label mb-2">Database</div>
                                    <p className="text-foreground font-light text-sm">
                                        {project.techStack.database.join(", ")}
                                    </p>
                                </div>
                            )}
                            {project.techStack.tools && (
                                <div>
                                    <div className="mono-label mb-2">Tools</div>
                                    <p className="text-foreground font-light text-sm">
                                        {project.techStack.tools.join(", ")}
                                    </p>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>

            {/* Project Navigation */}
            <div className="border-t border-border pt-12 grid grid-cols-2 gap-8">
                <Link href={`/projects/${prevProject.slug}`} className="group flex flex-col items-start gap-2">
                    <span className="mono-label flex items-center gap-2 group-hover:text-accent transition-colors duration-300">
                        <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-1 transition-transform duration-300" /> Previous
                    </span>
                    <span className="text-lg md:text-xl font-display italic text-foreground group-hover:text-accent transition-colors duration-300">
                        {prevProject.title}
                    </span>
                </Link>

                <Link href={`/projects/${nextProject.slug}`} className="group flex flex-col items-end gap-2 text-right">
                    <span className="mono-label flex items-center gap-2 group-hover:text-accent transition-colors duration-300">
                        Next <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform duration-300" />
                    </span>
                    <span className="text-lg md:text-xl font-display italic text-foreground group-hover:text-accent transition-colors duration-300">
                        {nextProject.title}
                    </span>
                </Link>
            </div>
        </main>
    );
}
