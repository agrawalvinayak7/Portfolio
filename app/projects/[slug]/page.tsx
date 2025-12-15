import { projects } from "@/data/projectsData";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Github, ExternalLink, Calendar } from "lucide-react";

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

    return (
        <main className="min-h-screen pt-32 pb-20 px-6 md:px-12 max-w-7xl mx-auto">
            {/* Navigation */}
            <Link
                href="/#projects"
                className="inline-flex items-center gap-2 text-muted-foreground hover:text-accent transition-colors mb-12 group"
            >
                <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                Back to Projects
            </Link>

            {/* Hero Header */}
            <div className="mb-16">
                <div className="flex items-center gap-4 mb-6">
                    <span className="text-accent font-mono font-medium">{project.number}</span>
                    <span className="px-3 py-1 rounded-full border border-neutral-200 dark:border-neutral-800 text-xs font-medium uppercase tracking-wide">
                        {project.status === "completed" ? `Completed ${project.year}` : "In Development"}
                    </span>
                </div>

                <h1 className="text-4xl md:text-6xl font-bold font-display mb-6">{project.title}</h1>
                <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl leading-relaxed">
                    {project.shortDescription}
                </p>
            </div>

            {/* Hero Image */}
            <div className="relative aspect-video w-full rounded-xl overflow-hidden bg-neutral-100 dark:bg-neutral-900 mb-20 border border-neutral-200 dark:border-neutral-800">
                <Image
                    src={project.thumbnail}
                    alt={project.title}
                    fill
                    className="object-cover"
                    priority
                />
            </div>

            {/* Content Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 lg:gap-24 mb-32">
                {/* Main Content - Left */}
                <div className="lg:col-span-2 space-y-16">
                    <section>
                        <h2 className="text-2xl font-bold font-display mb-6">Overview</h2>
                        <p className="text-lg text-muted-foreground leading-relaxed whitespace-pre-line">
                            {project.longDescription}
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold font-display mb-6">Key Features</h2>
                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {project.features.map((feature, idx) => (
                                <li key={idx} className="flex gap-4 items-start">
                                    <div className="mt-2 w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                                    <span className="text-muted-foreground">{feature}</span>
                                </li>
                            ))}
                        </ul>
                    </section>

                    {project.metrics && project.metrics.length > 0 && (
                        <section>
                            <h2 className="text-2xl font-bold font-display mb-6">Impact & Metrics</h2>
                            <div className="flex flex-wrap gap-4">
                                {project.metrics.map((metric, idx) => (
                                    <div key={idx} className="p-6 bg-neutral-50 dark:bg-neutral-900 rounded-lg border border-neutral-100 dark:border-neutral-800">
                                        <span className="text-lg font-medium">{metric}</span>
                                    </div>
                                ))}
                            </div>
                        </section>
                    )}
                </div>

                {/* Sidebar - Right */}
                <div className="space-y-12">
                    {/* Links */}
                    <div className="flex flex-col gap-4">
                        {project.links.demo && (
                            <a
                                href={project.links.demo}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-full py-4 bg-foreground text-background font-medium rounded-lg hover:bg-accent hover:text-white transition-all flex items-center justify-center gap-2 group"
                            >
                                Launch Demo
                                <ExternalLink className="w-4 h-4 group-hover:rotate-45 transition-transform" />
                            </a>
                        )}
                        {project.links.github && (
                            <a
                                href={project.links.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-full py-4 border border-neutral-200 dark:border-neutral-800 font-medium rounded-lg hover:border-accent hover:text-accent transition-all flex items-center justify-center gap-2"
                            >
                                View Code
                                <Github className="w-4 h-4" />
                            </a>
                        )}
                        {project.links.live && (
                            <a
                                href={project.links.live}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-full py-4 border border-neutral-200 dark:border-neutral-800 font-medium rounded-lg hover:border-accent hover:text-accent transition-all flex items-center justify-center gap-2"
                            >
                                View Live
                                <ExternalLink className="w-4 h-4" />
                            </a>
                        )}
                    </div>

                    {/* Tech Stack */}
                    <div>
                        <h3 className="text-sm font-bold uppercase tracking-wider text-muted-foreground mb-6">Technologies</h3>

                        <div className="space-y-6">
                            {project.techStack.frontend && (
                                <div>
                                    <div className="text-xs font-semibold mb-2 opacity-50">FRONTEND</div>
                                    <div className="flex flex-wrap gap-2">
                                        {project.techStack.frontend.map(t => (
                                            <span key={t} className="px-3 py-1 bg-neutral-100 dark:bg-neutral-800 rounded text-sm">{t}</span>
                                        ))}
                                    </div>
                                </div>
                            )}
                            {project.techStack.backend && (
                                <div>
                                    <div className="text-xs font-semibold mb-2 opacity-50">BACKEND</div>
                                    <div className="flex flex-wrap gap-2">
                                        {project.techStack.backend.map(t => (
                                            <span key={t} className="px-3 py-1 bg-neutral-100 dark:bg-neutral-800 rounded text-sm">{t}</span>
                                        ))}
                                    </div>
                                </div>
                            )}
                            {project.techStack.aiml && (
                                <div>
                                    <div className="text-xs font-semibold mb-2 opacity-50">AI / ML</div>
                                    <div className="flex flex-wrap gap-2">
                                        {project.techStack.aiml.map(t => (
                                            <span key={t} className="px-3 py-1 bg-neutral-100 dark:bg-neutral-800 rounded text-sm">{t}</span>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>

            {/* Project Navigation */}
            <div className="border-t border-neutral-200 dark:border-neutral-800 pt-12 flex justify-between items-center">
                <Link href={`/projects/${prevProject.slug}`} className="group flex flex-col items-start gap-1">
                    <span className="text-sm text-muted-foreground flex items-center gap-2 group-hover:text-accent transition-colors">
                        <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" /> Previous
                    </span>
                    <span className="text-xl font-bold font-display">{prevProject.title}</span>
                </Link>

                <Link href={`/projects/${nextProject.slug}`} className="group flex flex-col items-end gap-1 text-right">
                    <span className="text-sm text-muted-foreground flex items-center gap-2 group-hover:text-accent transition-colors">
                        Next <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </span>
                    <span className="text-xl font-bold font-display">{nextProject.title}</span>
                </Link>
            </div>
        </main>
    );
}
