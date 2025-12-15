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
        title: "Viral Post",
        slug: "viral-post",
        shortDescription: "Schedule your X/LinkedIn posts and let AI grow your account without manual intervention.",
        longDescription: "An AI-powered social media automation platform (currently in development) that schedules posts and uses AI to optimize content for engagement. The system analyzes trends, suggests improvements, and manages posting schedules automatically.",
        year: "2025",
        status: "ongoing",
        techStack: {
            frontend: ["Next.js"],
            aiml: ["OpenAI API"],
            backend: ["Python"],
        },
        features: [
            "Schedule posts for X and LinkedIn",
            "AI content optimization",
            "Trend analysis"
        ],
        links: {},
        thumbnail: "/images/viral-post-thumb.jpg",
    }
];
