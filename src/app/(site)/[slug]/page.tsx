import { createReader } from '@keystatic/core/reader';
import keystaticConfig from '@/keystatic.config';
import { notFound } from 'next/navigation';
import { DocumentRenderer } from '@keystatic/core/renderer';

const reader = createReader(process.cwd(), keystaticConfig);

export default async function DynamicPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const pageData = await reader.collections.pages.read(slug);

    if (!pageData) {
        notFound();
    }

    const content = await pageData.content();

    return (
        <div className="container py-24 px-4 md:px-6">
            <article className="max-w-3xl mx-auto space-y-12">
                <header className="space-y-4">
                    <h1 className="text-4xl font-black tracking-tight sm:text-5xl md:text-6xl text-foreground">
                        {pageData.title}
                    </h1>
                    <div className="h-1.5 w-20 bg-primary rounded-full" />
                </header>

                <div className="prose prose-lg dark:prose-invert prose-primary max-w-none">
                    <DocumentRenderer document={content} />
                </div>
            </article>
        </div>
    );
}

export async function generateStaticParams() {
    const slugs = await reader.collections.pages.list();
    return slugs.map(slug => ({ slug }));
}
