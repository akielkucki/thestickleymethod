// app/blog/[slug]/page.tsx
import { notFound } from "next/navigation";
import { getArticleBySlug, getArticles } from "@/lib/seofriend";
import ReactMarkdown from "react-markdown";

export const revalidate = 3600;

// Generate static paths for all articles
export async function generateStaticParams() {
    const articles = await getArticles();
    return articles.map((article) => ({
        slug: article.slug,
    }));
}

// Generate metadata for SEO
export async function generateMetadata({
                                           params
                                       }: {
    params: Promise<{ slug: string }>
}) {
    const { slug } = await params;
    const article = await getArticleBySlug(slug);

    if (!article) return { title: "Article Not Found" };

    return {
        title: article.title,
        description: article.meta_description,
        openGraph: {
            title: article.title,
            description: article.meta_description || "",
            images: article.featured_image_url ? [article.featured_image_url] : [],
        },
    };
}

export default async function BlogPostPage({
                                               params,
                                           }: {
    params: Promise<{ slug: string }>;
}) {
    const { slug } = await params;
    const article = await getArticleBySlug(slug);

    if (!article) {
        notFound();
    }

    return (
        <article className="max-w-3xl mx-auto px-4 py-12">
            {article.featured_image_url && (
                <img
                    src={article.featured_image_url}
                    alt={article.title}
                    className="w-full h-64 md:h-96 object-cover rounded-xl mb-8"
                />
            )}

            <h1 className="text-4xl font-bold mb-4">{article.title}</h1>

            <div className="flex items-center gap-4 text-gray-500 mb-8">
                <span>{new Date(article.published_at).toLocaleDateString()}</span>
                <span>•</span>
                <span>{Math.ceil(article.word_count / 200)} min read</span>
            </div>

            <div className="prose prose-lg max-w-none">
                <ReactMarkdown>{article.content}</ReactMarkdown>
            </div>
        </article>
    );
}