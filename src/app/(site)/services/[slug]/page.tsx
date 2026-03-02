import { createReader } from '@keystatic/core/reader';
import keystaticConfig from '@/keystatic.config';
import { notFound } from 'next/navigation';
import ServiceDetailClient from './service-client';

const reader = createReader(process.cwd(), keystaticConfig);

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const service = await reader.collections.services.read(slug);

    if (!service) {
        notFound();
    }

    const content = await service.content();

    return <ServiceDetailClient service={service} content={content} />;
}

export async function generateStaticParams() {
    const slugs = await reader.collections.services.list();
    return slugs.map(slug => ({ slug }));
}
