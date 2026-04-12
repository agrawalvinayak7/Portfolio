export interface BlogPost {
    slug: string;
    title: string;
    excerpt: string;
    date: string;
    tags: string[];
    published: boolean;
}

export const posts: BlogPost[] = [];
