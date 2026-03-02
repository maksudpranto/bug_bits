import { createReader } from '@keystatic/core/reader';
import keystaticConfig from '@/keystatic.config';
import { Metadata } from 'next';
import ServicesClient from './services-client';

export const metadata: Metadata = {
    title: 'Services | Bug Bits',
    description: 'Explore our software development services.',
};

const reader = createReader(process.cwd(), keystaticConfig);

export default async function ServicesPage() {
    const services = await reader.collections.services.all();
    const pageData = await reader.singletons.servicesPage.read();

    return <ServicesClient services={services} pageData={pageData} />;
}
