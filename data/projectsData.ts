export interface Project {
    id: string;
    number: string;
    title: string;
    slug: string;
    shortDescription: string;
    longDescription: string;
    year: string;
    status: 'completed' | 'ongoing' | 'archived';
    techStack: {
        frontend?: string[];
        backend?: string[];
        aiml?: string[];
        database?: string[];
        tools?: string[];
    };
    features: string[];
    metrics?: string[];
    challenges?: string;
    learnings?: string;
    links: {
        github?: string;
        live?: string;
        demo?: string;
    };
    thumbnail: string; // Path to image
    images?: string[]; // Gallery images for project page
}

export const projects: Project[] = [
    {
        id: "1",
        number: "01",
        title: "Multimodal Sentiment Analysis",
        slug: "multimodal-sentiment-analysis",
        shortDescription: "Built a production-grade AI system from scratch that quantifies emotions from short video content using multimodal analysis.",
        longDescription: "An end-to-end sentiment analysis platform that processes video, audio, and text simultaneously. The system breaks videos into utterances, analyzes each with deep learning models, and provides granular emotional insights through a modern dashboard.",
        year: "2025",
        status: "completed",
        techStack: {
            frontend: ["Next.js (App Router)", "Tailwind CSS", "NextAuth.js", "TypeScript"],
            backend: ["PyTorch", "OpenAI Whisper", "AWS SageMaker", "AWS S3"],
            database: ["PostgreSQL (Prisma)"],
            aiml: ["Multimodal Deep Learning"],
            tools: ["FFmpeg", "OpenCV"],
        },
        features: [
            "Multimodal AI: Analyzes Video, Audio, and Text simultaneously for higher accuracy",
            "Granular Analysis: Breaks down videos into specific utterances (sentences) and analyzes each one",
            "7 Emotion Classes: Detects Anger, Disgust, Fear, Joy, Neutral, Sadness, and Surprise",
            "Sentiment Detection: Classifies content as Positive, Neutral, or Negative",
            "Developer API: Provides a secure API with quota management for developers",
            "Modern Dashboard: A clean Next.js interface to upload videos and view detailed results",
        ],
        metrics: ["Trained on 10k samples"],
        links: {
            github: "https://github.com/agrawalvinayak7/Multimodel.git",
            live: "https://multimodel-omega.vercel.app/",
        },
        thumbnail: "/images/favicon.png",
    },
    {
        id: "2",
        number: "02",
        title: "Manaura Fitness",
        slug: "manaura-fitness",
        shortDescription: "Website for a community-driven fitness and wellness platform in Bangalore built for busy professionals.",
        longDescription: "A modern marketing and community site for Manaura Fitness — a Bangalore-based wellness community running structured group sessions at Cubbon Park. The site features class flow breakdowns, community value propositions, and a WhatsApp-integrated registration flow.",
        year: "2025",
        status: "completed",
        techStack: {
            frontend: ["Next.js 14 (App Router)", "TypeScript", "Tailwind CSS", "Framer Motion"],
            tools: ["Lucide React"],
        },
        features: [
            "Class flow breakdown showing the 5-part session structure",
            "Community-first messaging targeting busy Bangalore professionals",
            "WhatsApp and email-based registration with Google Forms integration",
            "Responsive design with smooth animations via Framer Motion",
            "Sections for About, Class Flow, Why Us, and Join",
        ],
        links: {
            github: "https://github.com/agrawalvinayak7/manaura",
            live: "https://www.manaurafitness.com/",
        },
        thumbnail: "/images/project-placeholder.jpg",
    },
    {
        id: "3",
        number: "03",
        title: "NSS Soft",
        slug: "nss-soft",
        shortDescription: "Enterprise software and AI agency website co-founded with a friend, built to convert inbound leads.",
        longDescription: "The official website for NSS Soft — a digital agency co-founded with a friend offering AI automations, web engineering, blockchain, and creative design services. The site is a single-page enterprise marketing build with a focus on scalability and lead conversion across India, the US, and Turkey.",
        year: "2025",
        status: "completed",
        techStack: {
            frontend: ["Next.js 16", "Tailwind CSS v4", "shadcn/ui", "TypeScript"],
        },
        features: [
            "Services showcase: AI Automations, Web Engineering, Blockchain/NFT, Creative Design, AI/ML Systems",
            "Two engagement models: Spark (fixed-scope) and Orbit (long-term sprint-based)",
            "Enterprise-positioned copy targeting leads across India, US, and Turkey",
            "Clean single-page layout optimized for conversion",
        ],
        links: {
            github: "https://github.com/shivxmr/nsssoft.in",
            live: "https://nsssoft-in.vercel.app/",
        },
        thumbnail: "/images/project-placeholder.jpg",
    },
    {
        id: "4",
        number: "04",
        title: "Football Turf Analytics",
        slug: "football-turf-analytics",
        shortDescription: "Real-time football analytics system using computer vision to track players, detect events, and surface insights on a live dashboard.",
        longDescription: "An ongoing computer vision project that processes live camera feeds from indoor turf venues to extract football analytics. Uses YOLO for player and ball detection, jersey color clustering for team classification, and rule-based logic for event detection — all surfaced on a real-time dashboard.",
        year: "2025",
        status: "ongoing",
        techStack: {
            aiml: ["YOLOv8", "OpenCV", "K-Means Clustering"],
            backend: ["Python"],
            tools: ["Perspective Calibration (pixel → meters)"],
        },
        features: [
            "Player and ball detection using YOLO",
            "Team classification via jersey color clustering",
            "Event detection: passes, shots, goals, and fouls",
            "Ball possession tracking per team",
            "Player distance covered and heatmap generation",
            "Perspective calibration to convert pixel coordinates to real-world meters",
            "Live analytics dashboard",
        ],
        links: {
            github: "https://github.com/agrawalvinayak7/footballTurf",
        },
        thumbnail: "/images/project-placeholder.jpg",
    },
];
