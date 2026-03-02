import { createReader } from '@keystatic/core/reader';
import keystaticConfig from '@/keystatic.config';
import { notFound } from 'next/navigation';
import DynamicClient from './dynamic-client';

const reader = createReader(process.cwd(), keystaticConfig);

export default async function DynamicPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const pageData = await reader.collections.pages.read(slug);

    if (!pageData) {
        if (slug === 'about' || slug === 'contact' || slug === 'services') {
            // These are handled by their own folders
            notFound();
        }
        notFound();
    }

    const content = await pageData.content();

    return <DynamicClient title={pageData.title} content={content} />;
}

export async function generateStaticParams() {
    const slugs = await reader.collections.pages.list();
    return slugs.map(slug => ({ slug }));
}
