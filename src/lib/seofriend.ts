// lib/seofriend.ts
const API_URL = process.env.SEOFRIEND_API_URL;
const SITE_ID = process.env.SEOFRIEND_SITE_ID;
const API_KEY = process.env.SEOFRIEND_API_KEY;

export interface Article {
    id: string;
    title: string;
    slug: string;
    content: string;
    meta_description: string | null;
    featured_image_url: string | null;
    word_count: number;
    published_at: string;
    created_at: string;
}

export async function getArticles(): Promise<Article[]> {
    const res = await fetch(
        `${API_URL}/api/public/articles?siteId=${SITE_ID}`,
        {
            headers: { "x-api-key": API_KEY! },
            next: { revalidate: 3600 }, // Cache for 1 hour
        }
    );

    if (!res.ok) {
        throw new Error("Failed to fetch articles");
    }

    const data = await res.json();
    return data.articles;
}

export async function getArticleBySlug(slug: string): Promise<Article | null> {
    const res = await fetch(
        `${API_URL}/api/public/articles?siteId=${SITE_ID}&slug=${slug}`,
        {
            headers: { "x-api-key": API_KEY! },
            next: { revalidate: 3600 },
        }
    );

    if (!res.ok) {
        return null;
    }

    const data = await res.json();
    return data.article;
}